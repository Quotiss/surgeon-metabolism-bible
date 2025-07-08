
import LazySection from "@/components/LazySection";
import ProductValueSection from "@/components/sections/ProductValueSection";
import { CTA_LOCATIONS } from "@/lib/constants";
import type { SectionProps } from "@/types/common";

const ResultsSection = ({
  onCTAClick
}: SectionProps) => {
  return <LazySection className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
            Get the Complete Surgeon Metabolism Bible Today
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need to copy the <span className="font-bold text-blue-600">proven metabolic protocol</span> elite surgeons are using to reclaim their edge, <span className="font-bold text-blue-600">dominate</span> their competition, and take back <span className="font-bold text-blue-600">control</span>. <span className="font-bold text-blue-600">This isn't for the average person</span> — it's built for those who seek to <span className="font-bold text-blue-600">thrive</span> in surgical chaos.
          </p>
        </div>

        <ProductValueSection onCTAClick={onCTAClick} />
      </div>
    </LazySection>;
};

export default ResultsSection;
