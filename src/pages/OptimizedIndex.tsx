import React, { useState, useEffect, useCallback } from 'react';
import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import ScienceSection from "@/components/sections/ScienceSection";
import CaseStudy from "@/components/sections/CaseStudy";
import ResultsSection from "@/components/sections/ResultsSection";
import UrgencySection from "@/components/sections/UrgencySection";
import FAQSection from "@/components/sections/FAQSection";
import FooterSection from "@/components/sections/FooterSection";
import FloatingCTA from "@/components/FloatingCTA";
import { useEmbeddedCheckout } from '@/hooks/useEmbeddedCheckout';
import { createCheckoutSession } from '@/services/polarService';
import { useAnalytics } from '@/hooks/useAnalytics';
import EmbeddedCheckout from '@/components/checkout/EmbeddedCheckout';

const OptimizedIndex = () => {
  const { 
    isCheckoutOpen, 
    checkoutUrl, 
    openEmbeddedCheckout, 
    closeEmbeddedCheckout, 
    handleCheckoutSuccess,
    isLoading,
    setIsLoading
  } = useEmbeddedCheckout();
  
  const { trackPageView, trackCTAClick } = useAnalytics();

  const handleCTAClick = useCallback(async (location: string = 'general') => {
    try {
      trackCTAClick(location);
      console.log('Initiating checkout for:', location);
      
      const session = await createCheckoutSession(location, true);
      openEmbeddedCheckout(session.url);
      
    } catch (error) {
      console.error('Checkout failed:', error);
    }
  }, [openEmbeddedCheckout, trackCTAClick]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackPageView();
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const heroSection = document.querySelector('#hero-section');
    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => {
      if (heroSection) {
        observer.unobserve(heroSection);
      }
    };
  }, [trackPageView]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ScienceSection />
        <CaseStudy />
        <ResultsSection />
        <UrgencySection />
        <FAQSection />
        <FooterSection />
      </main>
      
      <FloatingCTA onClick={handleCTAClick} />
      
      <EmbeddedCheckout
        isOpen={isCheckoutOpen}
        onClose={closeEmbeddedCheckout}
        checkoutUrl={checkoutUrl}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        onSuccess={handleCheckoutSuccess}
      />
    </div>
  );
};

export default OptimizedIndex;
