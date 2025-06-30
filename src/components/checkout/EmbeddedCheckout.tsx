
import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { X, Loader2, AlertCircle, RefreshCw } from 'lucide-react';
import { toast } from 'sonner';
import { useMediaQuery } from '@/hooks/use-mobile';

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
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    if (!isOpen) {
      setIsLoading(true);
      setHasError(false);
      setRetryCount(0);
      setIsClosing(false);
    }
  }, [isOpen, setIsLoading]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Listen for messages from Polar's checkout iframe
      if (event.origin !== 'https://polar.sh') return;

      console.log('Received message from Polar checkout:', event.data);

      if (event.data.type === 'checkout.success') {
        console.log('Checkout completed successfully');
        toast.success('🎉 Payment completed successfully!');
        onSuccess?.();
        handleClose();
      } else if (event.data.type === 'checkout.cancelled') {
        console.log('Checkout was cancelled');
        handleClose();
      } else if (event.data.type === 'checkout.error') {
        console.error('Checkout error:', event.data.error);
        setHasError(true);
        setIsLoading(false);
        toast.error('Checkout failed. Please try again.');
      }
    };

    // Handle escape key
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen && !isLoading) {
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
  }, [isOpen, onSuccess, isLoading]);

  const handleClose = () => {
    if (isLoading && !hasError) {
      // Show confirmation for closing during active checkout
      const confirmClose = window.confirm(
        'Are you sure you want to close the checkout? Your progress may be lost.'
      );
      if (!confirmClose) return;
    }
    
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 150); // Small delay for smooth animation
  };

  const handleIframeLoad = () => {
    console.log('Checkout iframe loaded successfully');
    setIsLoading(false);
    setHasError(false);
    setRetryCount(0);
  };

  const handleIframeError = () => {
    console.error('Failed to load checkout iframe');
    setIsLoading(false);
    setHasError(true);
    toast.error('Failed to load checkout. Please try again.');
  };

  const handleRetry = () => {
    setRetryCount(prev => prev + 1);
    setHasError(false);
    setIsLoading(true);
    
    // Force iframe reload by changing src
    const iframe = document.querySelector('#polar-checkout-iframe') as HTMLIFrameElement;
    if (iframe && checkoutUrl) {
      iframe.src = `${checkoutUrl}&retry=${retryCount + 1}`;
    }
  };

  const LoadingContent = () => (
    <div className="flex items-center justify-center min-h-[400px] bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="relative">
          <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
          <div className="absolute inset-0 h-12 w-12 rounded-full border-2 border-blue-200 animate-pulse" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-slate-900">Loading Secure Checkout</h3>
          <p className="text-slate-600 max-w-sm">
            Please wait while we prepare your secure payment form...
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span>Protected by Polar</span>
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
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button onClick={handleRetry} variant="default" className="flex items-center gap-2">
            <RefreshCw className="h-4 w-4" />
            Try Again {retryCount > 0 && `(${retryCount + 1})`}
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
      {isLoading && (
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
              >
                <X className="h-4 w-4" />
              </Button>
            </SheetTitle>
            <SheetDescription className="text-blue-100">
              Secure checkout powered by Polar
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
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close checkout</span>
            </Button>
          </DialogTitle>
          <DialogDescription className="text-blue-100 text-base">
            Secure checkout powered by Polar • SSL encrypted
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
