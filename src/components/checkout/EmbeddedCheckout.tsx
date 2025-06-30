
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useMediaQuery } from '@/hooks/use-mobile';
import { preloadCheckoutResources } from '@/services/polarService';
import CheckoutMobileSheet from './CheckoutMobileSheet';
import CheckoutDesktopDialog from './CheckoutDesktopDialog';

interface EmbeddedCheckoutProps {
  isOpen: boolean;
  onClose: () => void;
  checkoutUrl: string | null;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  onSuccess?: () => void;
}

const EmbeddedCheckout = ({ 
  isOpen, 
  onClose, 
  checkoutUrl, 
  isLoading,
  setIsLoading,
  onSuccess 
}: EmbeddedCheckoutProps) => {
  const [hasError, setHasError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [isClosing, setIsClosing] = useState(false);
  const [checkoutStartTime, setCheckoutStartTime] = useState<number | null>(null);
  const [checkoutProgress, setCheckoutProgress] = useState<'loading' | 'loaded' | 'processing' | 'completed'>('loading');
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Preload resources when component mounts
  useEffect(() => {
    preloadCheckoutResources();
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setIsLoading(true);
      setHasError(false);
      setRetryCount(0);
      setIsClosing(false);
      setCheckoutStartTime(null);
      setCheckoutProgress('loading');
    } else {
      setCheckoutStartTime(performance.now());
      
      // Dispatch checkout started event
      if (checkoutUrl) {
        window.dispatchEvent(new CustomEvent('checkout-iframe-started', {
          detail: { url: checkoutUrl, timestamp: new Date().toISOString() }
        }));
      }
    }
  }, [isOpen, setIsLoading, checkoutUrl]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Listen for messages from Polar's checkout iframe
      if (event.origin !== 'https://polar.sh') return;

      console.log('Received message from Polar checkout:', event.data);

      if (event.data.type === 'checkout.success') {
        console.log('Checkout completed successfully');
        setCheckoutProgress('completed');
        toast.success('🎉 Payment completed successfully!', {
          description: 'Check your email for download instructions.',
          duration: 5000,
        });
        onSuccess?.();
        
        // Close after showing success message
        setTimeout(() => {
          handleClose();
        }, 2000);
      } else if (event.data.type === 'checkout.cancelled') {
        console.log('Checkout was cancelled');
        toast.info('Checkout cancelled', {
          description: 'No payment was processed.',
          duration: 3000,
        });
        handleClose();
      } else if (event.data.type === 'checkout.error') {
        console.error('Checkout error:', event.data.error);
        setHasError(true);
        setIsLoading(false);
        setCheckoutProgress('loading');
        toast.error('Checkout failed', {
          description: 'Please try again or contact support if the issue persists.',
          duration: 5000,
        });
      } else if (event.data.type === 'checkout.processing') {
        console.log('Payment is being processed');
        setCheckoutProgress('processing');
        toast.loading('Processing payment...', {
          description: 'Please wait while we process your payment.',
          id: 'payment-processing',
        });
      }
    };

    // Handle escape key
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen && !isLoading && checkoutProgress !== 'processing') {
        event.preventDefault();
        handleClose();
      }
    };

    if (isOpen) {
      window.addEventListener('message', handleMessage);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('message', handleMessage);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onSuccess, isLoading, checkoutProgress]);

  const handleClose = () => {
    // Prevent closing during payment processing
    if (checkoutProgress === 'processing') {
      toast.warning('Payment in progress', {
        description: 'Please wait for the payment to complete before closing.',
        duration: 3000,
      });
      return;
    }

    if (isLoading && !hasError && checkoutProgress !== 'completed') {
      // Show confirmation for closing during active checkout
      const confirmClose = window.confirm(
        'Are you sure you want to close the checkout? Your progress may be lost.'
      );
      if (!confirmClose) return;
    }
    
    setIsClosing(true);
    
    // Dismiss any processing toasts
    toast.dismiss('payment-processing');
    
    setTimeout(() => {
      onClose();
    }, 150);
  };

  const handleIframeLoad = () => {
    const loadTime = checkoutStartTime ? performance.now() - checkoutStartTime : 0;
    console.log('Checkout iframe loaded successfully in', Math.round(loadTime), 'ms');
    
    setIsLoading(false);
    setHasError(false);
    setRetryCount(0);
    setCheckoutProgress('loaded');
    
    // Dispatch checkout loaded event
    window.dispatchEvent(new CustomEvent('checkout-iframe-loaded', {
      detail: { 
        loadTime: Math.round(loadTime), 
        timestamp: new Date().toISOString() 
      }
    }));
  };

  const handleIframeError = () => {
    console.error('Failed to load checkout iframe');
    setIsLoading(false);
    setHasError(true);
    setCheckoutProgress('loading');
    toast.error('Failed to load checkout', {
      description: 'Please check your connection and try again.',
      duration: 5000,
    });
  };

  const handleRetry = () => {
    setRetryCount(prev => prev + 1);
    setHasError(false);
    setIsLoading(true);
    setCheckoutProgress('loading');
    setCheckoutStartTime(performance.now());
    
    // Force iframe reload by changing src
    const iframe = document.querySelector('#polar-checkout-iframe') as HTMLIFrameElement;
    if (iframe && checkoutUrl) {
      iframe.src = `${checkoutUrl}&retry=${retryCount + 1}&t=${Date.now()}`;
    }
    
    toast.info(`Retrying checkout (${retryCount + 1}/3)...`);
  };

  const getProgressMessage = () => {
    switch (checkoutProgress) {
      case 'loading':
        return 'Loading secure checkout...';
      case 'loaded':
        return 'Checkout ready';
      case 'processing':
        return 'Processing payment...';
      case 'completed':
        return 'Payment completed!';
      default:
        return 'Loading...';
    }
  };

  const commonProps = {
    isOpen,
    onClose: handleClose,
    checkoutUrl,
    isLoading,
    hasError,
    checkoutProgress,
    retryCount,
    onIframeLoad: handleIframeLoad,
    onIframeError: handleIframeError,
    onRetry: handleRetry,
    getProgressMessage
  };

  return isMobile ? (
    <CheckoutMobileSheet {...commonProps} />
  ) : (
    <CheckoutDesktopDialog {...commonProps} />
  );
};

export default EmbeddedCheckout;
