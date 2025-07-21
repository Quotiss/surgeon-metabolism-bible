
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SecurityBadge from "@/components/ui/SecurityBadge";
import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { POLAR_UPSELL_CHECKOUT_LINK } from "@/lib/constants";
import { usePolarCheckout } from "@/hooks/usePolarCheckout";

const ValueStackCTA = memo(() => {
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

  const handleCTAClick = useCallback(async () => {
    console.log("Upsell CTA clicked");
    await createCheckout(POLAR_UPSELL_CHECKOUT_LINK);
  }, [createCheckout]);

  const handleSkipClick = useCallback(() => {
    navigate('/success');
  }, [navigate]);

  return (
    <div className="text-center mb-8">
      <div className="relative inline-block">
        <div className="absolute inset-0 bg-blue-400 rounded-lg blur-lg opacity-30 animate-pulse"></div>
        <Button 
          onClick={handleCTAClick}
          size="lg" 
          className="relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-xl px-12 py-6 h-auto font-bold transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border-2 border-blue-500"
        >
          <span className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            SECURE MY SUCCESS → $97
          </span>
        </Button>
      </div>
      
      <SecurityBadge className="mt-4 mb-4" />
      
      <div className="mt-4">
        <button 
          onClick={handleSkipClick}
          className="text-slate-500 hover:text-slate-700 text-sm underline transition-colors"
        >
          No thanks, I'll risk it
        </button>
      </div>
    </div>
  );
});

ValueStackCTA.displayName = 'ValueStackCTA';

export default ValueStackCTA;
