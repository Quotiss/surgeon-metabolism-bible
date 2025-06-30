
import { useState, useCallback, useEffect } from 'react';
import { PolarEmbedCheckout } from '@polar-sh/checkout/embed';
import { toast } from 'sonner';

export interface PolarCheckoutOptions {
  theme?: 'light' | 'dark';
  onSuccess?: (event: any) => void;
  onClose?: () => void;
  onConfirmed?: (event: any) => void;
  onLoaded?: () => void;
}

export const usePolarCheckout = (options: PolarCheckoutOptions = {}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [checkoutInstance, setCheckoutInstance] = useState<any>(null);

  const openCheckout = useCallback(async (checkoutUrl: string) => {
    try {
      setIsLoading(true);
      
      const checkout = await PolarEmbedCheckout.create(
        checkoutUrl, 
        options.theme || 'light'
      );

      // Set up event listeners
      checkout.addEventListener('loaded', (event: any) => {
        console.log('Polar checkout loaded');
        setIsLoading(false);
        options.onLoaded?.();
      });

      checkout.addEventListener('success', (event: any) => {
        console.log('Polar checkout success:', event);
        toast.success('🎉 Payment completed successfully!');
        options.onSuccess?.(event);
      });

      checkout.addEventListener('close', (event: any) => {
        console.log('Polar checkout closed');
        setIsOpen(false);
        setCheckoutInstance(null);
        options.onClose?.();
      });

      checkout.addEventListener('confirmed', (event: any) => {
        console.log('Polar payment confirmed:', event);
        toast.loading('Processing payment...', { id: 'payment-processing' });
        options.onConfirmed?.(event);
      });

      setCheckoutInstance(checkout);
      setIsOpen(true);
    } catch (error) {
      console.error('Failed to open Polar checkout:', error);
      setIsLoading(false);
      toast.error('Failed to open checkout. Please try again.');
    }
  }, [options]);

  const closeCheckout = useCallback(() => {
    if (checkoutInstance) {
      checkoutInstance.close();
    }
  }, [checkoutInstance]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (checkoutInstance) {
        checkoutInstance.close();
      }
    };
  }, [checkoutInstance]);

  return {
    isOpen,
    isLoading,
    openCheckout,
    closeCheckout,
    checkoutInstance
  };
};
