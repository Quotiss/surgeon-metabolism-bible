
import { META_PIXEL_EVENTS } from '@/lib/constants';

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export const metaPixelService = {
  trackPageView: () => {
    console.log('Tracking PageView event - Hero section is visible');
    
    if (window.fbq) {
      window.fbq('track', 'PageView');
      console.log('Meta Pixel PageView event fired');
    } else {
      console.warn('Meta Pixel (fbq) not available - PageView not tracked');
    }
  },

  trackInitiateCheckout: (location: string) => {
    if (window.fbq) {
      window.fbq('track', META_PIXEL_EVENTS.INITIATE_CHECKOUT, { 
        source: location,
        embedded: true,
        value: 27,
        currency: 'USD',
      });
      console.log('Meta Pixel InitiateCheckout event fired for:', location);
    }
  },

  trackPurchase: (source: string) => {
    if (window.fbq) {
      window.fbq('track', META_PIXEL_EVENTS.PURCHASE, {
        source,
        value: 27,
        currency: 'USD',
        content_type: 'product',
        content_ids: ['surgeon-metabolism-bible'],
        embedded: source === 'embedded'
      });
      console.log('Meta Pixel Purchase event fired for source:', source);
    }
  }
};
