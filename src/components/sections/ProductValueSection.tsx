
import CountdownTimer from "@/components/ui/CountdownTimer";
import CTAButton from "@/components/ui/CTAButton";
import { CheckCircle, BookOpen, ShoppingCart, Pill } from "lucide-react";
import { PRODUCT_PRICING, CTA_LOCATIONS } from "@/lib/constants";
import type { SectionProps } from "@/types/common";

const ProductValueSection = ({ onCTAClick }: SectionProps) => {
  return (
    <div className="bg-white border-2 border-blue-200 rounded-xl shadow-xl p-6 sm:p-8 md:p-10 mb-8">
      {/* What You Get */}
      <div className="space-y-4 mb-8">
        <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
          <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-lg text-slate-900 mb-1">
              Surgeon Metabolism Bible
            </h4>
            <p className="text-slate-600 text-sm">
              Complete 30-day protocol that harnesses your surgical stress patterns for metabolic transformation
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
          <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-lg text-slate-900 mb-1">
              Bonus #1: The Surgeon's Grocery Blueprint
            </h4>
            <p className="text-slate-600 text-sm">
              Done-for-you shopping list organized for maximum efficiency
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
          <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-lg text-slate-900 mb-1">
              Bonus #2: The Surgical Stress Supplement Stack
            </h4>
            <p className="text-slate-600 text-sm">
              Exact supplementation protocol elite surgeons use to amplify results
            </p>
          </div>
        </div>
      </div>

      {/* Price Section with Timer */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200 rounded-lg p-6 mb-6">
        <div className="text-center mb-4">
          <p className="text-lg text-slate-600 mb-1">
            Total Package Value: <span className="line-through text-slate-400">${PRODUCT_PRICING.originalValue}</span>
          </p>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div>
              <p className="text-3xl sm:text-4xl font-black text-slate-900 mb-1">
                Complete Package: $27
              </p>
              <p className="text-sm text-slate-600">
                Early-adopter price (reg. $97)
              </p>
            </div>
          </div>
        </div>
        
        {/* Integrated Countdown Timer */}
        <div className="mb-4">
          <CountdownTimer />
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <CTAButton 
            onClick={() => onCTAClick(CTA_LOCATIONS.MAIN_CTA)}
            text="Get Instant Access"
          />
        </div>
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
