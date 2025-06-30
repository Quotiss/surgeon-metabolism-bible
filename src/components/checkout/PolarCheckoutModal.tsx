
import React, { useState, useCallback } from 'react';
import { PolarEmbedCheckout } from '@polar-sh/checkout/embed';
import { POLAR_CONFIG } from '@/lib/constants';
import { toast } from 'sonner';
import { metaPixelService } from '@/services/metaPixelService';
import { createCheckoutSession } from '@/services/polarService';

// Global state for the checkout modal
let checkoutInstance: any = null;
let isCheckoutOpen = false;

const PolarCheckoutModal = () => {
  const [isLoading, setIsLoading] = useState(false);

  const openCheckout = useCallback(async (source: string) => {
    if (isCheckoutOpen) return;
    
    try {
      setIsLoading(true);
      
      // Track initiate checkout
      metaPixelService.trackInitiateCheckout(source);
      
      // Create checkout session
      const session = await createCheckoutSession(source, false);
      
      // Create Polar modal checkout
      checkoutInstance = await PolarEmbedCheckout.create(session.url, 'light');
      isCheckoutOpen = true;
      
      // Set up event listeners
      checkoutInstance.addEventListener('success', (event: any) => {
        console.log('Checkout success:', event);
        metaPixelService.trackPurchase(source);
        toast.success('🎉 Payment completed! Check your email for download instructions.');
        isCheckoutOpen = false;
        checkoutInstance = null;
      });

      checkoutInstance.addEventListener('close', () => {
        console.log('Checkout closed');
        isCheckoutOpen = false;
        checkoutInstance = null;
      });

    } catch (error) {
      console.error('Failed to open checkout:', error);
      toast.error('Failed to open checkout. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Expose openCheckout globally
  React.useEffect(() => {
    (window as any).openPolarCheckout = openCheckout;
  }, [openCheckout]);

  return null; // This component doesn't render anything, just manages the modal
};

export default PolarCheckoutModal;
