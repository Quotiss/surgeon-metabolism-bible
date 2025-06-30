
import { Loader2, CheckCircle } from 'lucide-react';

interface CheckoutLoadingContentProps {
  checkoutProgress: 'loading' | 'loaded' | 'processing' | 'completed';
}

const CheckoutLoadingContent = ({ checkoutProgress }: CheckoutLoadingContentProps) => {
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

  return (
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
};

export default CheckoutLoadingContent;
