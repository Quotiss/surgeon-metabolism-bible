import LazySection from "@/components/LazySection";
import ProductValueSection from "@/components/sections/ProductValueSection";
import { CTA_LOCATIONS } from "@/lib/constants";
import type { SectionProps } from "@/types/common";
const ResultsSection = ({
  onCTAClick
}: SectionProps) => {
  return <LazySection className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 max-w-4xl">
        

        <ProductValueSection onCTAClick={onCTAClick} />
      </div>
    </LazySection>;
};
export default ResultsSection;