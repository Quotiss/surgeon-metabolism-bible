
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
    const baseClasses = "w-full touch-manipulation font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl";
    
    const variantClasses = {
      primary: "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-2 border-blue-500",
      secondary: "bg-white hover:bg-slate-50 text-blue-600 border-2 border-blue-600"
    };

    const sizeClasses = {
      default: "px-4 py-3 text-base min-h-[48px]",
      large: "px-6 py-4 text-lg min-h-[56px]"
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
        <span className="flex items-center justify-center gap-2 text-center leading-none">
          {children}
          {showArrow && <ArrowRight className="h-4 w-4 flex-shrink-0" />}
        </span>
      </Button>
    );
  }
);

MobileCTAButton.displayName = 'MobileCTAButton';

export default MobileCTAButton;
