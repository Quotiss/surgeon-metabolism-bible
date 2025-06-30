
import { eventTrackingService } from './eventTrackingService';
import { purchaseTrackingService } from './purchaseTrackingService';

export const checkoutEventHandlers = {
  handleCheckoutSuccess: () => {
    console.log('Embedded checkout completed successfully');
    purchaseTrackingService.trackPurchase('embedded');
  },

  handleCheckoutSessionCreated: (event: CustomEvent) => {
    console.log('Checkout session created:', event.detail);
    eventTrackingService.trackEvent('checkout_session_created', {
      session_id: event.detail.sessionId,
      source: event.detail.source,
      embedded: event.detail.embedded,
    });
  },

  handleCheckoutSessionFailed: (event: CustomEvent) => {
    console.log('Checkout session creation failed:', event.detail);
    eventTrackingService.trackEvent('checkout_session_failed', {
      error: event.detail.error,
      source: event.detail.source,
    });
  },

  handleCheckoutStarted: (event: CustomEvent) => {
    console.log('Checkout iframe started loading:', event.detail);
    eventTrackingService.trackEvent('checkout_iframe_started', event.detail);
  },

  handleCheckoutLoaded: (event: CustomEvent) => {
    console.log('Checkout iframe loaded successfully:', event.detail);
    eventTrackingService.trackEvent('checkout_iframe_loaded', {
      load_time: event.detail.loadTime,
      source: event.detail.source,
    });
  },

  handleCheckoutProgress: (event: CustomEvent) => {
    console.log('Checkout progress:', event.detail);
    eventTrackingService.trackEvent('checkout_progress', event.detail);
  },

  handleCheckoutError: (event: CustomEvent) => {
    console.log('Checkout error:', event.detail);
    eventTrackingService.trackEvent('checkout_error', event.detail);
  }
};
