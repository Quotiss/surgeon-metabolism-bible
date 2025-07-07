
import { CheckCircle, Shield, Zap, AlertTriangle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import OptimizedContainer from "@/components/ui/OptimizedContainer";
import GuaranteeSection from "@/components/ui/GuaranteeSection";
import { POLAR_UPSELL_CHECKOUT_LINK } from "@/lib/constants";
import { usePolarCheckout } from "@/hooks/usePolarCheckout";
import { useNavigate } from "react-router-dom";
import { memo, useCallback } from "react";

const ThankYouCTASection = memo(() => {
  const navigate = useNavigate();

  const handleUpsellSuccess = useCallback(() => {
    window.fbq?.("track", "Purchase", {
      currency: "USD",
      value: 97,
    });
  }, []);

  const { createCheckout } = usePolarCheckout({
    onSuccess: handleUpsellSuccess
  });

  const handleUpsellClick = useCallback(async () => {
    console.log("Upsell CTA clicked");
    await createCheckout(POLAR_UPSELL_CHECKOUT_LINK);
  }, [createCheckout]);

  const handleSkipClick = useCallback(() => {
    navigate('/success');
  }, [navigate]);

  return (
    <section className="py-16 bg-white">
      <OptimizedContainer size="md" className="text-center">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Don't Risk Becoming Another Statistic
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
            You're one decision away from joining the <span className="text-blue-600 font-bold">5% who execute flawlessly</span> or joining the majority who wonder why they never achieve results
          </p>
        </div>
        
        <div className="mb-12">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-blue-400 rounded-xl blur-lg opacity-20"></div>
            <Button 
              onClick={handleUpsellClick}
              size="lg" 
              className="relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-2xl px-16 py-8 h-auto font-bold mb-8 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-blue-500/20 border border-blue-500"
            >
              <span className="flex items-center gap-3">
                <Zap className="h-6 w-6 text-yellow-400" />
                JOIN THE ELITE 5% → $97
                <Zap className="h-6 w-6 text-yellow-400" />
              </span>
            </Button>
          </div>
          
          <div className="mt-4">
            <button 
              onClick={handleSkipClick}
              className="text-slate-500 hover:text-slate-700 text-sm underline transition-colors"
            >
              No thanks, I'll risk it
            </button>
          </div>
        </div>

        <GuaranteeSection className="text-lg mb-8" />

        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-lg text-slate-600 leading-relaxed">
            Don't let implementation failure rob you of the transformation you deserve
          </p>
        </div>

        <div className="bg-gradient-to-r from-slate-100 to-slate-200 border-2 border-slate-300 rounded-xl p-8 max-w-2xl mx-auto mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
              <AlertTriangle className="h-6 w-6 text-amber-600" />
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              ⚠️ THIS OFFER EXPIRES WHEN YOU LEAVE
            </h3>
            <p className="text-lg text-slate-700 font-semibold mb-4">
              Don't join the 97% who hesitate and never get results
            </p>
            <p className="text-base text-slate-600">
              Close this page and this opportunity disappears forever
            </p>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8">
          <p className="text-slate-600 mb-4">
            Not ready for the implementation system?
          </p>
          <Button 
            onClick={handleSkipClick}
            variant="outline"
            size="lg"
            className="text-slate-700 border-slate-300 hover:bg-slate-50"
          >
            Continue to Download Instructions
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </OptimizedContainer>
    </section>
  );
});

ThankYouCTASection.displayName = 'ThankYouCTASection';

export default ThankYouCTASection;
