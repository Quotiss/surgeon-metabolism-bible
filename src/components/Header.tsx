
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { createCTAHandler } from '@/utils/ctaUtils';
import { useCheckout } from '@/contexts/CheckoutContext';

const Header = () => {
  const { openCheckout } = useCheckout();

  const trackCTAClick = (location: string) => {
    console.log('CTA clicked:', location);
  };

  const handleCTAClick = createCTAHandler(trackCTAClick, openCheckout);

  return (
    <header className="bg-background sticky top-0 z-50 w-full border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-semibold text-lg">
          Metabolism Bible
        </Link>
        <div className="flex items-center space-x-4">
          <Button onClick={() => handleCTAClick('header')} variant="default" size="sm">
            Get Access Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
