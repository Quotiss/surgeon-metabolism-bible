
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface MobileCTAButtonProps {
  onClick: () => void;
  children?: string;
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'large';
  className?: string;
  showArrow?: boolean;
}

const MobileCTAButton = forwardRef<HTMLButtonElement, MobileCTAButtonProps>(
  ({ 
    onClick, 
    children = "Get Instant Access Now", 
    variant = 'primary',
    size = 'default',
    className = '',
    showArrow = true
  }, ref) => {
    const baseClasses = "w-full sm:w-auto touch-manipulation font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl";
    
    const variantClasses = {
      primary: "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-2 border-blue-500",
      secondary: "bg-white hover:bg-slate-50 text-blue-600 border-2 border-blue-600"
    };

    const sizeClasses = {
      default: "px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg",
      large: "px-8 py-4 text-lg sm:px-12 sm:py-6 sm:text-xl"
    };

    return (
      <Button
        ref={ref}
        onClick={onClick}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        {children}
        {showArrow && <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />}
      </Button>
    );
  }
);

MobileCTAButton.displayName = 'MobileCTAButton';

export default MobileCTAButton;
