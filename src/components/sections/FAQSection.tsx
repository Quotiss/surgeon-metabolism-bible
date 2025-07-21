
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import LazySection from "@/components/LazySection";
import { CTA_LOCATIONS } from "@/lib/constants";
import type { SectionProps } from "@/types/common";

const FAQSection = ({ onCTAClick }: SectionProps) => {
  const faqs = [
    {
      question: "What if this doesn't work for me?",
      answer: "You're covered by our 30-day money-back guarantee. If you don't see improved energy and metabolic function, email us for a full refund. No questions, no hassles."
    },
    {
      question: "How quickly will I see results?",
      answer: "Most surgeons notice increased energy within the first week. Significant metabolic improvements typically occur within 2-3 weeks as your stress physiology rebalances. Remember, this works WITH your surgical schedule, not against it."
    },
    {
      question: "I've never followed a \"protocol\" before - is this complicated?",
      answer: "Absolutely not. This is designed for surgeons who have zero extra time. Everything is laid out step-by-step with clear instructions. If you can follow a surgical protocol, this will be simple."
    },
    {
      question: "Will this interfere with my demanding schedule?",
      answer: "That's exactly why this exists. Unlike generic programs that require meal prep and gym time, this protocol is built around your erratic schedule and high-stress environment. It works because of your surgical lifestyle, not despite it."
    },
    {
      question: "Is this just another restrictive diet?",
      answer: "No. This isn't about restriction - it's about optimization. You'll learn how to work with your stress hormones and circadian disruption, not fight against them. Most surgeons find this easier than what they were doing before."
    }
  ];

  return (
    <LazySection className="py-8 sm:py-12 md:py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Need help? support@surgeon-reset.org
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
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-6 text-xl font-bold mb-4 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border-2 border-blue-500 h-auto"
          >
            Get Instant Access Now →
          </Button>
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/36484096-74f6-40bb-988c-86af5ddd059a.png" 
              alt="30 Days Money Back Guarantee" 
              className="w-24 h-24 object-contain"
            />
          </div>
        </div>
      </div>
    </LazySection>
  );
};

export default FAQSection;
