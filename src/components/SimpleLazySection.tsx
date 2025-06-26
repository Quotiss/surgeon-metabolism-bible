
import { ReactNode, memo } from 'react';
import { useSimpleLazyLoad } from '@/hooks/useSimpleLazyLoad';

interface SimpleLazySectionProps {
  children: ReactNode;
  className?: string;
}

const SimpleLazySection = memo(({ children, className = '' }: SimpleLazySectionProps) => {
  const { elementRef, isVisible } = useSimpleLazyLoad({ rootMargin: '150px' });

  return (
    <section 
      ref={elementRef} 
      className={`transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}
    >
      {isVisible ? children : (
        <div className="min-h-[200px] bg-slate-50/50 animate-pulse rounded-lg" />
      )}
    </section>
  );
});

SimpleLazySection.displayName = 'SimpleLazySection';
export default SimpleLazySection;
