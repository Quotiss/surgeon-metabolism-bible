
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import LazySection from "@/components/LazySection";

interface FinalCTASectionProps {
  onCTAClick: (location: string) => void;
}

const FinalCTASection = ({ onCTAClick }: FinalCTASectionProps) => {
  return (
    <LazySection className="py-8 sm:py-12 md:py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 sm:mb-4">
          Ready to Reclaim Your Vitality?
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90">
          Stop accepting fatigue and low energy as "part of the job." You deserve to feel strong, sharp, and energized at every stage of your career.
        </p>
        
        <Button 
          onClick={() => onCTAClick('bottom_cta')}
          size="lg" 
          className="bg-white text-blue-600 hover:bg-slate-100 active:bg-slate-200 text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-12 py-3 sm:py-4 h-auto font-semibold w-full sm:w-auto transition-all duration-200 touch-manipulation"
        >
          Get The Surgeon Metabolism Bible - $27
          <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
        </Button>
        
        <p className="text-xs sm:text-sm mt-3 sm:mt-4 opacity-75">
          Instant download • 30-day money-back guarantee • For surgeons only
        </p>
      </div>
    </LazySection>
  );
};

export default FinalCTASection;
