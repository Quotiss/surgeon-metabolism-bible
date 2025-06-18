
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star, ArrowRight } from "lucide-react";
import LazySection from "@/components/LazySection";

interface FeaturesSectionProps {
  onCTAClick: (location: string) => void;
}

const FeaturesSection = ({ onCTAClick }: FeaturesSectionProps) => {
  return (
    <LazySection className="py-8 sm:py-12 md:py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
            What You Get in the Surgeon Metabolism Bible
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600">
            Everything you need to restore your vitality and reclaim your energy
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <Card className="p-4 sm:p-6 md:p-8 hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-0">
              <h3 className="font-bold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-slate-900">Core eBook (50 pages)</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start space-x-2 sm:space-x-3">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">The 3 metabolic pillars every surgeon must master</span>
                </li>
                <li className="flex items-start space-x-2 sm:space-x-3">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">How to fix insulin resistance in 21 days</span>
                </li>
                <li className="flex items-start space-x-2 sm:space-x-3">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">The surgeon's guide to hormonal optimization</span>
                </li>
                <li className="flex items-start space-x-2 sm:space-x-3">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Energy restoration protocols that work in 48 hours</span>
                </li>
                <li className="flex items-start space-x-2 sm:space-x-3">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Mental clarity enhancement strategies</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-4 sm:p-6 md:p-8 border-2 border-blue-200 bg-blue-50 hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-0">
              <h3 className="font-bold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-slate-900">Exclusive Bonuses</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start space-x-2 sm:space-x-3">
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base"><strong>Grocery Guide:</strong> Done-for-you shopping list</span>
                </li>
                <li className="flex items-start space-x-2 sm:space-x-3">
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base"><strong>Supplement Guide:</strong> Performance, energy & libido stack</span>
                </li>
                <li className="flex items-start space-x-2 sm:space-x-3">
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base"><strong>Quick Start Protocol:</strong> See results in 7 days</span>
                </li>
              </ul>
              
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-white rounded-lg">
                <p className="text-xs sm:text-sm text-slate-600 mb-1 sm:mb-2">Total Value: $197</p>
                <p className="text-2xl sm:text-3xl font-bold text-blue-600">Your Price: $27</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-6 sm:mt-8 md:mt-12">
          <Button 
            onClick={() => onCTAClick('main_offer')}
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-12 py-3 md:py-4 h-auto w-full sm:w-auto transition-all duration-200 touch-manipulation font-semibold"
          >
            Get Instant Access - $27
            <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
          </Button>
          <p className="text-xs sm:text-sm text-slate-500 mt-3 sm:mt-4">
            Instant download • 30-day money-back guarantee
          </p>
        </div>
      </div>
    </LazySection>
  );
};

export default FeaturesSection;
