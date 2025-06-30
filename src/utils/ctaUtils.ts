
import type { CTAClickHandler } from "@/types/common";

export const createCTAHandler = (trackCTAClick: (location: string) => void): CTAClickHandler => {
  return async (location: string = 'general') => {
    try {
      trackCTAClick(location);
      
      console.log('CTA clicked for location:', location);
      
      // Simple redirect to external checkout (you can modify this URL as needed)
      window.open("https://your-checkout-url.com", "_blank");
      
    } catch (error) {
      console.error('CTA action failed:', error);
      alert('Something went wrong. Please try again.');
    }
  };
};
