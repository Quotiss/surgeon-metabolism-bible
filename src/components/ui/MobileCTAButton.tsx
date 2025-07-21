
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
      default: "px-6 py-4 text-lg min-h-[56px]",
      large: "px-8 py-5 text-xl min-h-[64px]"
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
        <span className="flex items-center justify-center gap-2 leading-tight">
          {children}
          {showArrow && <ArrowRight className="h-5 w-5 flex-shrink-0" />}
        </span>
      </Button>
    );
  }
);

MobileCTAButton.displayName = 'MobileCTAButton';

export default MobileCTAButton;
