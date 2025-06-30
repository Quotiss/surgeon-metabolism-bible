
import { useState, useCallback } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, Loader2 } from 'lucide-react';
import { createCheckoutSession, type CheckoutSession } from '@/services/polarService';
import { useAnalytics } from '@/hooks/useAnalytics';

interface PolarCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  source: string;
}

const PolarCheckoutModal = ({ isOpen, onClose, source }: PolarCheckoutModalProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [checkoutSession, setCheckoutSession] = useState<CheckoutSession | null>(null);
  const { trackCTAClick } = useAnalytics();

  const initializeCheckout = useCallback(async () => {
    if (checkoutSession) return; // Already initialized
    
    setIsLoading(true);
    setError(null);
    
    try {
      trackCTAClick(source);
      const session = await createCheckoutSession(source);
      setCheckoutSession(session);
    } catch (err) {
      setError('Failed to initialize checkout. Please try again.');
      console.error('Checkout initialization failed:', err);
    } finally {
      setIsLoading(false);
    }
  }, [source, trackCTAClick, checkoutSession]);

  const handleClose = () => {
    setCheckoutSession(null);
    setError(null);
    onClose();
  };

  // Initialize checkout when modal opens
  if (isOpen && !checkoutSession && !isLoading && !error) {
    initializeCheckout();
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-bold">
              Complete Your Purchase
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClose}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="flex-1 p-6">
          {isLoading && (
            <div className="flex flex-col items-center justify-center h-full space-y-4">
              <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
              <p className="text-lg text-slate-600">Preparing your checkout...</p>
            </div>
          )}

          {error && (
            <div className="flex flex-col items-center justify-center h-full space-y-4">
              <div className="text-center">
                <p className="text-lg text-red-600 mb-4">{error}</p>
                <Button 
                  onClick={() => {
                    setError(null);
                    initializeCheckout();
                  }}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Try Again
                </Button>
              </div>
            </div>
          )}

          {checkoutSession && (
            <div className="h-full">
              <iframe
                src={checkoutSession.url}
                className="w-full h-full border-0 rounded-lg"
                title="Polar Checkout"
                allow="payment"
              />
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PolarCheckoutModal;
