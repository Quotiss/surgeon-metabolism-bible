
import { CheckCircle, Clock, Shield, Target } from "lucide-react";
import { useHeroVisibilityTracking } from "@/hooks/useHeroVisibilityTracking";
import { useAnalytics } from "@/hooks/useAnalytics";
import MobileOptimizedSection from "@/components/ui/MobileOptimizedSection";
import CompleteCTA from "@/components/cta/CompleteCTA";
import TrustBadge from "@/components/ui/TrustBadge";

interface HeroSectionProps {
  onCTAClick: (location: string) => void;
}

const HeroSection = ({ onCTAClick }: HeroSectionProps) => {
  const { trackPageView } = useAnalytics();
  const { elementRef } = useHeroVisibilityTracking(trackPageView, {
    threshold: 0.5,
    delay: 500
  });

  const trustIndicators = [
    { icon: Clock, text: "No time-wasting fluff" },
    { icon: Shield, text: "Evidence-based approach" },
    { icon: Target, text: "Surgeon-specific protocol" }
  ];

  return (
    <>
      {/* Product Name Header */}
      <div className="fixed top-0 left-0 right-0 bg-blue-600 h-12 flex items-center justify-center z-50">
        <h2 className="text-white font-bold text-sm sm:text-base">
          Surgeon Metabolism Bible
        </h2>
      </div>

      <MobileOptimizedSection 
        ref={elementRef}
        className="hero-section text-center pt-16"
        padding="lg"
        background="gradient"
      >
        {/* Trust Badge */}
        <div className="mb-6 sm:mb-8">
          <TrustBadge size="large" />
        </div>

      {/* Main Headline */}
      <h1 className="mobile-h1 text-slate-900 mb-6 sm:mb-8 leading-tight">
        The <span className="text-blue-600 font-bold">Hidden</span> Metabolic Protocol{" "}
        <span className="text-blue-600 font-bold">Elite Surgeons</span> Are Using to Gain{" "}
        <span className="text-blue-600 font-bold">Unfair Advantages</span> in the OR (and How To{" "}
        <span className="text-blue-600 font-bold">Steal Their Exact System</span>)
      </h1>
      
      {/* Subheadline */}
      <p className="mobile-body-large text-slate-800 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed">
        Without overhauling your routine that barely keeps you functioning, eliminating your favorite foods, or avoiding social events because of your "weird diet"
      </p>

      {/* CTA Section */}
      <div className="flex flex-col gap-6 justify-center items-center mb-10 sm:mb-12 max-w-lg mx-auto">
        <CompleteCTA 
          onCTAClick={() => onCTAClick('hero')}
          size="large"
          showPricing={true}
        />
      </div>

      {/* Trust Indicators */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
        {trustIndicators.map((indicator, index) => (
          <div key={index} className="flex items-center justify-center space-x-3 p-4 sm:p-5 rounded-lg bg-white/70 backdrop-blur-sm">
            <indicator.icon className="h-5 sm:h-6 w-5 sm:w-6 text-blue-600 flex-shrink-0" />
            <span className="text-slate-600 mobile-body-small font-medium">{indicator.text}</span>
          </div>
        ))}
      </div>
      </MobileOptimizedSection>
    </>
  );
};

export default HeroSection;
