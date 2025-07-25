import { Zap } from "lucide-react";
import MobileOptimizedSection from "@/components/ui/MobileOptimizedSection";
import HighlightedText from "@/components/ui/HighlightedText";

const ProductIntroSection = () => {
  return (
    <MobileOptimizedSection 
      className="product-intro-section"
      padding="md"
      background="white"
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-blue-50/30 via-white to-blue-50/30 p-6 sm:p-8 rounded-2xl border border-blue-100/50 shadow-sm mb-6 sm:mb-8">
          <div className="flex justify-center items-center mb-4 sm:mb-6">
            <Zap className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600 mr-4" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 text-center">
              Introducing the <HighlightedText variant="gradient">Surgeon Metabolism Bible</HighlightedText>
            </h2>
          </div>
        </div>
        
        <div className="prose prose-lg max-w-none text-slate-700">
          <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            The <HighlightedText variant="gradient">Surgeon Metabolism Bible</HighlightedText> contains the exact, proven metabolic protocols elite surgeons are taking advantage of to <strong>supercharge</strong> their physiques, <strong>reclaim</strong> their mental edge, and easily <strong>surpass their colleagues</strong> who stay <strong>too afraid</strong> to make a change — all while integrating seamlessly with your ruthlessly chaotic schedule. <HighlightedText>No BS. Just efficiency</HighlightedText>.
          </p>
          
          <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Organized into <HighlightedText>five unique, actionable modules</HighlightedText>, the <HighlightedText variant="gradient">Surgeon Metabolism Bible</HighlightedText> eBook is specifically designed to show you how to <HighlightedText>harness the surgical stress</HighlightedText> that's keeping you exhausted, out-of-shape, and constantly unmotivated into <HighlightedText>raw metabolic fuel</HighlightedText>, optimizing the biological mechanisms that <strong>shred pounds</strong> in your sleep and turn you into the <strong>commanding</strong> surgeon who has <strong>bulletproof</strong> resiliency, energy, and stamina. Not to mention turning you into a <strong>formidable force in the bedroom</strong>.
          </p>
          
          {/* Quick-Win Paragraph */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 max-w-4xl mx-auto my-6 sm:my-8">
            <div className="flex items-start space-x-4">
              <Zap className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
              <p className="text-lg text-slate-700 leading-relaxed text-left">
                Additionally, you'll get an <span className="font-bold text-blue-600">instant taste</span> of what it feels like to embody the <span className="font-bold">confidence, sharpness, and motivation</span> of <span className="font-bold text-blue-600">the elite surgeon</span> you know you're destined to be. Inside the Surgeon Metabolism Bible, you'll run through the <span className="font-bold text-blue-600">24 Hour Surgeon-Shift Protocol</span> — a step-by-step, time-efficient protocol that guarantees <span className="font-bold">increased mental clarity, vitality, and deep recovery</span> — in <span className="font-bold text-blue-600">only 24 hours</span>
              </p>
            </div>
          </div>
          
          <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            This is the gateway to reclaiming your <HighlightedText>biological superiority</HighlightedText>.
          </p>
        </div>
      </div>
    </MobileOptimizedSection>
  );
};

export default ProductIntroSection;