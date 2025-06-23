
import ValueItem from "@/components/ui/ValueItem";
import CountdownTimer from "@/components/ui/CountdownTimer";
import { PRODUCT_PRICING } from "@/lib/constants";
import type { SectionProps } from "@/types/common";

const ProductValueSection = ({ onCTAClick }: SectionProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-10 mb-8">
      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 text-center">
        Everything You're Getting
      </h3>
      
      <div className="space-y-4 sm:space-y-6">
        <ValueItem
          title="Surgeon Metabolism Bible"
          value="$197 value"
          description="Complete 30-day protocol that harnesses your surgical stress patterns for metabolic transformation"
        />

        <ValueItem
          title="Bonus #1: The Surgeon's Grocery Blueprint"
          value="Value: $97"
          description="Done-for-you shopping list organized for maximum efficiency"
        />

        <ValueItem
          title="Bonus #2: The Surgical Stress Supplement Stack"
          value="Value: $147"
          description="Exact supplementation protocol elite surgeons use to amplify results"
        />

        <div className="text-center mt-6 mb-6">
          <p className="text-lg sm:text-xl font-bold text-slate-900 mb-4">
            Total Package Value: <span className="line-through opacity-75">${PRODUCT_PRICING.originalValue}</span>
          </p>
          
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-6">
            <p className="text-sm font-bold text-blue-800 mb-3 uppercase tracking-wide">
              🎯 Exclusive Early-Adopter Pricing
            </p>
            <p className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-3">
              Complete Package: $27
            </p>
            <p className="text-sm text-slate-700 font-medium leading-relaxed">
              This is a limited-time introductory price for early adopters only. 
              Once we reach our target number of surgeons, the price will permanently increase to $97.
            </p>
          </div>
        </div>

        <CountdownTimer />
        
        <div className="bg-slate-100 rounded-lg p-4 text-center">
          <p className="text-sm font-medium text-slate-700 mb-1">
            ⚠️ Warning: This early-adopter pricing will NOT be available again
          </p>
          <p className="text-xs text-slate-600">
            We're limiting this special price to the first 500 surgeons only
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductValueSection;
