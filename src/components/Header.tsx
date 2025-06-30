
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Header = () => {
  const handleCTAClick = () => {
    if ((window as any).openPolarCheckout) {
      (window as any).openPolarCheckout('header');
    }
  };

  return (
    <header className="bg-background sticky top-0 z-50 w-full border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-semibold text-lg">
          Metabolism Bible
        </Link>
        <div className="flex items-center space-x-4">
          <Button onClick={handleCTAClick} variant="default" size="sm">
            Get Access Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
