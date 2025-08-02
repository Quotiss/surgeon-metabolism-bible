import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import LazySection from "@/components/LazySection";
import TrustBadge from "@/components/ui/TrustBadge";
import CTAButton from "@/components/cta/CTAButton";
import { POLAR_UPSELL_CHECKOUT_LINK } from "@/lib/constants";
import { usePolarCheckout } from "@/hooks/usePolarCheckout";
import { useCallback } from "react";

const ThankYouFAQSection = () => {
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
    console.log("Thank You FAQ CTA clicked");
    await createCheckout(POLAR_UPSELL_CHECKOUT_LINK);
  }, [createCheckout]);
  const faqs = [{
    question: "Is this different from the Surgeon Metabolism Bible I just bought?",
    answer: "Yes — completely. The Bible gives you the playbook; this gives you the execution. It's the step-by-step plan that ensures you lock in your results. Faster, easier, and with more certainty."
  }, {
    question: "What if I don't have time to go through another program?",
    answer: "You don't need more time, you need less friction. This implementation system saves you countless precious hours trying to integrate the value you just received in the Surgeon Metabolism Bible. It's built for surgeons with chaotic schedules who prioritize efficiency."
  }, {
    question: "How do I get access?",
    answer: "Instant Digital Delivery. As soon as you complete your order, you'll get instant access to all the tools via email."
  }];

  return (
    <LazySection className="py-8 sm:py-12 md:py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Need help? <span className="text-blue-600">support@surgeon-reset.org</span>
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-0">
                <AccordionTrigger className="text-left text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 px-6 py-4 rounded-lg [&[data-state=open]]:rounded-b-none transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="bg-white text-slate-900 px-6 py-4 rounded-b-lg border border-t-0 border-blue-200">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Button Section */}
        <div className="text-center">
          <div className="max-w-md mx-auto">
            <CTAButton
              onClick={handleCTAClick}
              variant="primary"
              size="large"
            >
              Yes! I Want To Implement Now
            </CTAButton>
          </div>
          
          <div className="text-center space-y-1 mt-4">
            <div className="text-3xl font-bold text-blue-600">
              Limited One-Time Offer
            </div>
            <div className="text-sm text-slate-600">
              (Offer expires once you leave this page)
            </div>
            <div className="text-3xl font-bold text-blue-600">
              ONLY $97
            </div>
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
      </div>
    </LazySection>
  );
};

export default ThankYouFAQSection;