
import type { CTAClickHandler } from "@/types/common";

// Global state for checkout modal
let globalCheckoutHandler: ((source: string) => void) | null = null;

export const setGlobalCheckoutHandler = (handler: (source: string) => void) => {
  globalCheckoutHandler = handler;
};

export const createCTAHandler = (trackCTAClick: (location: string) => void): CTAClickHandler => {
  return async (location: string = 'general') => {
    try {
      console.log('CTA clicked for location:', location);
      
      // Use the global checkout handler to open modal
      if (globalCheckoutHandler) {
        globalCheckoutHandler(location);
      } else {
        console.warn('Global checkout handler not set, falling back to external URL');
        // Fallback to external checkout
        window.open("https://your-checkout-url.com", "_blank");
      }
      
    } catch (error) {
      console.error('CTA action failed:', error);
      alert('Something went wrong. Please try again.');
    }
  };
};
