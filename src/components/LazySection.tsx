
import { ReactNode, memo } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  fallback?: ReactNode;
  threshold?: number;
  rootMargin?: string;
}

const LazySection = memo(({ 
  children, 
  className = '', 
  fallback,
  threshold = 0.1,
  rootMargin = '150px'
}: LazySectionProps) => {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce: true
  });

  return (
    <section 
      ref={elementRef} 
      className={`lazy-fade-in ${isVisible ? 'visible' : ''} ${className}`}
      style={{ contain: 'layout style paint' }}
    >
      {isVisible ? children : (fallback || <div className="min-h-[200px] bg-slate-50 animate-pulse" />)}
    </section>
  );
});

LazySection.displayName = 'LazySection';

export default LazySection;
