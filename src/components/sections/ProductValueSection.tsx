
import CountdownTimer from "@/components/ui/CountdownTimer";
import CTAButton from "@/components/ui/CTAButton";
import { CheckCircle, BookOpen, Gift, Pill } from "lucide-react";
import { PRODUCT_PRICING, CTA_LOCATIONS } from "@/lib/constants";
import type { SectionProps } from "@/types/common";

const ProductValueSection = ({ onCTAClick }: SectionProps) => {
  return (
    <div className="bg-white border-2 border-blue-200 rounded-xl shadow-xl p-6 sm:p-8 md:p-10 mb-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
          Get the Complete Surgeon Metabolism Bible Today
        </h2>
        <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
          Everything you need to access the proven metabolic system elite surgeons use to feel sharp, energized, and in control again
        </p>
      </div>

      {/* What You Get - Benefit-driven layout */}
      <div className="grid gap-4 mb-8">
        <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200">
          <BookOpen className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h4 className="font-bold text-xl text-slate-900 mb-2">
              Surgeon Metabolism Bible
            </h4>
            <p className="text-slate-700">
              Complete 30-day protocol that harnesses your surgical stress patterns for metabolic transformation
            </p>
            <p className="text-sm text-blue-600 font-medium mt-1">Value: $197</p>
          </div>
        </div>

        <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border border-green-200">
          <Gift className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h4 className="font-bold text-xl text-slate-900 mb-2">
              Bonus #1: The Surgeon's Grocery Blueprint
            </h4>
            <p className="text-slate-700">
              Done-for-you shopping list organized for maximum efficiency
            </p>
            <p className="text-sm text-green-600 font-medium mt-1">Value: $97</p>
          </div>
        </div>

        <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border border-purple-200">
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
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-xl p-6 text-center text-white">
        {/* Value Anchor */}
        <div className="mb-4">
          <p className="text-lg mb-2">
            Total Package Value: <span className="line-through text-slate-300">$441</span>
          </p>
          <div className="mb-4">
            <p className="text-4xl sm:text-5xl font-black mb-2">
              Complete Package: $27
            </p>
            <p className="text-blue-200">
              Early-adopter price (regular $97)
            </p>
          </div>
        </div>

        {/* Countdown Timer - Seamlessly Integrated */}
        <div className="mb-6">
          <CountdownTimer />
        </div>

        {/* CTA Button - Close proximity to price */}
        <div className="mb-4">
          <CTAButton 
            onClick={() => onCTAClick(CTA_LOCATIONS.MAIN_CTA)}
            text="Get Instant Access Now"
          />
        </div>

        {/* Final Urgency Note */}
        <div className="text-sm text-blue-200">
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
