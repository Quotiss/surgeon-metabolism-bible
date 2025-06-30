import { lazy, Suspense, useEffect } from "react";
import FloatingCTA from "@/components/FloatingCTA";
import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import EmbeddedCheckout from "@/components/checkout/EmbeddedCheckout";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useEmbeddedCheckout } from "@/hooks/useEmbeddedCheckout";
import { createCTAHandler } from "@/utils/ctaUtils";
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
    // Preload critical resources only
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = '//noahgordon.gumroad.com';
    document.head.appendChild(link);

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
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

      {/* Embedded Checkout Modal */}
      <EmbeddedCheckout
        isOpen={isCheckoutOpen}
        checkoutUrl={checkoutUrl}
        isLoading={isLoading}
        onClose={closeEmbeddedCheckout}
        onSuccess={handleCheckoutSuccess}
        setIsLoading={setIsLoading}
      />
    </div>
  );
};

export default Index;
