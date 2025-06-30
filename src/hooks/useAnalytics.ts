
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
    trackEvent('cta_click', { location });
    
    // Fire Meta Pixel InitiateCheckout event
    if (window.fbq) {
      window.fbq('track', META_PIXEL_EVENTS.INITIATE_CHECKOUT, { source: location });
      console.log('Meta Pixel InitiateCheckout event fired for:', location);
    }
  };

  return { trackEvent, trackPageView, trackCTAClick };
};
