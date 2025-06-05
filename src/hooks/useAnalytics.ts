
import { useEffect } from 'react';

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
  };

  return { trackEvent, trackCTAClick };
};
