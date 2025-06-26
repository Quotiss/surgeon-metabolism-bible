
import { useEffect, useRef, useState } from 'react';

interface UseSimpleLazyLoadOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useSimpleLazyLoad = (options: UseSimpleLazyLoadOptions = {}) => {
  const { threshold = 0.1, rootMargin = '100px' } = options;
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, isVisible]);

  return { elementRef, isVisible };
};
