
import CheckoutLoadingContent from './CheckoutLoadingContent';
import CheckoutErrorContent from './CheckoutErrorContent';

interface CheckoutContentProps {
  checkoutUrl: string | null;
  isLoading: boolean;
  hasError: boolean;
  checkoutProgress: 'loading' | 'loaded' | 'processing' | 'completed';
  retryCount: number;
  onIframeLoad: () => void;
  onIframeError: () => void;
  onRetry: () => void;
  onClose: () => void;
}

const CheckoutContent = ({
  checkoutUrl,
  isLoading,
  hasError,
  checkoutProgress,
  retryCount,
  onIframeLoad,
  onIframeError,
  onRetry,
  onClose
}: CheckoutContentProps) => {
  return (
    <div className="flex-1 relative min-h-[500px]">
      {(isLoading || checkoutProgress === 'processing') && (
        <div className="absolute inset-0 z-10 bg-white">
          <CheckoutLoadingContent checkoutProgress={checkoutProgress} />
        </div>
      )}

      {hasError ? (
        <CheckoutErrorContent 
          retryCount={retryCount}
          onRetry={onRetry}
          onClose={onClose}
        />
      ) : (
        checkoutUrl && (
          <iframe
            id="polar-checkout-iframe"
            src={checkoutUrl}
            className="w-full h-full min-h-[500px] border-0 rounded-lg"
            onLoad={onIframeLoad}
            onError={onIframeError}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation allow-popups-to-escape-sandbox"
            title="Polar Secure Checkout"
            allow="payment; camera; microphone; geolocation"
          />
        )
      )}
    </div>
  );
};

export default CheckoutContent;
