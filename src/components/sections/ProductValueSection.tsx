
import ValueItem from "@/components/ui/ValueItem";
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

        <div className="text-center mt-6">
          <p className="text-lg sm:text-xl font-bold text-slate-900">
            Total Package Value: <span className="line-through opacity-75">${PRODUCT_PRICING.originalValue}</span> → Yours for <span className="text-blue-600">${PRODUCT_PRICING.currentPrice}</span>
          </p>
        </div>
      </div>

      <div className="mt-8">
        <div className="text-center mt-4">
          <p className="text-sm font-bold italic text-slate-900 mt-1">
            Price increases to ${PRODUCT_PRICING.futurePrice} in 24 hours
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductValueSection;
