
import { useState, useCallback } from 'react';
import { toast } from 'sonner';

export const useEmbeddedCheckout = () => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const openEmbeddedCheckout = useCallback((url: string) => {
    console.log('Opening embedded checkout with URL:', url);
    setCheckoutUrl(url);
    setIsCheckoutOpen(true);
  }, []);

  const closeEmbeddedCheckout = useCallback(() => {
    console.log('Closing embedded checkout');
    setIsCheckoutOpen(false);
    setCheckoutUrl(null);
    setIsLoading(false);
  }, []);

  const handleCheckoutSuccess = useCallback(() => {
    console.log('Checkout completed successfully');
    toast.success('🎉 Payment completed! Check your email for download instructions.');
    
    // Dispatch custom event for analytics
    window.dispatchEvent(new CustomEvent('checkout-success'));
    
    // Close checkout after short delay
    setTimeout(() => {
      closeEmbeddedCheckout();
    }, 2000);
  }, [closeEmbeddedCheckout]);

  return {
    isCheckoutOpen,
    checkoutUrl,
    isLoading,
    openEmbeddedCheckout,
    closeEmbeddedCheckout,
    handleCheckoutSuccess,
    setIsLoading,
  };
};
