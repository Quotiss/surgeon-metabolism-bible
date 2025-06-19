
import { lazy, Suspense, useEffect } from "react";
import FloatingCTA from "@/components/FloatingCTA";
import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import { useAnalytics } from "@/hooks/useAnalytics";
import { createCTAHandler } from "@/utils/ctaUtils";
import { CTA_LOCATIONS } from "@/lib/constants";

// Lazy load non-critical sections for better initial page load
const ProblemSection = lazy(() => import("@/components/sections/ProblemSection"));
const SolutionSection = lazy(() => import("@/components/sections/SolutionSection"));
const ScienceSection = lazy(() => import("@/components/sections/ScienceSection"));
const FeaturesSection = lazy(() => import("@/components/sections/FeaturesSection"));
const ResultsSection = lazy(() => import("@/components/sections/ResultsSection"));
const FAQSection = lazy(() => import("@/components/sections/FAQSection"));
const FooterSection = lazy(() => import("@/components/sections/FooterSection"));

// Loading fallback component
const SectionFallback = () => (
  <div className="min-h-[300px] bg-slate-50 animate-pulse flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
  </div>
);

const Index = () => {
  const { trackCTAClick } = useAnalytics();
  const handleCTAClick = createCTAHandler(trackCTAClick);

  // Enhanced preloading and optimization for mobile
  useEffect(() => {
    // Preload critical resources
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'dns-prefetch';
    preloadLink.href = '//noahgordon.gumroad.com';
    document.head.appendChild(preloadLink);

    // Preload fonts for better mobile performance
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
    fontLink.as = 'style';
    fontLink.onload = () => {
      fontLink.rel = 'stylesheet';
    };
    document.head.appendChild(fontLink);

    // Reduce motion for users who prefer it
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    }

    // Optimize viewport for mobile
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes');
    }

    return () => {
      if (document.head.contains(preloadLink)) {
        document.head.removeChild(preloadLink);
      }
      if (document.head.contains(fontLink)) {
        document.head.removeChild(fontLink);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Floating Mobile CTA */}
      <FloatingCTA onClick={() => handleCTAClick(CTA_LOCATIONS.FLOATING_MOBILE)} />

      {/* Header - Critical, load immediately */}
      <Header onCTAClick={handleCTAClick} />

      {/* Hero Section - Critical, load immediately */}
      <HeroSection onCTAClick={handleCTAClick} />

      {/* Non-critical sections - lazy loaded */}
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
    </div>
  );
};

export default Index;
