
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import OptimizedContainer from "@/components/ui/OptimizedContainer";

const ThankYouCTASection = () => {
  const handleUpsellClick = () => {
    // TODO: Integrate with Polar modal for upsell
    console.log("Upsell CTA clicked");
  };

  return (
    <section className="py-12 bg-slate-900 text-white">
      <OptimizedContainer size="md" className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          Complete Your Transformation Today
        </h2>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
          Don't let this opportunity slip away. Join the elite surgeons who have the complete system 
          for effortless metabolic optimization.
        </p>
        
        <Button 
          onClick={handleUpsellClick}
          size="lg" 
          className="bg-blue-600 hover:bg-blue-700 text-white text-xl px-12 py-6 h-auto font-bold mb-6 transform hover:scale-105 transition-all duration-300"
        >
          Yes, Upgrade My System Now - $97
        </Button>
        
        <div className="flex items-center justify-center space-x-4 text-sm text-slate-400">
          <div className="flex items-center">
            <CheckCircle className="h-4 w-4 mr-2" />
            <span>Instant Access</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-4 w-4 mr-2" />
            <span>One-Time Payment</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-4 w-4 mr-2" />
            <span>Complete System</span>
          </div>
        </div>
      </OptimizedContainer>
    </section>
  );
};

export default ThankYouCTASection;
