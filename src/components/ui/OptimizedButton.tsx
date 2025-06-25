
import { Button } from '@/components/ui/button';
import { forwardRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  loading?: boolean;
}

const OptimizedButton = forwardRef<HTMLButtonElement, OptimizedButtonProps>(
  ({ 
    children, 
    onClick, 
    variant = 'primary', 
    size = 'md', 
    className = '',
    disabled = false,
    loading = false
  }, ref) => {
    const variantClasses = {
      primary: 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white',
      secondary: 'bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-900'
    };

    const sizeClasses = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    };

    return (
      <Button
        ref={ref}
        onClick={onClick}
        disabled={disabled || loading}
        className={cn(
          'touch-target',
          'transition-all duration-200 ease-out',
          'transform hover:scale-105 hover:-translate-y-0.5',
          'active:scale-95 active:translate-y-0',
          'hover:shadow-lg focus:shadow-lg',
          'font-semibold rounded-lg',
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        style={{
          WebkitTapHighlightColor: 'transparent',
          touchAction: 'manipulation'
        }}
      >
        {loading ? (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            Loading...
          </div>
        ) : (
          children
        )}
      </Button>
    );
  }
);

OptimizedButton.displayName = 'OptimizedButton';

export default OptimizedButton;
