
import { Card, CardContent } from "@/components/ui/card";
import LazySection from "@/components/LazySection";
import CaseStudy from "@/components/sections/CaseStudy";
import { ShoppingCart, Pill, MapPin, Clock, Package } from "lucide-react";

interface FeaturesSectionProps {
  onCTAClick: (location: string) => void;
}

const FeaturesSection = ({ onCTAClick }: FeaturesSectionProps) => {
  return (
    <LazySection className="py-8 sm:py-12 md:py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
            Plus you get these <span className="text-blue-600 font-bold">exclusive bonuses</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <Card className="p-4 sm:p-6 md:p-8 border-2 border-blue-200 bg-blue-50 hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <ShoppingCart className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-bold text-lg sm:text-xl text-slate-900">
                  Bonus #1: The Surgeon's Grocery Blueprint <span className="text-blue-600 font-bold">($97 Value)</span>
                </h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-slate-600">
                    Complete done-for-you shopping list organized by store sections for maximum efficiency
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-slate-600">
                    Never waste time wandering aisles again - get in, get the right stress-fighting foods, get out
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Package className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-slate-600">
                    Includes specific brands that work synergistically with your metabolic reset
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="p-4 sm:p-6 md:p-8 border-2 border-blue-200 bg-blue-50 hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Pill className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-bold text-lg sm:text-xl text-slate-900">
                  Bonus #2: The Surgical Stress Supplement Stack <span className="text-blue-600 font-bold">($147 Value)</span>
                </h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Pill className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-slate-600">
                    The exact supplementation protocol elite surgeons use to amplify their metabolic results
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <ShoppingCart className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-slate-600">
                    Each supplement is chosen specifically to work with your stress physiology - not against it
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-slate-600">
                    Includes dosing, timing, and which combinations accelerate fat burning while supporting energy and recovery
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <CaseStudy />
      </div>
    </LazySection>
  );
};

export default FeaturesSection;
