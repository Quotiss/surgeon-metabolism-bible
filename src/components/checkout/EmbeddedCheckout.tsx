
import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { X, Loader2, AlertCircle, RefreshCw, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import { useMediaQuery } from '@/hooks/use-mobile';
import { preloadCheckoutResources } from '@/services/polarService';

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

  const LoadingContent = () => (
    <div className="flex items-center justify-center min-h-[400px] bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="flex flex-col items-center gap-6 text-center max-w-md">
        <div className="relative">
          {checkoutProgress === 'processing' ? (
            <div className="relative">
              <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
              <div className="absolute inset-0 h-12 w-12 rounded-full border-2 border-green-200 animate-pulse" />
            </div>
          ) : checkoutProgress === 'completed' ? (
            <CheckCircle className="h-12 w-12 text-green-600 animate-pulse" />
          ) : (
            <div className="relative">
              <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
              <div className="absolute inset-0 h-12 w-12 rounded-full border-2 border-blue-200 animate-pulse" />
            </div>
          )}
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-slate-900">
            {checkoutProgress === 'completed' ? 'Success!' : 'Secure Checkout'}
          </h3>
          <p className="text-slate-600">
            {getProgressMessage()}
          </p>
          {checkoutProgress === 'processing' && (
            <p className="text-sm text-slate-500">
              Please don't close this window during payment processing.
            </p>
          )}
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <div className={`w-2 h-2 rounded-full animate-pulse ${
            checkoutProgress === 'completed' ? 'bg-green-500' : 'bg-blue-500'
          }`} />
          <span>Protected by Polar • SSL Encrypted</span>
        </div>
      </div>
    </div>
  );

  const ErrorContent = () => (
    <div className="flex items-center justify-center min-h-[400px] bg-gradient-to-br from-red-50 to-orange-50">
      <div className="flex flex-col items-center gap-6 text-center max-w-md">
        <div className="relative">
          <AlertCircle className="h-12 w-12 text-red-500" />
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-900">Checkout Unavailable</h3>
          <p className="text-slate-600">
            We're having trouble loading the checkout form. This might be due to a network issue or temporary service interruption.
          </p>
          {retryCount > 0 && (
            <p className="text-sm text-red-600">
              Retry attempt {retryCount} of 3 failed.
            </p>
          )}
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button 
            onClick={handleRetry} 
            variant="default" 
            className="flex items-center gap-2"
            disabled={retryCount >= 3}
          >
            <RefreshCw className="h-4 w-4" />
            {retryCount >= 3 ? 'Max retries reached' : `Try Again ${retryCount > 0 ? `(${retryCount + 1}/3)` : ''}`}
          </Button>
          <Button onClick={handleClose} variant="outline">
            Close and Try Later
          </Button>
        </div>
      </div>
    </div>
  );

  const CheckoutContent = () => (
    <div className="flex-1 relative min-h-[500px]">
      {(isLoading || checkoutProgress === 'processing') && (
        <div className="absolute inset-0 z-10 bg-white">
          <LoadingContent />
        </div>
      )}

      {hasError ? (
        <ErrorContent />
      ) : (
        checkoutUrl && (
          <iframe
            id="polar-checkout-iframe"
            src={checkoutUrl}
            className="w-full h-full min-h-[500px] border-0 rounded-lg"
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation allow-popups-to-escape-sandbox"
            title="Polar Secure Checkout"
            allow="payment; camera; microphone; geolocation"
          />
        )
      )}
    </div>
  );

  // Mobile Sheet Component
  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={handleClose}>
        <SheetContent 
          side="bottom" 
          className="h-[95vh] w-full p-0 rounded-t-xl border-t-2 border-blue-200"
        >
          <SheetHeader className="px-4 py-3 border-b bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-xl">
            <SheetTitle className="text-lg font-bold flex items-center justify-between">
              Complete Your Purchase
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClose}
                className="text-white hover:bg-white/20 rounded-full p-2"
                disabled={checkoutProgress === 'processing'}
              >
                <X className="h-4 w-4" />
              </Button>
            </SheetTitle>
            <SheetDescription className="text-blue-100">
              {getProgressMessage()} • Secure checkout powered by Polar
            </SheetDescription>
          </SheetHeader>
          <div className="flex-1 bg-white">
            <CheckoutContent />
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  // Desktop Dialog Component
  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-6xl w-[95vw] min-h-[85vh] max-h-[90vh] p-0 overflow-hidden rounded-xl border-2 border-blue-200 shadow-2xl">
        <DialogHeader className="px-6 py-4 border-b bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <DialogTitle className="text-xl font-bold flex items-center justify-between">
            Complete Your Purchase
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
              disabled={checkoutProgress === 'processing'}
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close checkout</span>
            </Button>
          </DialogTitle>
          <DialogDescription className="text-blue-100 text-base">
            {getProgressMessage()} • SSL encrypted • Secure checkout powered by Polar
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 bg-white overflow-hidden">
          <CheckoutContent />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EmbeddedCheckout;
