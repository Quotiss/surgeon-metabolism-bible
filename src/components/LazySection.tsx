
import { ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  fallback?: ReactNode;
  threshold?: number;
  rootMargin?: string;
}

const LazySection = ({ 
  children, 
  className = '', 
  fallback,
  threshold = 0.1,
  rootMargin = '100px'
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
    >
      {isVisible ? children : (fallback || <div className="min-h-[200px]" />)}
    </section>
  );
};

export default LazySection;
