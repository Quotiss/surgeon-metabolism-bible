
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  onClick: () => void;
  text: string;
  className?: string;
}

const CTAButton = ({ onClick, text, className = "" }: CTAButtonProps) => {
  return (
    <div className="text-center">
      <Button 
        onClick={onClick}
        size="lg" 
        className={`bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-base sm:text-lg md:text-xl px-8 sm:px-12 md:px-16 py-4 sm:py-5 h-auto font-bold w-full sm:w-auto transition-all duration-200 touch-manipulation shadow-lg ${className}`}
      >
        {text}
        <ArrowRight className="ml-3 h-5 sm:h-6 w-5 sm:w-6" />
      </Button>
      
      <p className="text-xs sm:text-sm mt-4 text-slate-600">
        Instant download • 30-day money-back guarantee • For surgeons only
      </p>
    </div>
  );
};

export default CTAButton;
