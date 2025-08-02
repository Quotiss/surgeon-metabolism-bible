import OptimizedContainer from "@/components/ui/OptimizedContainer";
import HighlightedText from "@/components/ui/HighlightedText";
import CTAButton from "@/components/cta/CTAButton";
import CTASecurity from "@/components/cta/CTASecurity";
import { Check } from "lucide-react";
import { POLAR_UPSELL_CHECKOUT_LINK } from "@/lib/constants";
import { usePolarCheckout } from "@/hooks/usePolarCheckout";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const ThankYouSolutionSection = () => {
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
    console.log("Thank You Solution CTA clicked");
    await createCheckout(POLAR_UPSELL_CHECKOUT_LINK);
  }, [createCheckout]);
  return (
    <section className="py-16 bg-white">
      <OptimizedContainer size="md">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Introducing the 14-Day Surgeon Metabolism Bible Implementation System
          </h2>
        </div>
        
        <div className="text-lg text-gray-700 space-y-4 max-w-4xl mx-auto text-left">
          <p>This isn't more information.</p>
          
          <p>It's a <HighlightedText>100% Done-For-You frictionless tool</HighlightedText> that translates the knowledge contained in the Surgeon Metabolism Bible into an <HighlightedText>exact day-by-day execution system</HighlightedText>.</p>
          
          <p>No second-guessing your decisions wondering, "am I doing this the right way?"</p>
          
          <p>No added decision-fatigue from stressing over what to eat, when, and how to maximize efficiency.</p>
          
          <p>The 14-Day Surgeon Metabolism Bible Implementation System contains the exact steps you need to reclaim your energy and reveal your physique both <HighlightedText>Faster and Quicker</HighlightedText>.</p>
          
          <div className="my-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="font-bold text-xl">
                  <HighlightedText>Every meal mapped.</HighlightedText>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="font-bold text-xl">
                  <HighlightedText>Every routine optimized.</HighlightedText>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="font-bold text-xl">
                  <HighlightedText>Every decision made.</HighlightedText>
                </span>
              </div>
            </div>
          </div>
          
          <p><HighlightedText>Built for speed, designed for certainty</HighlightedText>, and made to work even on your worst weeks.</p>
          
          <p>Instead of spending precious hours and brainpower putting your knowledge into action, I've done it all for you here.</p>
          
          <p className="font-bold text-xl">
            <HighlightedText>Absolutely zero guesswork.</HighlightedText>
          </p>
          
          <div className="flex justify-center mt-8">
            <div className="w-full max-w-md space-y-4">
              <CTAButton
                onClick={handleCTAClick}
                variant="primary"
                size="large"
              >
                Yes! I Want To Implement Now
              </CTAButton>
              
              <div className="text-center space-y-1">
                <div className="text-3xl font-bold text-blue-600">
                  Limited One-Time Offer
                </div>
                <div className="text-sm text-slate-600">
                  (Offer expires once you leave this page)
                </div>
                <div className="text-3xl font-bold text-blue-600">
                  ONLY $97
                </div>
                <div className="text-sm text-slate-600">
                  ($400.00 Worth Of Value)
                </div>
              </div>
              
              <CTASecurity />
              
              <div className="mt-4 text-center">
                <a 
                  href="/success"
                  className="text-sm text-slate-500 hover:text-slate-700 underline transition-colors"
                >
                  No thanks, I'll spend the energy to implement by myself
                </a>
              </div>
            </div>
          </div>
        </div>
      </OptimizedContainer>
    </section>
  );
};

export default ThankYouSolutionSection;