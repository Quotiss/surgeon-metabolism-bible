
import { lazy, Suspense } from "react";
import FloatingCTA from "@/components/FloatingCTA";
import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import { useAnalytics } from "@/hooks/useAnalytics";
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
  const handleCTAClick = createCTAHandler(trackCTAClick);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <FloatingCTA onClick={() => handleCTAClick(CTA_LOCATIONS.FLOATING_MOBILE)} />
      <Header onCTAClick={handleCTAClick} />
      <HeroSection onCTAClick={handleCTAClick} />

      <Suspense fallback={<SectionFallback />}>
        <ProblemSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <SolutionSection onCTAClick={handleCTAClick} />
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
