
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ArrowRight } from "lucide-react";
import LazySection from "@/components/LazySection";

interface FeaturesSectionProps {
  onCTAClick: (location: string) => void;
}

const FeaturesSection = ({ onCTAClick }: FeaturesSectionProps) => {
  return (
    <LazySection className="py-8 sm:py-12 md:py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
            Exclusive Bonuses Included
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600">
            Everything you need to implement the system immediately
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <Card className="p-4 sm:p-6 md:p-8 border-2 border-blue-200 bg-blue-50 hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-0">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                <Star className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-600" />
                <h3 className="font-bold text-lg sm:text-xl text-slate-900">Bonus #1</h3>
              </div>
              <h4 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-slate-900">
                Full Done-For-You Grocery Guide and Shopping List
              </h4>
              <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4">
                Maximize efficiency and minimize stress in the grocery store. No BS framework.
              </p>
              <div className="bg-white p-3 sm:p-4 rounded-lg">
                <p className="text-xs sm:text-sm text-slate-600 mb-1">Value: $47</p>
              </div>
            </CardContent>
          </Card>

          <Card className="p-4 sm:p-6 md:p-8 border-2 border-blue-200 bg-blue-50 hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-0">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                <Star className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-600" />
                <h3 className="font-bold text-lg sm:text-xl text-slate-900">Bonus #2</h3>
              </div>
              <h4 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-slate-900">
                Full Supplementation Guide
              </h4>
              <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4">
                For enhancing performance, energy, and libido that works synergistically with our mechanism.
              </p>
              <div className="bg-white p-3 sm:p-4 rounded-lg">
                <p className="text-xs sm:text-sm text-slate-600 mb-1">Value: $97</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-6 sm:mt-8">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg mb-6 sm:mb-8">
            <p className="text-sm sm:text-base text-slate-600 mb-2">Total Bonus Value: $144</p>
            <p className="text-2xl sm:text-3xl font-bold text-blue-600">Your Price: $27</p>
          </div>
          
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
