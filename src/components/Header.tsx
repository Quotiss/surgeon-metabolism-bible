
import { Button } from "@/components/ui/button";
import { CTA_LOCATIONS, GUMROAD_CONFIG } from "@/lib/constants";
import type { SectionProps } from "@/types/common";

const Header = ({ onCTAClick }: SectionProps) => {
  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-0 z-40 header-nav">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="font-bold text-base sm:text-lg md:text-xl text-slate-900 truncate pr-4">
            Surgeon Metabolism Bible
          </div>
          <Button 
            onClick={() => onCTAClick(CTA_LOCATIONS.HEADER)}
            className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-xs sm:text-sm md:text-base px-3 sm:px-4 py-2 transition-all duration-300 ease-out touch-manipulation hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg active:scale-95 active:translate-y-0 transform"
          >
            Get Access Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
