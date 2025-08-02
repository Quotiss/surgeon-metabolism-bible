
import OptimizedContainer from "@/components/ui/OptimizedContainer";
import FooterSection from "@/components/sections/FooterSection";
import { memo } from "react";

const SuccessSupportSection = memo(() => {

  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-slate-50">
      <OptimizedContainer size="md" className="text-center">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center">
            Need Help? support@surgeon-reset.org
          </h2>
        </div>
        
        <div className="flex justify-center mb-8">
          <img 
            src="/lovable-uploads/5c9c527a-e0fc-4762-a8f0-8f53751f9b39.png" 
            alt="30 Days Money Back Guarantee" 
            className="h-20 w-auto"
          />
        </div>
      </OptimizedContainer>
      <FooterSection />
    </section>
  );
});

SuccessSupportSection.displayName = 'SuccessSupportSection';

export default SuccessSupportSection;
