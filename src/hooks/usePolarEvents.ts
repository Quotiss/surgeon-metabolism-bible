
import { useEffect } from 'react';
import { META_PIXEL_EVENTS } from '@/lib/constants';

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export const usePolarEvents = () => {
  useEffect(() => {
    // Listen for Polar checkout success events
    const handlePolarSuccess = (event: any) => {
      console.log('Polar checkout completed successfully!', event.detail);
      
      // Fire Meta Pixel Purchase event
      if (window.fbq) {
        window.fbq('track', META_PIXEL_EVENTS.PURCHASE, {
          value: 27,
          currency: 'USD',
          content_name: 'Surgeon Metabolism Bible'
        });
        console.log('Meta Pixel Purchase event fired');
      }
    };

    // Add event listener for Polar success
    document.addEventListener('polar:checkout:success', handlePolarSuccess);
    
    return () => {
      document.removeEventListener('polar:checkout:success', handlePolarSuccess);
    };
  }, []);
};
