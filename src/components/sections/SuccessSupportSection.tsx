
import { Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import OptimizedContainer from "@/components/ui/OptimizedContainer";
import GuaranteeSection from "@/components/ui/GuaranteeSection";
import { memo, useCallback } from "react";

const SuccessSupportSection = memo(() => {
  const handleSupportClick = useCallback(() => {
    window.location.href = "mailto:noahgordon2020@yahoo.com?subject=Support Request - Order Confirmation";
  }, []);

  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-slate-50">
      <OptimizedContainer size="md" className="text-center">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Need Help? We're Here for You
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Your success is our priority. If you have any questions or need assistance, don't hesitate to reach out.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 max-w-2xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <MessageCircle className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-slate-900 mb-4">
            Get Support Within 24 Hours
          </h3>
          
          <p className="text-slate-600 mb-6 leading-relaxed">
            Whether you have technical questions, need clarification on protocols, or want guidance on implementation, our support team is ready to help.
          </p>
          
          <Button 
            onClick={handleSupportClick}
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 h-auto font-semibold transform hover:scale-105 transition-all duration-300"
          >
            <Mail className="h-5 w-5 mr-2" />
            Contact Support
          </Button>
        </div>

        <GuaranteeSection showLifetimeAccess={true} />

        <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-xl max-w-2xl mx-auto">
          <p className="text-lg font-semibold text-green-800 mb-2">
            🎉 Congratulations on Taking Action!
          </p>
          <p className="text-green-700">
            You've joined the elite 5% of surgeons who prioritize their health and energy. Your patients, colleagues, and family will notice the difference.
          </p>
        </div>
      </OptimizedContainer>
    </section>
  );
});

SuccessSupportSection.displayName = 'SuccessSupportSection';

export default SuccessSupportSection;
