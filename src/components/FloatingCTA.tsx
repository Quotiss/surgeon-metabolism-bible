
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

interface FloatingCTAProps {
  onClick: () => void;
}

const FloatingCTA = ({ onClick }: FloatingCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA after user scrolls past hero section
      const scrolled = window.scrollY > 600;
      setIsVisible(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
      <Button 
        onClick={onClick}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg text-lg py-4 h-auto animate-fade-in"
      >
        Get Access Now - $27
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  );
};

export default FloatingCTA;
