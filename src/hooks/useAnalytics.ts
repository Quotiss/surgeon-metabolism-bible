
import { useEffect } from 'react';
import { META_PIXEL_EVENTS } from '@/lib/constants';

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export const useAnalytics = () => {
  useEffect(() => {
    // Track page view
    console.log('Page view tracked:', window.location.pathname);
    
    // You can integrate with Google Analytics, Mixpanel, or other analytics here
    // Example: gtag('config', 'GA_MEASUREMENT_ID', { page_path: window.location.pathname });
  }, []);

  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    console.log('Event tracked:', eventName, properties);
    // Example: gtag('event', eventName, properties);
  };

  const trackCTAClick = (location: string) => {
    trackEvent('cta_click', { location });
    
    // Fire Meta Pixel InitiateCheckout event
    if (window.fbq) {
      window.fbq('track', META_PIXEL_EVENTS.INITIATE_CHECKOUT, { source: location });
      console.log('Meta Pixel InitiateCheckout event fired for:', location);
    }
  };

  return { trackEvent, trackCTAClick };
};
