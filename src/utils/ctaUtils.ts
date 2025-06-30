
import type { CTAClickHandler } from "@/types/common";
import { toast } from "sonner";

// Remove the old approach - the CheckoutProvider will handle everything
export const createCTAHandler = (
  trackCTAClick: (location: string) => void,
  openCheckout: (source: string) => Promise<void> // This will come from CheckoutProvider
): CTAClickHandler => {
  return async (location: string = 'general') => {
    try {
      trackCTAClick(location);
      console.log('Initiating checkout for:', location);
      
      // Use the CheckoutProvider's openCheckout method directly
      await openCheckout(location);
      
    } catch (error) {
      console.error('Checkout failed:', error);
      
      toast.error('Checkout failed. Please try again.', {
        description: 'There was an issue connecting to our payment system.',
        duration: 5000,
      });
    }
  };
};
