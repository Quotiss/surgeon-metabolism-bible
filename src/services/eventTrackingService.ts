
export const eventTrackingService = {
  trackEvent: (eventName: string, properties?: Record<string, any>) => {
    console.log('Event tracked:', eventName, properties);
    
    // Add timestamp to all events
    const eventData = {
      ...properties,
      timestamp: new Date().toISOString(),
      user_agent: navigator.userAgent,
      viewport: `${window.innerWidth}x${window.innerHeight}`,
    };
    
    console.log('Enhanced event data:', eventData);
  },

  trackHeroVisible: (loadTime: number) => {
    const navigationTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    eventTrackingService.trackEvent('hero_visible', { 
      load_time: Math.round(loadTime),
      path: window.location.pathname,
      dom_load_time: navigationTiming ? Math.round(navigationTiming.domContentLoadedEventEnd - navigationTiming.fetchStart) : null,
      page_load_time: navigationTiming ? Math.round(navigationTiming.loadEventEnd - navigationTiming.fetchStart) : null,
    });
  },

  trackCTAClick: (location: string) => {
    const clickTime = performance.now();
    
    eventTrackingService.trackEvent('cta_click', { 
      location, 
      embedded: true,
      click_time: Math.round(clickTime),
      scroll_position: window.scrollY,
    });
  },

  trackConversionFunnel: (stage: string, data?: Record<string, any>) => {
    eventTrackingService.trackEvent('conversion_funnel', {
      stage,
      ...data,
      funnel_time: new Date().toISOString(),
    });
  }
};
