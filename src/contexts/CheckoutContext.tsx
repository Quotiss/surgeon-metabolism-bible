
import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { checkoutService, CheckoutConfig, CheckoutInstance } from '@/services/checkoutService';
import { toast } from 'sonner';

interface CheckoutContextType {
  isCheckoutOpen: boolean;
  checkoutInstance: CheckoutInstance | null;
  isLoading: boolean;
  config: CheckoutConfig;
  openCheckout: (source: string) => Promise<void>;
  closeCheckout: () => void;
  setConfig: (config: Partial<CheckoutConfig>) => void;
}

const CheckoutContext = createContext<CheckoutContextType | undefined>(undefined);

interface CheckoutProviderProps {
  children: ReactNode;
  defaultConfig?: Partial<CheckoutConfig>;
}

export const CheckoutProvider = ({ children, defaultConfig }: CheckoutProviderProps) => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutInstance, setCheckoutInstance] = useState<CheckoutInstance | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [config, setConfigState] = useState<CheckoutConfig>({
    strategy: 'library',
    theme: 'light',
    layout: 'modal',
    ...defaultConfig
  });

  const setConfig = useCallback((newConfig: Partial<CheckoutConfig>) => {
    const updatedConfig = { ...config, ...newConfig };
    setConfigState(updatedConfig);
    checkoutService.setConfig(updatedConfig);
  }, [config]);

  const openCheckout = useCallback(async (source: string) => {
    try {
      setIsLoading(true);
      const instance = await checkoutService.createCheckout(source);
      
      // Set up event listeners
      instance.addEventListener('success', (event) => {
        console.log('Checkout success:', event);
        toast.success('🎉 Payment completed! Check your email for download instructions.');
        window.dispatchEvent(new CustomEvent('checkout-success', { detail: event.detail }));
      });

      instance.addEventListener('close', () => {
        console.log('Checkout closed');
        setIsCheckoutOpen(false);
        setCheckoutInstance(null);
        setIsLoading(false);
      });

      instance.addEventListener('confirmed', (event) => {
        console.log('Payment confirmed, processing:', event);
        toast.loading('Processing payment...', { id: 'payment-processing' });
      });

      setCheckoutInstance(instance);
      setIsCheckoutOpen(true);
    } catch (error) {
      console.error('Failed to open checkout:', error);
      toast.error('Failed to open checkout. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const closeCheckout = useCallback(() => {
    if (checkoutInstance) {
      checkoutInstance.close();
    }
    setIsCheckoutOpen(false);
    setCheckoutInstance(null);
    setIsLoading(false);
  }, [checkoutInstance]);

  return (
    <CheckoutContext.Provider value={{
      isCheckoutOpen,
      checkoutInstance,
      isLoading,
      config,
      openCheckout,
      closeCheckout,
      setConfig
    }}>
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckout = () => {
  const context = useContext(CheckoutContext);
  if (context === undefined) {
    throw new Error('useCheckout must be used within a CheckoutProvider');
  }
  return context;
};
