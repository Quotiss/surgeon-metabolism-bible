
import { lazy, Suspense, useEffect } from "react";
import FloatingCTA from "@/components/FloatingCTA";
import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import OptimizedLazySection from "@/components/OptimizedLazySection";
import { useAnalytics } from "@/hooks/useAnalytics";
import { usePerformanceMonitor } from "@/hooks/usePerformanceMonitor";
import { createCTAHandler } from "@/utils/ctaUtils";
import { CTA_LOCATIONS } from "@/lib/constants";

// Lazy load with better chunking
const ProblemSection = lazy(() => import("@/components/sections/ProblemSection"));
const SolutionSection = lazy(() => import("@/components/sections/SolutionSection"));
const ScienceSection = lazy(() => import("@/components/sections/ScienceSection"));
const FeaturesSection = lazy(() => import("@/components/sections/FeaturesSection"));
const ResultsSection = lazy(() => import("@/components/sections/ResultsSection"));
const GuaranteeSection = lazy(() => import("@/components/sections/GuaranteeSection"));
const FAQSection = lazy(() => import("@/components/sections/FAQSection"));
const FooterSection = lazy(() => import("@/components/sections/FooterSection"));

// Optimized loading fallback
const OptimizedSectionFallback = () => (
  <div className="min-h-[300px] bg-slate-50 flex items-center justify-center">
    <div className="skeleton-optimized w-full max-w-4xl h-64 mx-4"></div>
  </div>
);

const OptimizedIndex = () => {
  const { trackCTAClick } = useAnalytics();
  const { measureFunction } = usePerformanceMonitor();
  const handleCTAClick = createCTAHandler(trackCTAClick);

  useEffect(() => {
    measureFunction('Page initialization', () => {
      // Critical resource preloading
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'dns-prefetch';
      preloadLink.href = '//noahgordon.gumroad.com';
      document.head.appendChild(preloadLink);

      // Optimize viewport for mobile
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover');
      }

      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      fontLink.as = 'style';
      fontLink.onload = () => {
        fontLink.rel = 'stylesheet';
      };
      document.head.appendChild(fontLink);

      // Reduce motion preferences
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        document.documentElement.style.setProperty('--animation-duration', '0.01ms');
      }
    });

    return () => {
      // Cleanup preloaded resources if needed
    };
  }, [measureFunction]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Floating Mobile CTA */}
      <FloatingCTA onClick={() => handleCTAClick(CTA_LOCATIONS.FLOATING_MOBILE)} />

      {/* Header - Critical, load immediately */}
      <Header onCTAClick={handleCTAClick} />

      {/* Hero Section - Critical, load immediately */}
      <HeroSection onCTAClick={handleCTAClick} />

      {/* Non-critical sections - optimized lazy loading */}
      <OptimizedLazySection delay={100}>
        <Suspense fallback={<OptimizedSectionFallback />}>
          <ProblemSection />
        </Suspense>
      </OptimizedLazySection>

      <OptimizedLazySection delay={200}>
        <Suspense fallback={<OptimizedSectionFallback />}>
          <SolutionSection onCTAClick={handleCTAClick} />
        </Suspense>
      </OptimizedLazySection>

      <OptimizedLazySection delay={300}>
        <Suspense fallback={<OptimizedSectionFallback />}>
          <ScienceSection />
        </Suspense>
      </OptimizedLazySection>

      <OptimizedLazySection delay={400}>
        <Suspense fallback={<OptimizedSectionFallback />}>
          <FeaturesSection onCTAClick={handleCTAClick} />
        </Suspense>
      </OptimizedLazySection>

      <OptimizedLazySection delay={500}>
        <Suspense fallback={<OptimizedSectionFallback />}>
          <ResultsSection onCTAClick={handleCTAClick} />
        </Suspense>
      </OptimizedLazySection>

      <OptimizedLazySection delay={550}>
        <Suspense fallback={<OptimizedSectionFallback />}>
          <GuaranteeSection onCTAClick={handleCTAClick} />
        </Suspense>
      </OptimizedLazySection>

      <OptimizedLazySection delay={600}>
        <Suspense fallback={<OptimizedSectionFallback />}>
          <FAQSection onCTAClick={handleCTAClick} />
        </Suspense>
      </OptimizedLazySection>

      <OptimizedLazySection delay={700}>
        <Suspense fallback={<OptimizedSectionFallback />}>
          <FooterSection />
        </Suspense>
      </OptimizedLazySection>
    </div>
  );
};

export default OptimizedIndex;
