import { Button } from "@/components/ui/button";
import { CheckCircle, BookOpen, Gift, Pill, Star } from "lucide-react";
import { PRODUCT_PRICING, CTA_LOCATIONS } from "@/lib/constants";
import type { SectionProps } from "@/types/common";
const ProductValueSection = ({
  onCTAClick
}: SectionProps) => {
  return <div className="bg-white border-2 border-blue-200 rounded-xl shadow-xl p-6 sm:p-8 md:p-10 mb-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
          Join The <span className="text-blue-600 font-bold">Elite Surgeons</span> Who <span className="bg-blue-600 text-white px-1 py-0.5 rounded">Invest In Themselves</span>
        </h2>
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
          Here's What You Get With the <span className="text-blue-600">Surgeon Metabolism Bible</span>...
        </h3>
        <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
          The <span className="font-bold">exact tools</span> and protocols you need to effortlessly reveal muscle, reclaim your mental edge, dominate your peers, and take back control of your internal energy that the system <span className="font-bold">stole from you</span>. Built specifically for those who seek to thrive in surgical chaos, and are <span className="font-bold">committed to excellence</span>.
        </p>
      </div>

      {/* Product Components */}
      <div className="grid gap-6 mb-8">
        <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <BookOpen className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h4 className="font-bold text-xl text-blue-600 mb-2">
              Surgeon Metabolism Bible 5-module eBook
            </h4>
            <p className="text-slate-700 mb-3">
              Comprehensive 5-module eBook covering the exact metabolic protocols to regain your competitive edge WITHOUT uprooting your life
            </p>
            <div className="flex items-start space-x-2 mb-3">
              <Star className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-slate-700 font-medium">
                Includes the 24-Hour Surgeon-Shift Protocol for a taste of the system that gets results in ONE DAY.
              </p>
            </div>
            <p className="text-sm text-blue-600 font-bold">Value: $297</p>
          </div>
        </div>

        <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <Gift className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h4 className="font-bold text-xl text-blue-600 mb-2">
              Quick Start Bonus #1: The Surgeon's Grocery Blueprint
            </h4>
            <p className="text-slate-700 mb-3">
              MUST HAVE done-for-you shopping list designed for fast-moving surgeons who don't have any time to waste. Designed for maximum efficiency.
            </p>
            <p className="text-sm text-blue-600 font-bold">Value: $97</p>
          </div>
        </div>

        <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <Pill className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h4 className="font-bold text-xl text-blue-600 mb-2">
              Quick Start Bonus #2: The Surgical Stress Supplement Stack
            </h4>
            <p className="text-slate-700 mb-3">
              Revealing the exact supplementation protocol elite surgeons use to amplify their results and maximize performance. Designed specifically for your stress physiology and recovery demands.
            </p>
            <p className="text-sm text-blue-600 font-bold">Value: $147</p>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-slate-50 rounded-xl p-6 text-center border border-slate-200">
        <div className="mb-6">
          <div className="space-y-3 mb-6">
            <p className="text-lg text-slate-600">
              Total Package Value: <span className="font-bold text-slate-900">$521</span>
            </p>
            <div className="border-t border-slate-200 pt-4">
              <p className="text-2xl sm:text-3xl font-black text-blue-600 mb-2">
                ONLY: <span className="line-through text-slate-500 mr-2">$97</span> $27
              </p>
              <p className="text-lg font-bold text-green-600 mb-2">
                (Save $70 TODAY)
              </p>
              <p className="text-sm text-amber-600 font-medium">
                Discount limited to first 500 surgeons only
              </p>
            </div>
          </div>
        </div>

        {/* Main CTA Button */}
        <div className="mb-6">
          <Button onClick={() => onCTAClick(CTA_LOCATIONS.MAIN_CTA)} size="lg" className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-base sm:text-lg md:text-xl px-8 sm:px-12 md:px-16 py-4 sm:py-5 h-auto font-bold w-full sm:w-auto transition-all duration-300 ease-out touch-manipulation shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 active:scale-95 active:translate-y-0 transform" style={{
          WebkitTapHighlightColor: 'transparent',
          minHeight: '48px'
        }}>
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
        
      </div>
    </div>;
};
export default ProductValueSection;