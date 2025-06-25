
import { ReactNode, memo } from 'react';
import { useOptimizedIntersectionObserver } from '@/hooks/useOptimizedIntersectionObserver';

interface OptimizedLazySectionProps {
  children: ReactNode;
  className?: string;
  fallback?: ReactNode;
  threshold?: number;
  rootMargin?: string;
  delay?: number;
}

const OptimizedLazySection = memo(({ 
  children, 
  className = '', 
  fallback,
  threshold = 0.1,
  rootMargin = '150px',
  delay = 0
}: OptimizedLazySectionProps) => {
  const { elementRef, isVisible } = useOptimizedIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce: true,
    delay
  });

  const defaultFallback = (
    <div className="min-h-[200px] bg-slate-50 animate-pulse rounded-lg skeleton-optimized" />
  );

  return (
    <section 
      ref={elementRef} 
      className={`lazy-fade-in ${isVisible ? 'visible' : ''} ${className}`}
      style={{ contain: 'layout style paint' }}
    >
      {isVisible ? children : (fallback || defaultFallback)}
    </section>
  );
});

OptimizedLazySection.displayName = 'OptimizedLazySection';

export default OptimizedLazySection;
