import OptimizedContainer from "@/components/ui/OptimizedContainer";
import CTAButton from "@/components/cta/CTAButton";
import CTASecurity from "@/components/cta/CTASecurity";
import TrustBadge from "@/components/ui/TrustBadge";
import { POLAR_UPSELL_CHECKOUT_LINK } from "@/lib/constants";
import { usePolarCheckout } from "@/hooks/usePolarCheckout";
import { useCallback } from "react";

const ThankYouGuaranteeSection = () => {
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
    console.log("Thank You Guarantee CTA clicked");
    await createCheckout(POLAR_UPSELL_CHECKOUT_LINK);
  }, [createCheckout]);

  return (
    <section className="py-16 bg-white">
      <OptimizedContainer size="md" className="text-center">
        <div className="flex justify-center mb-8">
          <img 
            src="/lovable-uploads/9b576cca-496d-4e1a-844c-97334c1c20d8.png" 
            alt="30 Days Money Back Guarantee" 
            className="w-40 h-auto sm:w-48" 
          />
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
          This purchase is also covered under our <span className="text-blue-600">UNCONDITIONAL MONEY BACK GUARANTEE</span>
        </h2>

        <div className="max-w-2xl mx-auto text-lg text-slate-700 leading-relaxed mb-8 space-y-4 text-left">
          <p>
            Even though this is just a $97 add-on, I want you to feel 100% comfortable with your purchase.
          </p>
          
          <p>
            If you read through, utilize, and follow through with the 14-day implementation system and don't feel noticably more energized, mentally sharp, or in control of your vitality — just email <span className="text-blue-600">surgeonmetabolismbible@gmail.com</span> within 30 days.
          </p>
          
          <p>
            We'll refund you, no questions asked.
          </p>
          
          <p>
            No risk. No pressure. Just results.
          </p>
          
          <p className="font-semibold">
            Hit the button below to secure your limited one-time offer of the 14-Day Surgeon Metabolism Bible Implementation System — elite surgeons don't leave their results up to chance.
          </p>
        </div>

        <div className="space-y-4 max-w-md mx-auto">
          <CTAButton
            onClick={handleCTAClick}
            variant="primary"
            size="large"
          >
            Yes! I Want To Implement Now
          </CTAButton>
          
          <CTASecurity />
          
          <TrustBadge size="small" />
          
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/e7446cbf-9df3-4a1f-8e32-156838308a16.png" 
              alt="30 Days Money Back Guarantee" 
              className="h-12" 
            />
          </div>
          
          <div className="mt-4 text-center">
            <a 
              href="/success"
              className="text-sm text-slate-600 hover:text-slate-800 underline transition-colors"
            >
              No thanks, I'll spend the energy to implement by myself
            </a>
          </div>
        </div>
      </OptimizedContainer>
    </section>
  );
};

export default ThankYouGuaranteeSection;