import { memo, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Target } from 'lucide-react';
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
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 rounded-full flex items-center justify-center">
              <Target className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
            Everything you need to fast-track your results from the Surgeon Metabolism Bible
          </h2>
          
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            You already have the information. The implementation system makes sure you maximize its value. If you're serious about reclaiming your energy, revealing the physique you've painstakingly crafted, and running laps around your peers in the OR — this system is your edge.
          </p>

          {/* Limited time offer highlight */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
            <p className="text-red-700 font-semibold text-base">
              This is a one-time offer, only available right now. Once you leave this page, it's gone.
            </p>
          </div>

          {/* Main CTA Button */}
          <div className="mb-3">
            <CTAButton
              onClick={handleUpsellClick}
              variant="primary"
              size="large"
              loading={loading}
              className="text-sm sm:text-base"
            >
              Yes! I want the 14-Day Implementation System →
            </CTAButton>
          </div>

          {/* Description text */}
          <p className="text-base text-slate-600 mb-4 font-normal">
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