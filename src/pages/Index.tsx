import FloatingCTA from "@/components/FloatingCTA";
import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import ScienceSection from "@/components/sections/ScienceSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ResultsSection from "@/components/sections/ResultsSection";
import FAQSection from "@/components/sections/FAQSection";
import FooterSection from "@/components/sections/FooterSection";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useEffect } from "react";

const Index = () => {
  const { trackCTAClick } = useAnalytics();

  // Enhanced preloading and optimization for mobile
  useEffect(() => {
    // Preload critical resources
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = '//noahgordon.gumroad.com';
    document.head.appendChild(link);

    // Preload fonts for better mobile performance
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
    fontLink.as = 'style';
    document.head.appendChild(fontLink);

    // Reduce motion for users who prefer it
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    }

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
      if (document.head.contains(fontLink)) {
        document.head.removeChild(fontLink);
      }
    };
  }, []);

  const handleCTAClick = (location: string = 'general') => {
    trackCTAClick(location);
    window.open("https://noahgordon.gumroad.com/l/surgeonsmetabolismbible", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Floating Mobile CTA */}
      <FloatingCTA onClick={() => handleCTAClick('floating_mobile')} />

      {/* Header */}
      <Header onCTAClick={handleCTAClick} />

      {/* Hero Section */}
      <HeroSection onCTAClick={handleCTAClick} />

      {/* Problem Section */}
      <ProblemSection />

      {/* Solution Section */}
      <SolutionSection />

      {/* Science Behind the Reset Section */}
      <ScienceSection />

      {/* What You Get */}
      <FeaturesSection onCTAClick={handleCTAClick} />

      {/* Main CTA Section (formerly Results Section) */}
      <ResultsSection onCTAClick={handleCTAClick} />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default Index;
