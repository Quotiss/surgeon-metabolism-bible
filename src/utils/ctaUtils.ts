
import type { CTAClickHandler } from "@/types/common";

// Debounce utility to prevent rapid clicks
let lastClickTime = 0;
const DEBOUNCE_DELAY = 1000; // 1 second

export const createCTAHandler = (trackCTAClick: (location: string) => void): CTAClickHandler => {
  return async (location: string = 'general') => {
    // Debounce rapid clicks
    const now = Date.now();
    if (now - lastClickTime < DEBOUNCE_DELAY) {
      console.log('CTA click debounced - too rapid');
      return;
    }
    lastClickTime = now;

    try {
      console.log('CTA clicked for location:', location);
      
      // Track the click for analytics
      trackCTAClick(location);
      
      // Polar checkout will handle the rest via HTML attributes
      console.log('Polar checkout will open via data-polar-checkout attribute');
      
    } catch (error) {
      console.error('CTA tracking failed:', error);
    }
  };
};
