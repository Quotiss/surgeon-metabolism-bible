
import { useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
}

export const usePerformanceMonitor = () => {
  const logMetrics = useCallback((metrics: PerformanceMetrics) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance Metrics:', metrics);
    }
  }, []);

  useEffect(() => {
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      const metrics: PerformanceMetrics = {};
      
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'paint') {
          if (entry.name === 'first-contentful-paint') {
            metrics.fcp = entry.startTime;
          }
        }
        
        if (entry.entryType === 'largest-contentful-paint') {
          metrics.lcp = entry.startTime;
        }
        
        if (entry.entryType === 'first-input') {
          metrics.fid = (entry as any).processingStart - entry.startTime;
        }
        
        if (entry.entryType === 'layout-shift') {
          if (!(entry as any).hadRecentInput) {
            metrics.cls = (metrics.cls || 0) + (entry as any).value;
          }
        }
      });
      
      if (Object.keys(metrics).length > 0) {
        logMetrics(metrics);
      }
    });

    // Observe various performance metrics
    try {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (e) {
      // Fallback for browsers that don't support all entry types
      console.warn('Performance monitoring partially unavailable');
    }

    return () => {
      observer.disconnect();
    };
  }, [logMetrics]);

  const measureFunction = useCallback((name: string, fn: () => void) => {
    const start = performance.now();
    fn();
    const end = performance.now();
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`${name} took ${end - start} milliseconds`);
    }
  }, []);

  return { measureFunction };
};
