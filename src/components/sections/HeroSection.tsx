
import { CheckCircle, Clock, Shield, Target } from "lucide-react";
import { useHeroVisibilityTracking } from "@/hooks/useHeroVisibilityTracking";
import { useAnalytics } from "@/hooks/useAnalytics";
import MobileOptimizedSection from "@/components/ui/MobileOptimizedSection";
import CompleteCTA from "@/components/cta/CompleteCTA";

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
    <MobileOptimizedSection 
      ref={elementRef}
      className="hero-section text-center"
      padding="lg"
      background="gradient"
    >
      {/* Main Headline */}
      <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
        The <span className="text-blue-600 font-bold">Hidden</span> Metabolic Protocol{" "}
        <span className="text-blue-600 font-bold">Elite Surgeons</span> Are Using to Gain{" "}
        <span className="text-blue-600 font-bold">Unfair Advantages</span> in the OR (and How To{" "}
        <span className="text-blue-600 font-bold">Steal Their Exact System</span>)
      </h1>
      
      {/* Subheadline */}
      <p className="text-base sm:text-lg md:text-xl text-slate-800 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
        Without overhauling your routine that barely keeps you functioning, eliminating your favorite foods, or avoiding social events because of your "weird diet"
      </p>

      {/* CTA Section */}
      <div className="flex flex-col gap-6 justify-center items-center mb-8 sm:mb-12 max-w-lg mx-auto px-4">
        <CompleteCTA 
          onCTAClick={() => onCTAClick('hero')}
          size="large"
          showPricing={true}
        />
      </div>

      {/* Trust Indicators */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-8 max-w-4xl mx-auto text-xs sm:text-sm md:text-base">
        {trustIndicators.map((indicator, index) => (
          <div key={index} className="flex items-center justify-center space-x-2 p-3 rounded-lg bg-white/70 backdrop-blur-sm">
            <indicator.icon className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600 flex-shrink-0" />
            <span className="text-slate-600">{indicator.text}</span>
          </div>
        ))}
      </div>
    </MobileOptimizedSection>
  );
};

export default HeroSection;
