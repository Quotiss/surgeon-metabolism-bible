
import React from 'react';
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import FAQSection from "@/components/sections/FAQSection";
import Header from "@/components/Header";
import PolarCheckoutModal from '@/components/checkout/PolarCheckoutModal';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <FAQSection />
      </main>
      
      <PolarCheckoutModal />
    </div>
  );
};

export default Index;
