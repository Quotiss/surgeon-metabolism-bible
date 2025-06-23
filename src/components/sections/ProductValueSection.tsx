
import CountdownTimer from "@/components/ui/CountdownTimer";
import CTAButton from "@/components/ui/CTAButton";
import { CheckCircle, BookOpen, ShoppingCart, Pill } from "lucide-react";
import { PRODUCT_PRICING, CTA_LOCATIONS } from "@/lib/constants";
import type { SectionProps } from "@/types/common";

const ProductValueSection = ({ onCTAClick }: SectionProps) => {
  return (
    <div className="bg-white border-2 border-blue-200 rounded-xl shadow-xl p-6 sm:p-8 md:p-10 mb-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
          Get the Complete Package Today
        </h3>
        <p className="text-slate-600">Everything you need to transform your metabolism</p>
      </div>
      
      {/* What's Included */}
      <div className="space-y-4 mb-8">
        <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
            <BookOpen className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h4 className="font-bold text-lg text-slate-900">
              Surgeon Metabolism Bible <span className="text-blue-600">($197 value)</span>
            </h4>
            <p className="text-slate-600 text-sm mt-1">
              Complete 30-day protocol that harnesses your surgical stress patterns for metabolic transformation
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
            <ShoppingCart className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h4 className="font-bold text-lg text-slate-900">
              Bonus #1: The Surgeon's Grocery Blueprint <span className="text-blue-600">($97 value)</span>
            </h4>
            <p className="text-slate-600 text-sm mt-1">
              Done-for-you shopping list organized for maximum efficiency
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Pill className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h4 className="font-bold text-lg text-slate-900">
              Bonus #2: The Surgical Stress Supplement Stack <span className="text-blue-600">($147 value)</span>
            </h4>
            <p className="text-slate-600 text-sm mt-1">
              Exact supplementation protocol elite surgeons use to amplify results
            </p>
          </div>
        </div>
      </div>

      {/* Price Anchor */}
      <div className="text-center mb-6">
        <p className="text-lg font-medium text-slate-600 mb-2">
          Total Package Value: <span className="line-through text-slate-400">${PRODUCT_PRICING.originalValue}</span>
        </p>
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200 rounded-lg p-6 mb-4">
          <p className="text-sm font-bold text-blue-800 mb-2 uppercase tracking-wide">
            🎯 Early-Adopter Pricing (Limited Time)
          </p>
          <p className="text-4xl sm:text-5xl font-black text-slate-900 mb-2">
            Complete Package: $27
          </p>
          <p className="text-sm text-slate-600">
            Regular price $97 • Save $70 today only
          </p>
        </div>
      </div>

      {/* Countdown Timer */}
      <div className="mb-6">
        <CountdownTimer />
      </div>

      {/* CTA Button */}
      <div className="text-center mb-4">
        <CTAButton 
          onClick={() => onCTAClick(CTA_LOCATIONS.MAIN_CTA)}
          text="Get Instant Access"
        />
      </div>

      {/* Final Urgency Note */}
      <div className="bg-slate-100 rounded-lg p-4 text-center">
        <p className="text-sm font-medium text-slate-700 mb-1">
          ⚠️ Limited to first 500 surgeons only
        </p>
        <p className="text-xs text-slate-600">
          Early-adopter pricing will not be available again
        </p>
      </div>
    </div>
  );
};

export default ProductValueSection;
