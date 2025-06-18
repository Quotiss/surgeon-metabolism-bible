
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Shield, Target, FileText, ShoppingCart, Gift } from "lucide-react";

interface HeroSectionProps {
  onCTAClick: (location: string) => void;
}

const HeroSection = ({ onCTAClick }: HeroSectionProps) => {
  return (
    <section className="py-8 sm:py-12 md:py-20 px-4 hero-section">
      <div className="container mx-auto max-w-6xl text-center">
        
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
          The <span className="text-blue-600">Metabolism Mistake</span> That's Keeping 9 Out of 10 Surgeons <span className="text-blue-600">Fat, Tired, and Frustrated</span> (and How To Fix It)
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
          A 30-day surgeon-specific blueprint to reclaim vitality, supercharge your physique, and command respect.
        </p>

        <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-green-800 font-semibold text-xs sm:text-sm md:text-base">
            <FileText className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
            <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
            <Gift className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
            <span className="text-center">Get $127 worth of surgeon-specific protocols, grocery cheatsheets & bonus guides for $27 today.</span>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 md:mb-12">
          <Button 
            onClick={() => onCTAClick('hero')}
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto w-full sm:w-auto transition-all duration-200 touch-manipulation font-semibold"
          >
            Get The Complete Protocol - $27
            <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
          </Button>
          <div className="text-xs sm:text-sm text-slate-500 text-center">
            ⚡ Instant download • 50-page eBook + bonuses
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
