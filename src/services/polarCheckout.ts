
import { PolarEmbedCheckout } from '@polar-sh/checkout/embed';
import { POLAR_CONFIG } from '@/lib/constants';

export interface PolarCheckoutOptions {
  onSuccess?: (event?: any) => void;
  onError?: (error: any) => void;
  onClose?: () => void;
  onLoaded?: () => void;
  onConfirmed?: () => void;
}

// Global checkout instance management
let activeCheckout: any = null;
let isCheckoutOpening = false;

export const openPolarCheckout = async (options: PolarCheckoutOptions = {}) => {
  // Prevent multiple concurrent checkouts
  if (isCheckoutOpening || activeCheckout) {
    console.log('Checkout already opening or active, ignoring request');
    return;
  }

  try {
    isCheckoutOpening = true;
    console.log('Creating Polar checkout with link:', POLAR_CONFIG.CHECKOUT_LINK);
    
    // Create checkout with proper API - await the Promise and pass theme as second param
    const checkout = await PolarEmbedCheckout.create(
      POLAR_CONFIG.CHECKOUT_LINK, 
      POLAR_CONFIG.THEME
    );
    
    activeCheckout = checkout;
    
    // Set up event listeners using the correct API
    checkout.addEventListener('loaded', (event: any) => {
      console.log('Polar checkout loaded successfully');
      options.onLoaded?.();
    });
    
    checkout.addEventListener('success', (event: any) => {
      console.log('Polar checkout completed successfully', event.detail);
      options.onSuccess?.(event);
      cleanup();
    });
    
    checkout.addEventListener('close', (event: any) => {
      console.log('Polar checkout modal closed');
      options.onClose?.();
      cleanup();
    });
    
    checkout.addEventListener('confirmed', (event: any) => {
      console.log('Polar checkout confirmed, processing payment');
      options.onConfirmed?.(event);
    });

  } catch (error) {
    console.error('Failed to create Polar checkout:', error);
    options.onError?.(error);
    cleanup();
    throw error;
  } finally {
    isCheckoutOpening = false;
  }
};

export const closePolarCheckout = () => {
  if (activeCheckout) {
    try {
      activeCheckout.close();
    } catch (error) {
      console.error('Error closing checkout:', error);
    }
    cleanup();
  }
};

const cleanup = () => {
  activeCheckout = null;
  isCheckoutOpening = false;
};

// Cleanup on page unload
if (typeof window !== 'undefined') {
  window.addEventListener('beforeunload', cleanup);
}
