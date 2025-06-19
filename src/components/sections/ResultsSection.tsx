
import LazySection from "@/components/LazySection";
import ProductValueSection from "@/components/sections/ProductValueSection";
import CTAButton from "@/components/ui/CTAButton";
import { CTA_LOCATIONS } from "@/lib/constants";
import type { SectionProps } from "@/types/common";

const ResultsSection = ({ onCTAClick }: SectionProps) => {
  return (
    <LazySection className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
            Get the Complete Surgeon Metabolism Bible Today
          </h2>
        </div>

        <ProductValueSection onCTAClick={onCTAClick} />
        <CTAButton 
          onClick={() => onCTAClick(CTA_LOCATIONS.MAIN_CTA)}
          text="Get Instant Access Now"
        />
      </div>
    </LazySection>
  );
};

export default ResultsSection;
