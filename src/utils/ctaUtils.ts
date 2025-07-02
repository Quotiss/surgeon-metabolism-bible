
import { PolarEmbedCheckout } from "@polar-sh/checkout/embed";
import {
  POLAR_CHECKOUT_LINK,
  POLAR_CHECKOUT_THEME,
  PRODUCT_PRICE_USD,
} from "@/lib/constants";
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
      
      // Create Polar checkout
      const checkout = await PolarEmbedCheckout.create(
        POLAR_CHECKOUT_LINK,
        POLAR_CHECKOUT_THEME
      );

      checkout.addEventListener("success", () => {
        window.fbq?.("track", "Purchase", {
          currency: "USD",
          value: PRODUCT_PRICE_USD,
        });
      });
      
    } catch (error) {
      console.error('CTA checkout failed:', error);
    }
  };
};
