
import { useEffect } from 'react';
import { META_PIXEL_EVENTS } from '@/lib/constants';

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export const useAnalytics = () => {
  useEffect(() => {
    // Log page load but don't track PageView yet - wait for Hero visibility
    console.log('Page loaded:', window.location.pathname);
    console.log('Waiting for Hero section to become visible before tracking PageView...');
    
    // Check for successful checkout in URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('checkout') === 'success') {
      const source = urlParams.get('source') || 'unknown';
      trackPurchase(source);
    }

    // Listen for embedded checkout completion
    const handleCheckoutSuccess = () => {
      console.log('Embedded checkout completed successfully');
      trackPurchase('embedded');
    };

    window.addEventListener('checkout-success', handleCheckoutSuccess);

    return () => {
      window.removeEventListener('checkout-success', handleCheckoutSuccess);
    };
  }, []);

  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    console.log('Event tracked:', eventName, properties);
    // Example: gtag('event', eventName, properties);
  };

  const trackPageView = () => {
    console.log('Tracking PageView event - Hero section is visible');
    
    // Fire Meta Pixel PageView event
    if (window.fbq) {
      window.fbq('track', 'PageView');
      console.log('Meta Pixel PageView event fired');
    } else {
      console.warn('Meta Pixel (fbq) not available - PageView not tracked');
    }

    // Track timing
    const loadTime = performance.now();
    trackEvent('hero_visible', { 
      load_time: Math.round(loadTime),
      path: window.location.pathname 
    });
  };

  const trackCTAClick = (location: string) => {
    trackEvent('cta_click', { location, embedded: true });
    
    // Fire Meta Pixel InitiateCheckout event
    if (window.fbq) {
      window.fbq('track', META_PIXEL_EVENTS.INITIATE_CHECKOUT, { 
        source: location,
        embedded: true 
      });
      console.log('Meta Pixel InitiateCheckout event fired for:', location);
    }

    // Fire AddPaymentInfo event when checkout begins
    if (window.fbq) {
      window.fbq('track', META_PIXEL_EVENTS.ADD_PAYMENT_INFO, { 
        source: location,
        value: 27,
        currency: 'USD',
        embedded: true
      });
      console.log('Meta Pixel AddPaymentInfo event fired for:', location);
    }
  };

  const trackPurchase = (source: string) => {
    console.log('Tracking purchase completion for source:', source);
    
    // Fire Meta Pixel Purchase event
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

    trackEvent('purchase_completed', { 
      source,
      value: 27,
      currency: 'USD',
      embedded: source === 'embedded'
    });
  };

  return { trackEvent, trackPageView, trackCTAClick };
};
