
import { metaPixelService } from './metaPixelService';
import { eventTrackingService } from './eventTrackingService';

export const purchaseTrackingService = {
  trackPurchase: (source: string) => {
    console.log('Tracking purchase completion for source:', source);
    
    // Fire Meta Pixel Purchase event
    metaPixelService.trackPurchase(source);

    // Track custom event
    eventTrackingService.trackEvent('purchase_completed', { 
      source,
      value: 27,
      currency: 'USD',
      embedded: source === 'embedded',
      conversion_time: new Date().toISOString(),
    });
  },

  trackCheckoutError: (error: string, source: string) => {
    eventTrackingService.trackEvent('checkout_error', {
      error,
      source,
      error_time: new Date().toISOString(),
    });
  }
};
