
import { useEffect } from 'react';

export const usePolarCheckout = () => {
  useEffect(() => {
    const initPolar = async () => {
      try {
        const { PolarEmbedCheckout } = await import('@polar-sh/checkout/embed');
        PolarEmbedCheckout.init();
        console.log('Polar checkout initialized successfully');
      } catch (error) {
        console.error('Failed to initialize Polar checkout:', error);
      }
    };

    initPolar();
  }, []);
};
