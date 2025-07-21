
import MobileOptimizedSection from "@/components/ui/MobileOptimizedSection";
import MobileCTAButton from "@/components/ui/MobileCTAButton";
import MobileGuarantee from "@/components/ui/MobileGuarantee";
import { CTA_LOCATIONS } from "@/lib/constants";
import type { SectionProps } from "@/types/common";

const GuaranteeSection = ({ onCTAClick }: SectionProps) => {
  return (
    <MobileOptimizedSection background="white" padding="md">
      {/* Guarantee Badge */}
      <div className="flex justify-center mb-6 sm:mb-8">
        <img 
          src="/lovable-uploads/d8d4eb4c-c865-49cb-9cca-9201328face7.png" 
          alt="30 Days Money Back Guarantee" 
          className="w-32 h-32 sm:w-48 sm:h-48 object-contain"
        />
      </div>

      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 leading-tight text-slate-900 text-center px-2">
        Your purchase is backed by our{" "}
        <span className="text-blue-600 font-black">
          UNCONDITIONAL MONEY BACK GUARANTEE
        </span>
      </h2>

      <div className="text-left max-w-3xl mx-auto space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 text-slate-700 px-2">
        <p>
          Before making a serious commitment like this to take your health and performance to a whole new level, 
          I'd like to know what I'm buying and that it's backed by a solid money-back guarantee.
        </p>
        
        <p>
          Even though it's only $27, you worked for that money and it counts.
        </p>
        
        <p>Here's what I've arranged:</p>
        
        <p>
          Purchase the Surgeon Metabolism Bible, run the included 24-hour Surgeon Shift Protocol, 
          read the modules, but more importantly, apply what I give you in there.
        </p>
        
        <p>
          If you're not happy for any reason at all, shoot us an email at{" "}
          <span className="font-semibold text-blue-600">support@surgeon-reset.org</span>{" "}
          and request a refund within 30 days.
        </p>
        
        <p className="text-lg sm:text-xl font-semibold">
          We'll refund you the $27, no questions asked.
        </p>
        
        <p className="font-bold text-blue-600 text-lg">Sound fair enough?</p>
        
        <p>
          Hit the button below to secure your copy of the Surgeon Metabolism Bible today!
        </p>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-slate-50/80 to-blue-50/60 border-2 border-blue-200/50 rounded-2xl p-6 sm:p-8 mb-6 mx-2 sm:mx-0">
        <p className="text-sm sm:text-base font-bold text-amber-700 mb-6 tracking-wide uppercase text-center">
          ⚡ Limited to First 500 Surgeons Only
        </p>
        
        <div className="flex flex-col items-center gap-6 max-w-md mx-auto">
          <MobileCTAButton 
            onClick={() => onCTAClick(CTA_LOCATIONS.MAIN_CTA)}
            size="large"
          />
          
          <MobileGuarantee showFullDetails={false} />
        </div>
      </div>
    </MobileOptimizedSection>
  );
};

export default GuaranteeSection;
