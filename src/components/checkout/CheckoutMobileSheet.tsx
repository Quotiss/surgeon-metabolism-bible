
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { X } from 'lucide-react';
import CheckoutContent from './CheckoutContent';

interface CheckoutMobileSheetProps {
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

const CheckoutMobileSheet = ({
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
}: CheckoutMobileSheetProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
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
              onClick={onClose}
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
      </SheetContent>
    </Sheet>
  );
};

export default CheckoutMobileSheet;
