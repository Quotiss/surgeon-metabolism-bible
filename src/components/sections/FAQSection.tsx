
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import LazySection from "@/components/LazySection";

const FAQSection = () => {
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
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-200 last:border-b-0">
                <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-blue-600 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </LazySection>
  );
};

export default FAQSection;
