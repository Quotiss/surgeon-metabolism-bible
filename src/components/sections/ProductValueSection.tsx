import CountdownTimer from "@/components/ui/CountdownTimer";
import { Button } from "@/components/ui/button";
import { CheckCircle, BookOpen, Gift, Pill } from "lucide-react";
import { PRODUCT_PRICING, CTA_LOCATIONS } from "@/lib/constants";
import type { SectionProps } from "@/types/common";

const ProductValueSection = ({ onCTAClick }: SectionProps) => {
  return (
    <div className="bg-white border-2 border-blue-200 rounded-xl shadow-xl p-6 sm:p-8 md:p-10 mb-8">
      {/* What You Get - Benefit-driven layout */}
      <div className="grid gap-4 mb-8">
        <div className="flex items-start space-x-4 p-4">
          <BookOpen className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h4 className="font-bold text-xl text-slate-900 mb-2">
              Surgeon Metabolism Bible
            </h4>
            <p className="text-slate-700">
              Complete 30-day protocol that harnesses your surgical stress patterns for metabolic transformation
            </p>
            <p className="text-sm text-blue-600 font-bold mt-1">Value: $197</p>
          </div>
        </div>

        <div className="flex items-start space-x-4 p-4">
          <Gift className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h4 className="font-bold text-xl text-slate-900 mb-2">
              Bonus #1: The Surgeon's Grocery Blueprint
            </h4>
            <p className="text-slate-700">
              Done-for-you shopping list organized for maximum efficiency
            </p>
            <p className="text-sm text-green-600 font-bold mt-1">Value: $97</p>
          </div>
        </div>

        <div className="flex items-start space-x-4 p-4">
          <Pill className="h-8 w-8 text-purple-600 flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h4 className="font-bold text-xl text-slate-900 mb-2">
              Bonus #2: The Surgical Stress Supplement Stack
            </h4>
            <p className="text-slate-700">
              Exact supplementation protocol elite surgeons use to amplify results
            </p>
            <p className="text-sm text-purple-600 font-medium mt-1">Value: $147</p>
          </div>
        </div>
      </div>

      {/* Integrated Price + Timer + CTA Section */}
      <div className="bg-gray-100 rounded-xl p-6 text-center border border-slate-200">
        {/* Price Comparison */}
        <div className="mb-4">
          <div className="space-y-2 mb-4">
            <p className="text-lg text-slate-700">
              Total Package Value: <span className="font-semibold text-slate-900">$441</span>
            </p>
            <p className="text-lg text-slate-700">
              Regular Price: <span className="font-semibold text-slate-900">$97</span>
            </p>
            <p className="text-3xl sm:text-4xl font-black text-blue-600 mb-2">
              Early-Adopter Price: $27
            </p>
            <p className="text-xl font-bold text-green-600">
              You Save: $70 (today only)
            </p>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="mb-6">
          <CountdownTimer />
        </div>

        {/* Regular Button instead of CTAButton */}
        <div className="mb-4">
          <Button 
            onClick={() => onCTAClick(CTA_LOCATIONS.MAIN_CTA)}
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-base sm:text-lg md:text-xl px-8 sm:px-12 md:px-16 py-4 sm:py-5 h-auto font-bold w-full sm:w-auto transition-all duration-300 ease-out touch-manipulation shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 active:scale-95 active:translate-y-0 transform"
            style={{
              WebkitTapHighlightColor: 'transparent',
              minHeight: '48px'
            }}
          >
            <span className="flex items-center gap-3 transition-all duration-300 group">
              Get Instant Access
              <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
              $27
            </span>
          </Button>
        </div>

        {/* Final Urgency Note */}
        <div className="text-sm text-slate-600">
          <p className="font-medium mb-1">
            ⚠️ Limited to first 500 surgeons only
          </p>
          <p className="text-xs">
            Early-adopter pricing will not be available again
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductValueSection;
