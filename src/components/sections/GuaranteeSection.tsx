
import MobileOptimizedSection from "@/components/ui/MobileOptimizedSection";
import CTAButton from "@/components/cta/CTAButton";
import CTASecurity from "@/components/cta/CTASecurity";
import CTAGuarantee from "@/components/cta/CTAGuarantee";
import { CTA_LOCATIONS } from "@/lib/constants";
import type { SectionProps } from "@/types/common";

const GuaranteeSection = ({ onCTAClick }: SectionProps) => {
  return (
    <MobileOptimizedSection background="white" padding="md">
      {/* Guarantee Badge */}
      <div className="flex justify-center mb-8 sm:mb-10">
        <img 
          src="/lovable-uploads/d8d4eb4c-c865-49cb-9cca-9201328face7.png" 
          alt="30 Days Money Back Guarantee" 
          className="w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain"
        />
      </div>

      <h2 className="mobile-h2 mb-8 sm:mb-10 leading-tight text-slate-900 text-center">
        Your purchase is backed by our{" "}
        <span className="text-blue-600 font-black">
          UNCONDITIONAL MONEY BACK GUARANTEE
        </span>
      </h2>

      <div className="text-left max-w-4xl mx-auto mobile-content-spacing mobile-body leading-relaxed mb-8 sm:mb-10 text-slate-700">
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
        
        <p className="mobile-body-large font-semibold">
          We'll refund you the $27, no questions asked.
        </p>
        
        <p className="font-bold text-blue-600 mobile-body-large">Sound fair enough?</p>
        
        <p>
          Hit the button below to secure your copy of the Surgeon Metabolism Bible today!
        </p>
      </div>

      {/* CTA Section */}
      <div className="flex flex-col items-center justify-center">
        <CTAButton 
          onClick={() => onCTAClick(CTA_LOCATIONS.MAIN_CTA)}
          size="large"
        >
          Yes! I Want Instant Access Now
        </CTAButton>
      </div>
    </MobileOptimizedSection>
  );
};

export default GuaranteeSection;
