
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import CheckoutContent from './CheckoutContent';

interface CheckoutDesktopDialogProps {
  isOpen: boolean;
  onClose: () => void;
  checkoutUrl: string | null;
  isLoading: boolean;
  hasError: boolean;
  checkoutProgress: 'loading' | 'loaded' | 'processing' | 'completed';
  retryCount: number;
  onIframeLoad: () => void;
  onIframeError: () => void;
  onRetry: () => void;
  getProgressMessage: () => string;
}

const CheckoutDesktopDialog = ({
  isOpen,
  onClose,
  checkoutUrl,
  isLoading,
  hasError,
  checkoutProgress,
  retryCount,
  onIframeLoad,
  onIframeError,
  onRetry,
  getProgressMessage
}: CheckoutDesktopDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl w-[95vw] min-h-[85vh] max-h-[90vh] p-0 overflow-hidden rounded-xl border-2 border-blue-200 shadow-2xl">
        <DialogHeader className="px-6 py-4 border-b bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <DialogTitle className="text-xl font-bold flex items-center justify-between">
            Complete Your Purchase
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
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
          <CheckoutContent
            checkoutUrl={checkoutUrl}
            isLoading={isLoading}
            hasError={hasError}
            checkoutProgress={checkoutProgress}
            retryCount={retryCount}
            onIframeLoad={onIframeLoad}
            onIframeError={onIframeError}
            onRetry={onRetry}
            onClose={onClose}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutDesktopDialog;
