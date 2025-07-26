import { Card, CardContent } from "@/components/ui/card";
import LazySection from "@/components/LazySection";
import CaseStudy from "@/components/sections/CaseStudy";
import { ShoppingCart, Pill, Check } from "lucide-react";
interface FeaturesSectionProps {
  onCTAClick: (location: string) => void;
}
const FeaturesSection = ({
  onCTAClick
}: FeaturesSectionProps) => {
  return <LazySection className="py-8 sm:py-12 md:py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-slate-900">
            You Also Unlock Instant Access to <span className="text-blue-600 font-bold">2 Additional Bonuses</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <Card className="p-4 sm:p-6 md:p-8 border-2 border-blue-200 bg-blue-50 hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <ShoppingCart className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                    Quick Start Bonus #1:
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl text-slate-900">
                    The Surgeon's Grocery Blueprint
                  </h3>
                  <div className="text-blue-600 font-bold text-sm">
                    ($97 Value)
                  </div>
                </div>
              </div>
              
              {/* Grocery Blueprint Image */}
              <div className="flex justify-center mb-4">
                
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-slate-600">
                    <span className="font-bold text-blue-600">MUST HAVE</span> done-for-you shopping template designed for fast-moving surgeons who don't have any time to waste
                  </p>
                </div>
                
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-slate-600">
                    <span className="font-bold text-blue-600">100% clarity, zero decision-making blueprint</span> for choosing the highest-quality foods and nutrients
                  </p>
                </div>
                
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-slate-600">
                    Never waste time wandering the aisles frustrated again - <span className="font-bold text-blue-600">get in, get out. Move with purpose.</span>
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
                <div>
                  <div className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                    Quick Start Bonus #2:
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl text-slate-900">
                    The Surgical Stress Supplement Stack
                  </h3>
                  <div className="text-blue-600 font-bold text-sm">
                    ($147 Value)
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-slate-600">
                    Revealing the <span className="font-bold text-blue-600">exact supplementation protocol elite surgeons use</span> to amplify their results and maximize performance
                  </p>
                </div>
                
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-slate-600">
                    Specifically designed to work <span className="font-bold text-blue-600">with your stress physiology and chaotic lifestyle</span>, not against it.
                  </p>
                </div>
                
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-slate-600">
                    Leveraging <span className="font-bold text-blue-600">exact timing and frequency</span> to accelerate calorie-burning and nutrient uptake, while elevating mental clarity and recovery.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <CaseStudy />
      </div>
    </LazySection>;
};
export default FeaturesSection;