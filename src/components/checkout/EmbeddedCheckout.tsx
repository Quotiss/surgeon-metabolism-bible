
import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

interface EmbeddedCheckoutProps {
  isOpen: boolean;
  onClose: () => void;
  checkoutUrl: string | null;
  onSuccess?: () => void;
}

const EmbeddedCheckout = ({ isOpen, onClose, checkoutUrl, onSuccess }: EmbeddedCheckoutProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsLoading(true);
      setHasError(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Listen for messages from Polar's checkout iframe
      if (event.origin !== 'https://polar.sh') return;

      console.log('Received message from Polar checkout:', event.data);

      if (event.data.type === 'checkout.success') {
        console.log('Checkout completed successfully');
        toast.success('Payment completed successfully!');
        onSuccess?.();
        onClose();
      } else if (event.data.type === 'checkout.cancelled') {
        console.log('Checkout was cancelled');
        onClose();
      } else if (event.data.type === 'checkout.error') {
        console.error('Checkout error:', event.data.error);
        setHasError(true);
        toast.error('Checkout failed. Please try again.');
      }
    };

    if (isOpen) {
      window.addEventListener('message', handleMessage);
    }

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [isOpen, onSuccess, onClose]);

  const handleIframeLoad = () => {
    console.log('Checkout iframe loaded');
    setIsLoading(false);
  };

  const handleIframeError = () => {
    console.error('Failed to load checkout iframe');
    setIsLoading(false);
    setHasError(true);
    toast.error('Failed to load checkout. Please try again.');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full h-[80vh] p-0 overflow-hidden">
        <DialogHeader className="px-6 py-4 border-b">
          <DialogTitle className="text-xl font-bold text-slate-900">
            Complete Your Purchase
          </DialogTitle>
          <DialogDescription className="text-slate-600">
            Secure checkout powered by Polar
          </DialogDescription>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </DialogHeader>

        <div className="flex-1 relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
              <div className="flex flex-col items-center gap-4">
                <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
                <p className="text-slate-600">Loading secure checkout...</p>
              </div>
            </div>
          )}

          {hasError ? (
            <div className="absolute inset-0 flex items-center justify-center bg-white">
              <div className="text-center">
                <p className="text-red-600 mb-4">Failed to load checkout</p>
                <Button onClick={onClose} variant="outline">
                  Close and try again
                </Button>
              </div>
            </div>
          ) : (
            checkoutUrl && (
              <iframe
                src={checkoutUrl}
                className="w-full h-full border-0"
                onLoad={handleIframeLoad}
                onError={handleIframeError}
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation"
                title="Polar Checkout"
              />
            )
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EmbeddedCheckout;
