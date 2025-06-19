
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

interface FloatingCTAProps {
  onClick: () => void;
}

const FloatingCTA = ({ onClick }: FloatingCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    // Show floating CTA after user scrolls past hero section
    const scrolled = currentScrollY > 600;
    
    // Detect scroll direction for better UX
    const scrollingUp = currentScrollY < lastScrollY;
    
    setIsVisible(scrolled);
    setIsScrollingUp(scrollingUp);
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [handleScroll]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed bottom-4 left-4 right-4 z-50 md:hidden transition-transform duration-300 ${
        isScrollingUp ? 'transform translate-y-0' : 'transform translate-y-1'
      }`}
      style={{ 
        contain: 'layout style paint',
        willChange: 'transform'
      }}
    >
      <Button 
        onClick={onClick}
        className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white shadow-lg text-base sm:text-lg py-4 h-auto animate-fade-in font-semibold transition-all duration-200 touch-manipulation border-0 rounded-lg"
        style={{ 
          minHeight: '48px',
          WebkitTapHighlightColor: 'transparent'
        }}
      >
        Get Access Now - $27
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  );
};

export default FloatingCTA;
