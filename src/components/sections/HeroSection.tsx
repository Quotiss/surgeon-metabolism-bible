
import { CheckCircle, Clock, Shield, Target, Lock, ChevronDown } from "lucide-react";
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
      <div className="bg-blue-600 h-16 flex items-center justify-center w-full">
        <h2 className="text-white font-bold text-sm sm:text-base">
          Surgeon Metabolism Bible
        </h2>
      </div>

      <MobileOptimizedSection 
        ref={elementRef}
        className="hero-section text-center"
        padding="lg"
        background="gradient"
      >
      {/* Main Headline */}
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-6 sm:mb-8 leading-tight font-bold px-2 sm:px-4">
        The <span className="text-blue-600 font-bold">Hidden</span> Metabolic Protocol{" "}
        <span className="text-blue-600 font-bold">Elite Surgeons</span> Are Using to{" "}
        <span className="text-blue-600 font-bold">Supercharge Their Physiques</span> and{" "}
        <span className="text-blue-600 font-bold">Reclaim Their Mental Energy</span> in Under{" "}
        <span className="text-blue-600 font-bold">30 Days</span>
        <br />
        <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-slate-700 font-normal">
          (And How to Steal Their System)
        </span>
      </h1>
      
      {/* Subheadline */}
      <p className="text-sm sm:text-lg md:text-xl text-slate-800 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
        Without overhauling your routine that barely keeps you functioning, eliminating your favorite foods, or avoiding social events because of your "weird diet"
      </p>

      {/* Transition Arrow */}
      <div className="flex justify-center py-8 sm:py-12">
        <ChevronDown className="h-8 w-8 sm:h-10 sm:w-10 text-slate-400" />
      </div>

      </MobileOptimizedSection>
    </>
  );
};

export default HeroSection;
