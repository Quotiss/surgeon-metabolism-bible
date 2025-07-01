
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { POLAR_CONFIG } from "@/lib/constants";

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
      className={`fixed bottom-4 left-4 right-4 z-50 md:hidden transition-all duration-500 ease-out ${
        isScrollingUp ? 'transform translate-y-0 opacity-100' : 'transform translate-y-1 opacity-90'
      }`}
      style={{ 
        contain: 'layout style paint',
        willChange: 'transform'
      }}
    >
      <Button 
        onClick={onClick}
        asChild
        className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white shadow-lg hover:shadow-2xl text-base sm:text-lg py-4 h-auto animate-fade-in font-semibold transition-all duration-300 ease-out touch-manipulation border-0 rounded-lg hover:scale-[1.02] hover:-translate-y-1 active:scale-95 active:translate-y-0 transform"
        style={{ 
          minHeight: '48px',
          WebkitTapHighlightColor: 'transparent'
        }}
      >
        <a
          data-polar-checkout
          data-polar-checkout-theme="light"
          href={POLAR_CONFIG.CHECKOUT_LINK}
        >
          <span className="flex items-center justify-center gap-2 transition-all duration-300 group">
            Get Access Now - $27
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" />
          </span>
        </a>
      </Button>
    </div>
  );
};

export default FloatingCTA;
