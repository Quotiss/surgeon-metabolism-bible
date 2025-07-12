
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
              Complete metabolic blueprint that converts your surgical stress into the competitive advantage that separates elite performers from burnt-out colleagues
            </p>
            <p className="text-sm text-blue-600 font-bold mt-1">Value: $297</p>
          </div>
        </div>

        <div className="flex items-start space-x-4 p-4">
          <Gift className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h4 className="font-bold text-xl text-slate-900 mb-2">
              Bonus #1: The Surgeon's Grocery Blueprint
            </h4>
            <p className="text-slate-700">
              Complete done-for-you grocery blueprint that eliminates decision fatigue and maximizes metabolic efficiency for busy surgeons
            </p>
            <p className="text-sm text-green-600 font-bold mt-1">Value: $127</p>
          </div>
        </div>

        <div className="flex items-start space-x-4 p-4">
          <Pill className="h-8 w-8 text-purple-600 flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h4 className="font-bold text-xl text-slate-900 mb-2">
              Bonus #2: The Surgical Stress Supplement Stack
            </h4>
            <p className="text-slate-700">
              The precise supplement stack elite surgeons use to accelerate fat burning, enhance recovery, and maintain peak performance under extreme stress
            </p>
            <p className="text-sm text-purple-600 font-bold mt-1">Value: $197</p>
          </div>
        </div>
      </div>

      {/* Integrated Price + Timer + CTA Section */}
      <div className="bg-gray-100 rounded-xl p-6 text-center border border-slate-200">
        {/* Price Comparison */}
        <div className="mb-4">
          <div className="space-y-2 mb-4">
            <p className="text-lg text-slate-700">
              Total Package Value: <span className="font-semibold text-slate-900">$621</span>
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

        {/* Main CTA Button */}
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

        {/* Upsell Teaser */}
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-4">
          <p className="text-sm text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
            🔒 Want faster, frictionless results? A limited number of surgeons will get the chance to upgrade to the <span className="font-bold text-blue-600">Full Precision Meal Protocol</span> after checkout - includes done-for-you meal plans and essential metabolic execution tools top surgeons use to supercharge results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductValueSection;
