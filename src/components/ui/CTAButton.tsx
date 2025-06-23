
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { GUARANTEE_TEXT } from "@/lib/constants";
import { memo } from "react";

interface CTAButtonProps {
  onClick: () => void;
  text: string;
  className?: string;
}

const CTAButton = memo(({ onClick, text, className = "" }: CTAButtonProps) => {
  return (
    <Button 
      onClick={onClick}
      size="lg" 
      className={`bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-base sm:text-lg md:text-xl px-8 sm:px-12 md:px-16 py-4 sm:py-5 h-auto font-bold w-full sm:w-auto transition-all duration-300 ease-out touch-manipulation shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 active:scale-95 active:translate-y-0 transform ${className}`}
      style={{
        WebkitTapHighlightColor: 'transparent',
        minHeight: '48px'
      }}
    >
      <span className="flex items-center gap-3 transition-all duration-300 group">
        Get Instant Access
        <span className="transform transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
        $27
      </span>
    </Button>
  );
});

CTAButton.displayName = 'CTAButton';

export default CTAButton;
