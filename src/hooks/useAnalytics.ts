
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

    // Enhanced event listeners for checkout flow
    const handleCheckoutSuccess = () => {
      console.log('Embedded checkout completed successfully');
      trackPurchase('embedded');
    };

    const handleCheckoutSessionCreated = (event: CustomEvent) => {
      console.log('Checkout session created:', event.detail);
      trackEvent('checkout_session_created', {
        session_id: event.detail.sessionId,
        source: event.detail.source,
        embedded: event.detail.embedded,
      });
    };

    const handleCheckoutSessionFailed = (event: CustomEvent) => {
      console.log('Checkout session creation failed:', event.detail);
      trackEvent('checkout_session_failed', {
        error: event.detail.error,
        source: event.detail.source,
      });
      
      // Track Meta Pixel error event
      if (window.fbq) {
        window.fbq('track', 'CheckoutError', {
          error_type: 'session_creation_failed',
          source: event.detail.source,
        });
      }
    };

    const handleCheckoutStarted = (event: CustomEvent) => {
      console.log('Checkout iframe started loading:', event.detail);
      trackEvent('checkout_iframe_started', event.detail);
    };

    const handleCheckoutLoaded = (event: CustomEvent) => {
      console.log('Checkout iframe loaded successfully:', event.detail);
      trackEvent('checkout_iframe_loaded', {
        load_time: event.detail.loadTime,
        source: event.detail.source,
      });
    };

    const handleCheckoutProgress = (event: CustomEvent) => {
      console.log('Checkout progress:', event.detail);
      trackEvent('checkout_progress', event.detail);
    };

    const handleCheckoutError = (event: CustomEvent) => {
      console.log('Checkout error:', event.detail);
      trackEvent('checkout_error', event.detail);
    };

    // Register all event listeners
    window.addEventListener('checkout-success', handleCheckoutSuccess);
    window.addEventListener('checkout-session-created', handleCheckoutSessionCreated as EventListener);
    window.addEventListener('checkout-session-failed', handleCheckoutSessionFailed as EventListener);
    window.addEventListener('checkout-iframe-started', handleCheckoutStarted as EventListener);
    window.addEventListener('checkout-iframe-loaded', handleCheckoutLoaded as EventListener);
    window.addEventListener('checkout-progress', handleCheckoutProgress as EventListener);
    window.addEventListener('checkout-error', handleCheckoutError as EventListener);

    return () => {
      window.removeEventListener('checkout-success', handleCheckoutSuccess);
      window.removeEventListener('checkout-session-created', handleCheckoutSessionCreated as EventListener);
      window.removeEventListener('checkout-session-failed', handleCheckoutSessionFailed as EventListener);
      window.removeEventListener('checkout-iframe-started', handleCheckoutStarted as EventListener);
      window.removeEventListener('checkout-iframe-loaded', handleCheckoutLoaded as EventListener);
      window.removeEventListener('checkout-progress', handleCheckoutProgress as EventListener);
      window.removeEventListener('checkout-error', handleCheckoutError as EventListener);
    };
  }, []);

  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    console.log('Event tracked:', eventName, properties);
    
    // Add timestamp to all events
    const eventData = {
      ...properties,
      timestamp: new Date().toISOString(),
      user_agent: navigator.userAgent,
      viewport: `${window.innerWidth}x${window.innerHeight}`,
    };
    
    console.log('Enhanced event data:', eventData);
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

    // Track timing with performance metrics - using correct PerformanceNavigationTiming properties
    const loadTime = performance.now();
    const navigationTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    trackEvent('hero_visible', { 
      load_time: Math.round(loadTime),
      path: window.location.pathname,
      dom_load_time: navigationTiming ? Math.round(navigationTiming.domContentLoadedEventEnd - navigationTiming.fetchStart) : null,
      page_load_time: navigationTiming ? Math.round(navigationTiming.loadEventEnd - navigationTiming.fetchStart) : null,
    });
  };

  const trackCTAClick = (location: string) => {
    const clickTime = performance.now();
    
    trackEvent('cta_click', { 
      location, 
      embedded: true,
      click_time: Math.round(clickTime),
      scroll_position: window.scrollY,
    });
    
    // Fire Meta Pixel InitiateCheckout event
    if (window.fbq) {
      window.fbq('track', META_PIXEL_EVENTS.INITIATE_CHECKOUT, { 
        source: location,
        embedded: true,
        value: 27,
        currency: 'USD',
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
      embedded: source === 'embedded',
      conversion_time: new Date().toISOString(),
    });
  };

  const trackCheckoutError = (error: string, source: string) => {
    trackEvent('checkout_error', {
      error,
      source,
      error_time: new Date().toISOString(),
    });
  };

  const trackConversionFunnel = (stage: string, data?: Record<string, any>) => {
    trackEvent('conversion_funnel', {
      stage,
      ...data,
      funnel_time: new Date().toISOString(),
    });
  };

  return { 
    trackEvent, 
    trackPageView, 
    trackCTAClick, 
    trackCheckoutError,
    trackConversionFunnel
  };
};
