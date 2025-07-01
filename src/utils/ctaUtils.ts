
import { POLAR_CONFIG } from "@/lib/constants";
import type { CTAClickHandler } from "@/types/common";

export const createCTAHandler = (trackCTAClick: (location: string) => void): CTAClickHandler => {
  return async (location: string = 'general') => {
    try {
      console.log('CTA clicked for location:', location);
      
      // Track the click
      trackCTAClick(location);
      
      // TODO: Replace with Polar checkout modal in next phase
      console.log('Opening Polar checkout for:', POLAR_CONFIG.CHECKOUT_LINK);
      window.open(POLAR_CONFIG.CHECKOUT_LINK, "_blank");
      
    } catch (error) {
      console.error('CTA action failed:', error);
      alert('Something went wrong. Please try again.');
    }
  };
};
