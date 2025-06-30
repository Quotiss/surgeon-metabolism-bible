
import type { CTAClickHandler } from "@/types/common";
import { createCheckoutSession } from "@/services/polarService";
import { toast } from "sonner";

export const createCTAHandler = (
  trackCTAClick: (location: string) => void,
  openEmbeddedCheckout: (url: string) => void
): CTAClickHandler => {
  return async (location: string = 'general') => {
    try {
      trackCTAClick(location);
      
      console.log('Initiating embedded Polar checkout for:', location);
      const checkoutSession = await createCheckoutSession(location, true);
      
      // Open embedded checkout
      openEmbeddedCheckout(checkoutSession.url);
      
    } catch (error) {
      console.error('Checkout failed:', error);
      
      // Use Sonner toast directly for better UX
      toast.error('Checkout failed. Please try again.', {
        description: 'There was an issue connecting to our payment system.',
        duration: 5000,
      });
    }
  };
};
