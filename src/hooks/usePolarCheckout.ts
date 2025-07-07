
import { useCallback } from 'react';
import { PolarEmbedCheckout } from "@polar-sh/checkout/embed";
import { POLAR_CHECKOUT_THEME } from "@/lib/constants";

interface UsePolarCheckoutOptions {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export const usePolarCheckout = (options: UsePolarCheckoutOptions = {}) => {
  const { onSuccess, onError } = options;

  const createCheckout = useCallback(async (checkoutLink: string) => {
    try {
      console.log("Creating Polar checkout for:", checkoutLink);
      
      const checkout = await PolarEmbedCheckout.create(
        checkoutLink,
        POLAR_CHECKOUT_THEME
      );

      if (onSuccess) {
        checkout.addEventListener("success", onSuccess);
      }

      return checkout;
    } catch (error) {
      console.error('Polar checkout failed:', error);
      if (onError) {
        onError(error as Error);
      }
      throw error;
    }
  }, [onSuccess, onError]);

  return { createCheckout };
};
