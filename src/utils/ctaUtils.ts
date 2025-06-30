
import type { CTAClickHandler } from "@/types/common";
import { createCheckoutSession } from "@/services/polarService";

export const createCTAHandler = (trackCTAClick: (location: string) => void): CTAClickHandler => {
  return async (location: string = 'general') => {
    try {
      trackCTAClick(location);
      
      console.log('Initiating Polar checkout for:', location);
      const checkoutSession = await createCheckoutSession(location);
      
      // Open Polar checkout in new window
      window.open(checkoutSession.url, "_blank");
      
    } catch (error) {
      console.error('Checkout failed:', error);
      // Fallback to alert for now - you could implement a toast notification here
      alert('Checkout failed. Please try again.');
    }
  };
};
