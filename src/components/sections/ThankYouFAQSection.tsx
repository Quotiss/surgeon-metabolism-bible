import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import LazySection from "@/components/LazySection";
import TrustBadge from "@/components/ui/TrustBadge";
import { CTA_LOCATIONS } from "@/lib/constants";
import type { SectionProps } from "@/types/common";

const ThankYouFAQSection = ({
  onCTAClick
}: SectionProps) => {
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
          <Button 
            onClick={() => onCTAClick?.(CTA_LOCATIONS.FAQ_CTA)} 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-4 sm:px-8 sm:py-5 md:px-12 md:py-6 text-lg sm:text-xl font-bold mb-4 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border-2 border-blue-500 h-auto w-full sm:w-auto max-w-md sm:max-w-none mx-auto"
          >
            Yes! I Want To Implement Now →
          </Button>
          
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
        </div>
      </div>
    </LazySection>
  );
};

export default ThankYouFAQSection;