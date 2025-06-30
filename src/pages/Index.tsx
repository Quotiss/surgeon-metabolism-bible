
import React from 'react';
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import FAQSection from "@/components/sections/FAQSection";
import Header from "@/components/Header";
import { CheckoutProvider, useCheckout } from '@/contexts/CheckoutContext';
import { useCheckoutEvents } from '@/hooks/useCheckoutEvents';
import EmbeddedCheckout from '@/components/checkout/EmbeddedCheckout';

const CheckoutWrapper = () => {
  const { 
    isCheckoutOpen, 
    checkoutInstance, 
    isLoading, 
    closeCheckout,
    setConfig 
  } = useCheckout();

  const { handleSuccess } = useCheckoutEvents({
    onSuccess: () => {
      console.log('Checkout success handled by CheckoutWrapper');
    }
  });

  // Configure checkout for embedded use
  React.useEffect(() => {
    setConfig({ 
      strategy: 'library',
      theme: 'light',
      layout: 'modal'
    });
  }, [setConfig]);

  return (
    <EmbeddedCheckout
      isOpen={isCheckoutOpen}
      onClose={closeCheckout}
      checkoutUrl={checkoutInstance?.url || null}
      isLoading={isLoading}
      setIsLoading={() => {}} // Managed by CheckoutProvider
      onSuccess={handleSuccess}
    />
  );
};

const Index = () => {
  return (
    <CheckoutProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <Header />
        <main>
          <HeroSection />
          <FeaturesSection />
          <FAQSection />
        </main>
        
        <CheckoutWrapper />
      </div>
    </CheckoutProvider>
  );
};

export default Index;
