
import { lazy, Suspense, useEffect } from "react";
import FloatingCTA from "@/components/FloatingCTA";
import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import EmbeddedCheckout from "@/components/checkout/EmbeddedCheckout";
import { Toaster } from "@/components/ui/sonner";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useEmbeddedCheckout } from "@/hooks/useEmbeddedCheckout";
import { createCTAHandler } from "@/utils/ctaUtils";
import { preloadCheckoutResources } from "@/services/polarService";
import { CTA_LOCATIONS } from "@/lib/constants";

// Lazy load non-critical sections
const ProblemSection = lazy(() => import("@/components/sections/ProblemSection"));
const SolutionSection = lazy(() => import("@/components/sections/SolutionSection"));
const ScienceSection = lazy(() => import("@/components/sections/ScienceSection"));
const FeaturesSection = lazy(() => import("@/components/sections/FeaturesSection"));
const ResultsSection = lazy(() => import("@/components/sections/ResultsSection"));
const FAQSection = lazy(() => import("@/components/sections/FAQSection"));
const FooterSection = lazy(() => import("@/components/sections/FooterSection"));

// Minimal loading fallback
const SectionFallback = () => (
  <div className="min-h-[200px] bg-slate-50/50 animate-pulse rounded-lg mx-4 mb-4" />
);

const Index = () => {
  const { trackCTAClick } = useAnalytics();
  const { 
    isCheckoutOpen, 
    checkoutUrl, 
    isLoading,
    openEmbeddedCheckout, 
    closeEmbeddedCheckout, 
    handleCheckoutSuccess,
    setIsLoading 
  } = useEmbeddedCheckout();
  
  const handleCTAClick = createCTAHandler(trackCTAClick, openEmbeddedCheckout);

  useEffect(() => {
    // Preload critical resources
    preloadCheckoutResources();
    
    // DNS prefetch for external resources
    const prefetchDomains = [
      '//polar.sh',
      '//api.polar.sh'
    ];
    
    prefetchDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });

    return () => {
      // Cleanup prefetch links
      prefetchDomains.forEach(domain => {
        const link = document.querySelector(`link[href="${domain}"]`);
        if (link && document.head.contains(link)) {
          document.head.removeChild(link);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <FloatingCTA onClick={() => handleCTAClick(CTA_LOCATIONS.FLOATING_MOBILE)} />
      <Header onCTAClick={handleCTAClick} />
      <HeroSection onCTAClick={handleCTAClick} />

      <Suspense fallback={<SectionFallback />}>
        <ProblemSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <SolutionSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <ScienceSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <FeaturesSection onCTAClick={handleCTAClick} />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <ResultsSection onCTAClick={handleCTAClick} />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <FAQSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <FooterSection />
      </Suspense>

      {/* Enhanced Embedded Checkout Modal */}
      <EmbeddedCheckout
        isOpen={isCheckoutOpen}
        checkoutUrl={checkoutUrl}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        onClose={closeEmbeddedCheckout}
        onSuccess={handleCheckoutSuccess}
      />

      {/* Toast notifications */}
      <Toaster />
    </div>
  );
};

export default Index;
