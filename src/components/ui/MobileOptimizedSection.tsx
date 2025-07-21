
import { ReactNode, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface MobileOptimizedSectionProps {
  children: ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  background?: 'white' | 'slate' | 'gradient';
}

const MobileOptimizedSection = forwardRef<HTMLElement, MobileOptimizedSectionProps>(
  ({ children, className = '', padding = 'md', background = 'white' }, ref) => {
    const paddingClasses = {
      sm: 'py-6 px-3 sm:py-8 sm:px-4',
      md: 'py-8 px-3 sm:py-12 sm:px-4 md:py-16',
      lg: 'py-10 px-3 sm:py-16 sm:px-4 md:py-20'
    };

    const backgroundClasses = {
      white: 'bg-white',
      slate: 'bg-slate-50',
      gradient: 'bg-gradient-to-b from-slate-50 to-white'
    };

    return (
      <section 
        ref={ref}
        className={cn(
          'w-full',
          paddingClasses[padding],
          backgroundClasses[background],
          className
        )}
      >
        <div className="container mx-auto max-w-6xl">
          {children}
        </div>
      </section>
    );
  }
);

MobileOptimizedSection.displayName = 'MobileOptimizedSection';

export default MobileOptimizedSection;
