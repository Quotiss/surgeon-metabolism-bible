import React from 'react';
import { Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section } from "./Section";
import { trackEvent } from "@/services/eventTrackingService";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useCheckout } from '@/contexts/CheckoutContext';

const HeroSection = () => {
  const { openCheckout } = useCheckout();
  const { trackCTAClick } = useAnalytics();

  const handleCTAClick = (location: string = 'general') => {
    try {
      trackCTAClick(location);
      console.log('Initiating checkout for:', location);
      
      // Use the CheckoutProvider's openCheckout method directly
      openCheckout(location);
      
    } catch (error) {
      console.error('Checkout failed:', error);
      
      alert('Checkout failed. Please try again.');
    }
  };

  return (
    <Section className="relative">
      <div className="container mx-auto flex flex-col items-center py-16 md:py-24 lg:py-32 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          Support Indie Development <Sparkles className="inline-block h-6 w-6 ml-2 animate-pulse text-yellow-500" />
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8">
          Fund open-source projects and get rewarded.
        </p>
        <Button size="lg" onClick={() => handleCTAClick('hero')} className="bg-black text-white hover:bg-gray-800">
          Become a Backer
        </Button>
      </div>
    </Section>
  );
};

export default HeroSection;
