
import { POLAR_CONFIG } from "@/lib/constants";
import { openPolarCheckout } from "@/services/polarCheckout";
import type { CTAClickHandler } from "@/types/common";

export const createCTAHandler = (trackCTAClick: (location: string) => void): CTAClickHandler => {
  return async (location: string = 'general') => {
    try {
      console.log('CTA clicked for location:', location);
      
      // Track the click
      trackCTAClick(location);
      
      // Open Polar checkout modal
      await openPolarCheckout({
        onSuccess: () => {
          console.log('Purchase completed successfully!');
          // You could add success tracking here
        },
        onError: (error) => {
          console.error('Checkout failed:', error);
          alert('Checkout failed. Please try again.');
        },
        onClose: () => {
          console.log('Checkout modal closed');
        }
      });
      
    } catch (error) {
      console.error('CTA action failed:', error);
      // Fallback to direct link if modal fails
      console.log('Falling back to direct checkout link');
      window.open(POLAR_CONFIG.CHECKOUT_LINK, "_blank");
    }
  };
};
