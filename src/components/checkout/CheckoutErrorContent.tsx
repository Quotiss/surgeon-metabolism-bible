
import { Button } from '@/components/ui/button';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface CheckoutErrorContentProps {
  retryCount: number;
  onRetry: () => void;
  onClose: () => void;
}

const CheckoutErrorContent = ({ retryCount, onRetry, onClose }: CheckoutErrorContentProps) => {
  return (
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
            onClick={onRetry} 
            variant="default" 
            className="flex items-center gap-2"
            disabled={retryCount >= 3}
          >
            <RefreshCw className="h-4 w-4" />
            {retryCount >= 3 ? 'Max retries reached' : `Try Again ${retryCount > 0 ? `(${retryCount + 1}/3)` : ''}`}
          </Button>
          <Button onClick={onClose} variant="outline">
            Close and Try Later
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutErrorContent;
