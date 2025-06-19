
import ValueItem from "@/components/ui/ValueItem";

const ProductValueSection = () => {
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
      </div>

      <div className="text-center mt-8 p-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg text-white">
        <p className="text-lg sm:text-xl font-bold mb-2">
          Total Package Value: <span className="line-through opacity-75">$441</span> → Yours for $27
        </p>
      </div>
    </div>
  );
};

export default ProductValueSection;
