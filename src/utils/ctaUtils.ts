
import type { CTAClickHandler } from "@/types/common";
import { createCheckoutSession } from "@/services/polarService";

export const createCTAHandler = (
  trackCTAClick: (location: string) => void,
  openEmbeddedCheckout: (url: string) => void
): CTAClickHandler => {
  return async (location: string = 'general') => {
    try {
      trackCTAClick(location);
      
      console.log('Initiating embedded Polar checkout for:', location);
      const checkoutSession = await createCheckoutSession(location, true);
      
      // Open embedded checkout instead of new window
      openEmbeddedCheckout(checkoutSession.url);
      
    } catch (error) {
      console.error('Checkout failed:', error);
      // Use toast notification instead of alert
      if (typeof window !== 'undefined' && window.dispatchEvent) {
        window.dispatchEvent(new CustomEvent('show-error-toast', {
          detail: { message: 'Checkout failed. Please try again.' }
        }));
      }
    }
  };
};
