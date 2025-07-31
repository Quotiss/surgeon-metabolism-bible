import { Shield } from "lucide-react";
import OptimizedContainer from "@/components/ui/OptimizedContainer";

const ThankYouGuaranteeSection = () => {
  return (
    <section className="py-16 bg-white">
      <OptimizedContainer size="md" className="text-center">
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
            <Shield className="h-12 w-12 text-green-600" />
          </div>
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
          Backed by the same 30-Day Guarantee
        </h2>
      </OptimizedContainer>
    </section>
  );
};

export default ThankYouGuaranteeSection;