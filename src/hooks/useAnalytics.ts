
import { useEffect } from 'react';
import { metaPixelService } from '@/services/metaPixelService';
import { eventTrackingService } from '@/services/eventTrackingService';
import { purchaseTrackingService } from '@/services/purchaseTrackingService';
import { checkoutEventHandlers } from '@/services/checkoutEventHandlers';

export const useAnalytics = () => {
  useEffect(() => {
    // Log page load but don't track PageView yet - wait for Hero visibility
    console.log('Page loaded:', window.location.pathname);
    console.log('Waiting for Hero section to become visible before tracking PageView...');
    
    // Check for successful checkout in URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('checkout') === 'success') {
      const source = urlParams.get('source') || 'unknown';
      purchaseTrackingService.trackPurchase(source);
    }

    // Register all event listeners
    window.addEventListener('checkout-success', checkoutEventHandlers.handleCheckoutSuccess);
    window.addEventListener('checkout-session-created', checkoutEventHandlers.handleCheckoutSessionCreated as EventListener);
    window.addEventListener('checkout-session-failed', checkoutEventHandlers.handleCheckoutSessionFailed as EventListener);
    window.addEventListener('checkout-iframe-started', checkoutEventHandlers.handleCheckoutStarted as EventListener);
    window.addEventListener('checkout-iframe-loaded', checkoutEventHandlers.handleCheckoutLoaded as EventListener);
    window.addEventListener('checkout-progress', checkoutEventHandlers.handleCheckoutProgress as EventListener);
    window.addEventListener('checkout-error', checkoutEventHandlers.handleCheckoutError as EventListener);

    return () => {
      window.removeEventListener('checkout-success', checkoutEventHandlers.handleCheckoutSuccess);
      window.removeEventListener('checkout-session-created', checkoutEventHandlers.handleCheckoutSessionCreated as EventListener);
      window.removeEventListener('checkout-session-failed', checkoutEventHandlers.handleCheckoutSessionFailed as EventListener);
      window.removeEventListener('checkout-iframe-started', checkoutEventHandlers.handleCheckoutStarted as EventListener);
      window.removeEventListener('checkout-iframe-loaded', checkoutEventHandlers.handleCheckoutLoaded as EventListener);
      window.removeEventListener('checkout-progress', checkoutEventHandlers.handleCheckoutProgress as EventListener);
      window.removeEventListener('checkout-error', checkoutEventHandlers.handleCheckoutError as EventListener);
    };
  }, []);

  const trackPageView = () => {
    metaPixelService.trackPageView();
    eventTrackingService.trackHeroVisible(performance.now());
  };

  const trackCTAClick = (location: string) => {
    eventTrackingService.trackCTAClick(location);
    metaPixelService.trackInitiateCheckout(location);
  };

  return { 
    trackEvent: eventTrackingService.trackEvent, 
    trackPageView, 
    trackCTAClick, 
    trackCheckoutError: purchaseTrackingService.trackCheckoutError,
    trackConversionFunnel: eventTrackingService.trackConversionFunnel
  };
};
