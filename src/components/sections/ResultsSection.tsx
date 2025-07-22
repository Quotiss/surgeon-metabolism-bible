
import LazySection from "@/components/LazySection";
import ProductValueSection from "@/components/sections/ProductValueSection";
import { CTA_LOCATIONS } from "@/lib/constants";
import type { SectionProps } from "@/types/common";

const ResultsSection = ({
  onCTAClick
}: SectionProps) => {
  return (
    <LazySection className="mobile-section-padding bg-gradient-to-b from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-5xl">
        <ProductValueSection onCTAClick={onCTAClick} />
      </div>
    </LazySection>
  );
};

export default ResultsSection;
