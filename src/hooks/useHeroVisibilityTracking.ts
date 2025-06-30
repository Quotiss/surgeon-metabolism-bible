
import { useEffect, useRef, useState } from 'react';

interface UseHeroVisibilityTrackingOptions {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
}

export const useHeroVisibilityTracking = (
  onHeroVisible: () => void,
  options: UseHeroVisibilityTrackingOptions = {}
) => {
  const { threshold = 0.5, rootMargin = '0px', delay = 500 } = options;
  const [hasTracked, setHasTracked] = useState(false);
  const elementRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasTracked) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTracked) {
          // Add small delay to ensure content is fully rendered
          timeoutRef.current = setTimeout(() => {
            console.log('Hero section is visible - firing PageView event');
            onHeroVisible();
            setHasTracked(true);
          }, delay);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    // Fallback: if hero doesn't become visible within 5 seconds, track anyway
    const fallbackTimeout = setTimeout(() => {
      if (!hasTracked) {
        console.log('Fallback PageView tracking triggered after 5 seconds');
        onHeroVisible();
        setHasTracked(true);
      }
    }, 5000);

    return () => {
      observer.disconnect();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      clearTimeout(fallbackTimeout);
    };
  }, [onHeroVisible, threshold, rootMargin, delay, hasTracked]);

  return { elementRef, hasTracked };
};
