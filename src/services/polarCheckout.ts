
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
    
    // Create checkout with just the URL as a string parameter
    const checkout = PolarEmbedCheckout.create(POLAR_CONFIG.CHECKOUT_LINK);
    
    // Set up event listeners if the checkout object supports them
    if (checkout && typeof checkout === 'object') {
      // Try to set callbacks if they exist on the checkout object
      if ('onSuccess' in checkout && typeof checkout.onSuccess === 'function') {
        checkout.onSuccess = () => {
          console.log('Polar checkout completed successfully');
          options.onSuccess?.();
        };
      }
      
      if ('onError' in checkout && typeof checkout.onError === 'function') {
        checkout.onError = (error: any) => {
          console.error('Polar checkout error:', error);
          options.onError?.(error);
        };
      }
      
      if ('onClose' in checkout && typeof checkout.onClose === 'function') {
        checkout.onClose = () => {
          console.log('Polar checkout modal closed');
          options.onClose?.();
        };
      }
      
      // Try to open the checkout - check if method exists
      if ('show' in checkout && typeof checkout.show === 'function') {
        checkout.show();
      } else if ('open' in checkout && typeof checkout.open === 'function') {
        checkout.open();
      } else {
        console.warn('No open/show method found on checkout object');
      }
    }

  } catch (error) {
    console.error('Failed to create Polar checkout:', error);
    options.onError?.(error);
    throw error;
  }
};
