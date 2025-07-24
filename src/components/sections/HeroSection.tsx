import { CheckCircle, Clock, Shield, Target } from "lucide-react";
import { useHeroVisibilityTracking } from "@/hooks/useHeroVisibilityTracking";
import { useAnalytics } from "@/hooks/useAnalytics";
import MobileOptimizedSection from "@/components/ui/MobileOptimizedSection";
import CompleteCTA from "@/components/cta/CompleteCTA";
import TrustBadge from "@/components/ui/TrustBadge";
interface HeroSectionProps {
  onCTAClick: (location: string) => void;
}
const HeroSection = ({
  onCTAClick
}: HeroSectionProps) => {
  const {
    trackPageView
  } = useAnalytics();
  const {
    elementRef
  } = useHeroVisibilityTracking(trackPageView, {
    threshold: 0.5,
    delay: 500
  });
  const trustIndicators = [{
    icon: Clock,
    text: "No time-wasting fluff"
  }, {
    icon: Shield,
    text: "Evidence-based approach"
  }, {
    icon: Target,
    text: "Surgeon-specific protocol"
  }];
  return <>
      {/* Product Name Header */}
      <div className="bg-blue-600 h-16 flex items-center justify-center w-full">
        <h2 className="text-white font-bold text-sm sm:text-base">
          Surgeon Metabolism Bible
        </h2>
      </div>

      <MobileOptimizedSection ref={elementRef} className="hero-section text-center" padding="lg" background="gradient">
        {/* Trust Badge */}
        <div className="mb-2 sm:mb-4">
          <TrustBadge size="medium" className="sm:hidden" />
          <TrustBadge size="large" className="hidden sm:block" />
        </div>

      {/* Main Headline */}
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-2 sm:mb-4 leading-tight font-bold px-2 sm:px-4">
        The <span className="text-blue-600 font-bold">Hidden</span> Metabolic Protocol{" "}
        <span className="text-blue-600 font-bold">Elite Surgeons</span> Are Using to Gain{" "}
        <span className="text-blue-600 font-bold">Unfair Advantages</span> in the OR (and How To{" "}
        <span className="text-blue-600 font-bold">Steal Their Exact System</span>)
      </h1>
      
      {/* Subheadline */}
      <p className="text-sm sm:text-lg md:text-xl text-slate-800 mb-3 sm:mb-6 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
        Without overhauling your routine that barely keeps you functioning, eliminating your favorite foods, or avoiding social events because of your "weird diet"
      </p>

      {/* CTA Section */}
      <div className="flex flex-col gap-6 justify-center items-center mb-10 sm:mb-12 max-w-lg mx-auto">
        <CompleteCTA onCTAClick={() => onCTAClick('hero')} size="large" showPricing={true} />
      </div>

      {/* Trust Indicators */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
        {trustIndicators.map((indicator, index) => <div key={index} className="flex items-center justify-center space-x-3 p-4 sm:p-5 rounded-lg bg-white/70 backdrop-blur-sm">
            <indicator.icon className="h-5 sm:h-6 w-5 sm:w-6 text-blue-600 flex-shrink-0" />
            
          </div>)}
      </div>
      </MobileOptimizedSection>
    </>;
};
export default HeroSection;