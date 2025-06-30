
import React, { useEffect } from 'react';
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { metaPixelService } from '@/services/metaPixelService';

const HeroSection = () => {
  // Track page view when hero section mounts
  useEffect(() => {
    metaPixelService.trackPageView();
  }, []);

  const handleCTAClick = () => {
    if ((window as any).openPolarCheckout) {
      (window as any).openPolarCheckout('hero');
    }
  };

  return (
    <section className="relative">
      <div className="container mx-auto flex flex-col items-center py-16 md:py-24 lg:py-32 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          The Surgeon's Metabolism Bible <Sparkles className="inline-block h-6 w-6 ml-2 animate-pulse text-yellow-500" />
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8">
          Transform your metabolism using the stress patterns of your surgical career
        </p>
        <Button size="lg" onClick={handleCTAClick} className="bg-blue-600 text-white hover:bg-blue-700">
          Get Instant Access - $27
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
