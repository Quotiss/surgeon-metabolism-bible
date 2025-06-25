
import { useEffect, useRef, useState, useCallback } from 'react';

interface UseOptimizedIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}

export const useOptimizedIntersectionObserver = (
  options: UseOptimizedIntersectionObserverOptions = {}
) => {
  const { 
    threshold = 0.1, 
    rootMargin = '100px', 
    triggerOnce = true,
    delay = 0
  } = options;
  
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    const isIntersecting = entry.isIntersecting;
    
    if (isIntersecting && !hasTriggered) {
      if (delay > 0) {
        timeoutRef.current = setTimeout(() => {
          setIsVisible(true);
          if (triggerOnce) {
            setHasTriggered(true);
          }
        }, delay);
      } else {
        setIsVisible(true);
        if (triggerOnce) {
          setHasTriggered(true);
        }
      }
    } else if (!isIntersecting && !triggerOnce) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setIsVisible(false);
    }
  }, [hasTriggered, triggerOnce, delay]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || (triggerOnce && hasTriggered)) return;

    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin,
    });

    observer.observe(element);

    return () => {
      observer.unobserve(element);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [threshold, rootMargin, triggerOnce, hasTriggered, handleIntersection]);

  return { 
    elementRef, 
    isVisible: isVisible || hasTriggered,
    hasTriggered
  };
};
