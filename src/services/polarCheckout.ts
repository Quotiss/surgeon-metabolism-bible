
import { PolarEmbedCheckout } from '@polar-sh/checkout/embed';
import { POLAR_CONFIG } from '@/lib/constants';

export interface PolarCheckoutOptions {
  onSuccess?: () => void;
  onError?: (error: any) => void;
  onClose?: () => void;
}

export const openPolarCheckout = async (options: PolarCheckoutOptions = {}) => {
  try {
    console.log('Opening Polar checkout modal with link:', POLAR_CONFIG.CHECKOUT_LINK);
    
    const checkout = await PolarEmbedCheckout.create({
      checkoutUrl: POLAR_CONFIG.CHECKOUT_LINK,
      theme: POLAR_CONFIG.THEME,
      onSuccess: () => {
        console.log('Polar checkout completed successfully');
        options.onSuccess?.();
      },
      onError: (error: any) => {
        console.error('Polar checkout error:', error);
        options.onError?.(error);
      },
      onClose: () => {
        console.log('Polar checkout modal closed');
        options.onClose?.();
      }
    });

    // Open the checkout modal
    checkout.open();

  } catch (error) {
    console.error('Failed to create Polar checkout:', error);
    options.onError?.(error);
    throw error;
  }
};
