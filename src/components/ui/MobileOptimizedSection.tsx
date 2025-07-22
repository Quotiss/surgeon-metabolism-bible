
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
      sm: 'py-8 px-4 sm:py-10 sm:px-6 md:py-12 md:px-8',
      md: 'py-12 px-4 sm:py-16 sm:px-6 md:py-20 md:px-8',
      lg: 'py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8'
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
