
import { GUMROAD_URL } from "@/lib/constants";
import type { CTAClickHandler } from "@/types/common";

export const createCTAHandler = (trackCTAClick: (location: string) => void): CTAClickHandler => {
  return async (location: string = 'general') => {
    try {
      console.log('CTA clicked for location:', location);
      
      // Track the click
      trackCTAClick(location);
      
      // Redirect to Gumroad checkout
      window.open(GUMROAD_URL, "_blank");
      
    } catch (error) {
      console.error('CTA action failed:', error);
      alert('Something went wrong. Please try again.');
    }
  };
};
