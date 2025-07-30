
import { CheckCircle, ChevronDown } from "lucide-react";
import OptimizedContainer from "@/components/ui/OptimizedContainer";

const ThankYouHeroSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-blue-600">
      <OptimizedContainer size="md" className="text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Welcome to the Surgeon Metabolism Bible!
          </h1>
          
          {/* Download confirmation - separate div */}
          <div className="flex items-center justify-center mb-8">
            <CheckCircle className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
            <p className="text-base sm:text-lg text-white font-bold">
              Your download is on its way to your email.
            </p>
          </div>
          
          {/* First subheader paragraph */}
          <div className="mb-6">
            <p className="text-sm sm:text-base text-white max-w-4xl mx-auto leading-relaxed">
              You've just joined a <span className="font-bold">select group</span> of <span className="font-bold">high-performing surgeons</span> who've committed to <span className="font-bold">reclaiming their physical edge</span>, reversing years of <span className="font-bold">metabolic chaos</span>, and investing in the <span className="font-bold">most powerful version of themselves</span>.
            </p>
          </div>
          
          {/* Second subheader paragraph */}
          <div className="mb-8">
            <p className="text-sm sm:text-base text-white max-w-4xl mx-auto leading-relaxed">
              But before you dive in, <span className="font-bold">read this carefully</span> — it may be the difference between <span className="font-bold">the guilt of another wasted investment</span>, and a <span className="font-bold">complete transformation</span> of the surgeon and man you're meant to be.
            </p>
          </div>
          
          {/* Scroll down indicator */}
          <div className="flex justify-center">
            <ChevronDown className="h-6 w-6 text-white/70 animate-pulse" />
          </div>
        </div>
      </OptimizedContainer>
    </section>
  );
};

export default ThankYouHeroSection;
