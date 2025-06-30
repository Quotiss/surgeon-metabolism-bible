
import { useEffect, useCallback } from 'react';
import { eventTrackingService } from '@/services/eventTrackingService';
import { metaPixelService } from '@/services/metaPixelService';
import { purchaseTrackingService } from '@/services/purchaseTrackingService';

export interface CheckoutEventHandlers {
  onSuccess?: (event: any) => void;
  onClose?: () => void;
  onConfirmed?: (event: any) => void;
  onLoaded?: () => void;
  onError?: (error: any) => void;
}

export const useCheckoutEvents = (handlers: CheckoutEventHandlers = {}) => {
  
  const handleSuccess = useCallback((event: any) => {
    const source = event.detail?.source || 'embedded';
    
    // Track with existing services
    purchaseTrackingService.trackPurchase(source);
    
    // Custom handler
    handlers.onSuccess?.(event);
  }, [handlers]);

  const handleConfirmed = useCallback((event: any) => {
    // Track payment confirmation
    eventTrackingService.trackEvent('payment_confirmed', {
      checkout_id: event.detail?.checkoutId,
      timestamp: new Date().toISOString()
    });
    
    handlers.onConfirmed?.(event);
  }, [handlers]);

  const handleLoaded = useCallback(() => {
    // Track checkout loaded
    eventTrackingService.trackEvent('checkout_loaded', {
      timestamp: new Date().toISOString()
    });
    
    handlers.onLoaded?.();
  }, [handlers]);

  const handleClose = useCallback(() => {
    // Track checkout closed
    eventTrackingService.trackEvent('checkout_closed', {
      timestamp: new Date().toISOString()
    });
    
    handlers.onClose?.();
  }, [handlers]);

  const handleError = useCallback((error: any) => {
    // Track checkout error
    eventTrackingService.trackEvent('checkout_error', {
      error: error.message || 'Unknown error',
      timestamp: new Date().toISOString()
    });
    
    handlers.onError?.(error);
  }, [handlers]);

  // Set up global event listeners for fallback
  useEffect(() => {
    const events = {
      'checkout-success': handleSuccess,
      'checkout-confirmed': handleConfirmed,
      'checkout-loaded': handleLoaded,
      'checkout-close': handleClose,
      'checkout-error': handleError
    };

    Object.entries(events).forEach(([event, handler]) => {
      window.addEventListener(event, handler as EventListener);
    });

    return () => {
      Object.entries(events).forEach(([event, handler]) => {
        window.removeEventListener(event, handler as EventListener);
      });
    };
  }, [handleSuccess, handleConfirmed, handleLoaded, handleClose, handleError]);

  return {
    handleSuccess,
    handleConfirmed,
    handleLoaded,
    handleClose,
    handleError
  };
};
