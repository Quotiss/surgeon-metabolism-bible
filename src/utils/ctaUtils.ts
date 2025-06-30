
import type { CTAClickHandler } from "@/types/common";
import { checkoutService } from "@/services/checkoutService";
import { createCheckoutSession } from "@/services/polarService";
import { toast } from "sonner";

export const createCTAHandler = (
  trackCTAClick: (location: string) => void,
  openEmbeddedCheckout: (url: string) => void
): CTAClickHandler => {
  return async (location: string = 'general') => {
    try {
      trackCTAClick(location);
      
      console.log('Initiating checkout for:', location);
      
      // Try using the new modular checkout service first
      try {
        const checkoutInstance = await checkoutService.createCheckout(location);
        console.log('Using new checkout service:', checkoutInstance.id);
        // The CheckoutProvider will handle the UI
      } catch (serviceError) {
        console.warn('Checkout service failed, falling back to direct approach:', serviceError);
        
        // Fallback to existing approach
        const checkoutSession = await createCheckoutSession(location, true);
        openEmbeddedCheckout(checkoutSession.url);
      }
      
    } catch (error) {
      console.error('Checkout failed:', error);
      
      toast.error('Checkout failed. Please try again.', {
        description: 'There was an issue connecting to our payment system.',
        duration: 5000,
      });
    }
  };
};
