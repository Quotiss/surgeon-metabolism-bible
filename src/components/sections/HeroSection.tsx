import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Shield, Target, CheckCircle } from "lucide-react";
import { useHeroVisibilityTracking } from "@/hooks/useHeroVisibilityTracking";
import { useAnalytics } from "@/hooks/useAnalytics";
import SecurityBadge from "@/components/ui/SecurityBadge";

interface HeroSectionProps {
  onCTAClick: (location: string) => void;
}

const HeroSection = ({ onCTAClick }: HeroSectionProps) => {
  const { trackPageView } = useAnalytics();
  const { elementRef } = useHeroVisibilityTracking(trackPageView, {
    threshold: 0.5, // Hero section must be 50% visible
    delay: 500 // Wait 500ms after visibility to ensure full render
  });

  return (
    <section 
      ref={elementRef}
      className="py-8 sm:py-12 md:py-20 px-4 hero-section"
    >
      <div className="container mx-auto max-w-6xl text-center">
        
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
          The <span className="text-blue-600 font-bold">Hidden</span> Metabolic Protocol <span className="text-blue-600 font-bold">Elite Surgeons</span> Are Using to Gain <span className="text-blue-600 font-bold">Unfair Advantages</span> in the OR (and How To <span className="text-blue-600 font-bold">Steal Their Exact System</span>)
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-slate-800 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
          Without overhauling your routine that barely keeps you functioning, eliminating your favorite foods, or avoiding social events because of your "weird diet"
        </p>

        <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 md:mb-12">
          <Button 
            onClick={() => onCTAClick('hero')} 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto w-full sm:w-auto transition-all duration-200 touch-manipulation font-semibold"
          >
            Get Instant Access Now
            <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
          </Button>
          
          <div className="flex items-center justify-center space-x-2 text-sm sm:text-base text-slate-600 mb-2">
            <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-green-600 flex-shrink-0" />
            <span className="font-bold">$27 Full Access • ⚠️ Limited to First 500 Surgeons • <span className="text-green-600">30-day 100% money back guarantee</span></span>
          </div>
          
          <div className="flex items-center justify-center gap-4">
            <SecurityBadge />
            <img 
              src="/lovable-uploads/36484096-74f6-40bb-988c-86af5ddd059a.png" 
              alt="30 Days Money Back Guarantee" 
              className="w-12 h-12 object-contain"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-8 max-w-4xl mx-auto text-xs sm:text-sm md:text-base">
          <div className="flex items-center justify-center space-x-2 p-2 rounded-lg bg-slate-50/50">
            <Clock className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600 flex-shrink-0" />
            <span className="text-slate-600">No time-wasting fluff</span>
          </div>
          <div className="flex items-center justify-center space-x-2 p-2 rounded-lg bg-slate-50/50">
            <Shield className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600 flex-shrink-0" />
            <span className="text-slate-600">Evidence-based approach</span>
          </div>
          <div className="flex items-center justify-center space-x-2 p-2 rounded-lg bg-slate-50/50">
            <Target className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600 flex-shrink-0" />
            <span className="text-slate-600">Surgeon-specific protocol</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
