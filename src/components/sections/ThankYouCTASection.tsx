import { memo, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OptimizedContainer from "@/components/ui/OptimizedContainer";
import CTAButton from "@/components/cta/CTAButton";
import { usePolarCheckout } from "@/hooks/usePolarCheckout";
import { POLAR_UPSELL_CHECKOUT_LINK } from "@/lib/constants";

const ThankYouCTASection = memo(() => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  const handleUpsellSuccess = useCallback(() => {
    // Track Facebook Pixel Purchase event
    window.fbq?.("track", "Purchase", {
      currency: "USD",
      value: 97, // Upsell price
    });
    setLoading(false);
  }, []);

  const { createCheckout } = usePolarCheckout({
    onSuccess: handleUpsellSuccess,
    onError: () => setLoading(false)
  });

  const handleUpsellClick = useCallback(async () => {
    setLoading(true);
    try {
      await createCheckout(POLAR_UPSELL_CHECKOUT_LINK);
    } catch (error) {
      console.error('Checkout failed:', error);
      setLoading(false);
    }
  }, [createCheckout]);

  const handleSkipClick = useCallback(() => {
    navigate('/success');
  }, [navigate]);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <OptimizedContainer size="md">
        <div className="text-center max-w-2xl mx-auto">
          {/* Space reserved for limited time offer text */}
          <div className="mb-8 min-h-[2rem]">
            {/* Space intentionally left for future limited time offer messaging */}
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
            Join The Elite 5% Who Get Results Fast
          </h2>
          
          <p className="text-lg text-slate-600 mb-12 leading-relaxed">
            Most surgeons struggle for months trying to figure out implementation. 
            You can skip the trial and error phase entirely.
          </p>

          {/* Main CTA Button */}
          <div className="mb-6">
            <CTAButton
              onClick={handleUpsellClick}
              variant="primary"
              size="large"
              loading={loading}
            >
              Yes! I want the 14-Day Implementation System →
            </CTAButton>
          </div>

          {/* Description text */}
          <p className="text-base text-slate-600 mb-8 font-normal">
            Get instant access to the implementation system designed for maximum clarity, faster results, and zero guesswork.
          </p>

          {/* No thanks link */}
          <button
            onClick={handleSkipClick}
            className="text-slate-500 hover:text-slate-700 underline text-sm transition-colors duration-200"
          >
            No Thanks, I'll risk my results and figure it out myself
          </button>
        </div>
      </OptimizedContainer>
    </section>
  );
});

ThankYouCTASection.displayName = 'ThankYouCTASection';

export default ThankYouCTASection;