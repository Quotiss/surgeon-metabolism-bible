
import { POLAR_CONFIG } from "@/lib/constants";
import { openPolarCheckout } from "@/services/polarCheckout";
import type { CTAClickHandler } from "@/types/common";

// Debounce utility to prevent rapid clicks
let lastClickTime = 0;
const DEBOUNCE_DELAY = 1000; // 1 second

export const createCTAHandler = (trackCTAClick: (location: string) => void): CTAClickHandler => {
  return async (location: string = 'general') => {
    // Debounce rapid clicks
    const now = Date.now();
    if (now - lastClickTime < DEBOUNCE_DELAY) {
      console.log('CTA click debounced - too rapid');
      return;
    }
    lastClickTime = now;

    try {
      console.log('CTA clicked for location:', location);
      
      // Track the click
      trackCTAClick(location);
      
      // Open Polar checkout modal with enhanced callbacks
      await openPolarCheckout({
        onLoaded: () => {
          console.log('Checkout modal loaded successfully');
        },
        onSuccess: (event) => {
          console.log('Purchase completed successfully!', event?.detail);
          
          // Show success message if no redirect
          if (event?.detail && !event.detail.redirect) {
            alert('Purchase successful! You will receive your download link via email.');
          }
        },
        onError: (error) => {
          console.error('Checkout failed:', error);
          
          // More user-friendly error message
          const errorMessage = error?.message || 'Checkout failed';
          alert(`${errorMessage}. Please try again or contact support.`);
        },
        onClose: () => {
          console.log('Checkout modal closed by user');
        },
        onConfirmed: () => {
          console.log('Payment confirmed, processing...');
        }
      });
      
    } catch (error) {
      console.error('CTA action failed:', error);
      
      // Enhanced fallback with user notification
      console.log('Falling back to direct checkout link');
      
      // Show user we're opening external link
      const userConfirmed = confirm(
        'Unable to open checkout modal. Would you like to proceed to the checkout page?'
      );
      
      if (userConfirmed) {
        window.open(POLAR_CONFIG.CHECKOUT_LINK, "_blank");
      }
    }
  };
};
