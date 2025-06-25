
import { ReactNode, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const OptimizedContainer = forwardRef<HTMLDivElement, OptimizedContainerProps>(
  ({ children, className = '', size = 'lg' }, ref) => {
    const sizeClasses = {
      sm: 'max-w-2xl',
      md: 'max-w-4xl',
      lg: 'max-w-6xl',
      xl: 'max-w-7xl'
    };

    return (
      <div 
        ref={ref}
        className={cn(
          'container-optimized',
          sizeClasses[size],
          className
        )}
        style={{ contain: 'layout style' }}
      >
        {children}
      </div>
    );
  }
);

OptimizedContainer.displayName = 'OptimizedContainer';

export default OptimizedContainer;
