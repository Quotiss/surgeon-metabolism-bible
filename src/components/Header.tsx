import React from 'react';
import { Link } from 'react-router-dom';
import { ModeToggle } from "@/components/mode-toggle"
import { useTracking } from 'react-tracking';
import { Button } from "@/components/ui/button"
import { createCTAHandler } from '@/utils/ctaUtils';
import { useCheckout } from '@/contexts/CheckoutContext';

const Header = () => {
  const { trackEvent } = useTracking();
  const { openCheckout } = useCheckout();

  const trackCTAClick = (location: string) => {
    trackEvent({
      category: 'cta',
      action: 'click',
      label: `header_cta_${location}`,
    });
  };

  const handleCTAClick = createCTAHandler(trackCTAClick, openCheckout);

  return (
    <header className="bg-background sticky top-0 z-50 w-full border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-semibold text-lg">
          Polar
        </Link>
        <div className="flex items-center space-x-4">
          <Button onClick={() => handleCTAClick('header')} variant="default" size="sm">
            Sponsor
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
