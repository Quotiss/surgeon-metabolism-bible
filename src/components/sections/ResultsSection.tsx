
import { CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import LazySection from "@/components/LazySection";

interface ResultsSectionProps {
  onCTAClick: (location: string) => void;
}

const ResultsSection = ({ onCTAClick }: ResultsSectionProps) => {
  return (
    <LazySection className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
            Get the Complete Surgeon Metabolism Bible Today
          </h2>
        </div>

        {/* Everything You're Getting Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-10 mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 text-center">
            Everything You're Getting
          </h3>
          
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-start space-x-3 sm:space-x-4 p-4 rounded-lg bg-blue-50 border border-blue-200">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-3 w-3 sm:h-5 sm:w-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-base sm:text-lg text-slate-900">
                  Surgeon Metabolism Bible <span className="text-blue-600">($197 value)</span>
                </h4>
                <p className="text-slate-600 text-sm sm:text-base mt-1">
                  Complete 30-day protocol that harnesses your surgical stress patterns for metabolic transformation
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 sm:space-x-4 p-4 rounded-lg bg-blue-50 border border-blue-200">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-3 w-3 sm:h-5 sm:w-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-base sm:text-lg text-slate-900">
                  Bonus #1: The Surgeon's Grocery Blueprint <span className="text-blue-600">(Value: $97)</span>
                </h4>
                <p className="text-slate-600 text-sm sm:text-base mt-1">
                  Done-for-you shopping list organized for maximum efficiency
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 sm:space-x-4 p-4 rounded-lg bg-blue-50 border border-blue-200">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-3 w-3 sm:h-5 sm:w-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-base sm:text-lg text-slate-900">
                  Bonus #2: The Surgical Stress Supplement Stack <span className="text-blue-600">(Value: $147)</span>
                </h4>
                <p className="text-slate-600 text-sm sm:text-base mt-1">
                  Exact supplementation protocol elite surgeons use to amplify results
                </p>
              </div>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="text-center mt-8 p-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg text-white">
            <p className="text-lg sm:text-xl font-bold mb-2">
              Total Package Value: <span className="line-through opacity-75">$441</span> → Yours for $27
            </p>
          </div>
        </div>

        {/* Comparison Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8 text-center">
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Personal trainers charge $2,000+ for generic programs that ignore surgical stress physiology. 
            Metabolic specialists charge $5,000+ for consultations that cover a fraction of what's in this system.
          </p>
        </div>

        {/* Urgency Section */}
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 sm:p-6 mb-8 text-center">
          <div className="flex items-center justify-center mb-2">
            <Clock className="h-5 w-5 text-red-600 mr-2" />
            <p className="font-bold text-red-600 text-base sm:text-lg">
              Price increases to $97 in 24 hours
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button 
            onClick={() => onCTAClick('main_cta')}
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-base sm:text-lg md:text-xl px-8 sm:px-12 md:px-16 py-4 sm:py-5 h-auto font-bold w-full sm:w-auto transition-all duration-200 touch-manipulation shadow-lg"
          >
            Get Instant Access Now - $27
            <ArrowRight className="ml-3 h-5 sm:h-6 w-5 sm:w-6" />
          </Button>
          
          <p className="text-xs sm:text-sm mt-4 text-slate-600">
            Instant download • 30-day money-back guarantee • For surgeons only
          </p>
        </div>
      </div>
    </LazySection>
  );
};

export default ResultsSection;
