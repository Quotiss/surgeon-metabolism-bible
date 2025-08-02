
import { useEffect } from 'react';
import ThankYouHeroSection from "@/components/sections/ThankYouHeroSection";
import ThankYouProblemSection from "@/components/sections/ThankYouProblemSection";
import ThankYouAgitateSection from "@/components/sections/ThankYouAgitateSection";
import ThankYouSolutionSection from "@/components/sections/ThankYouSolutionSection";
import ThankYouValueStackSection from "@/components/sections/ThankYouValueStackSection";
import ThankYouGuaranteeSection from "@/components/sections/ThankYouGuaranteeSection";
import ThankYouFAQSection from "@/components/sections/ThankYouFAQSection";
import FooterSection from "@/components/sections/FooterSection";
import { usePurchaseVerification } from "@/hooks/usePurchaseVerification";

const ThankYou = () => {
  const { isVerified, isLoading } = usePurchaseVerification();


  // Add meta tags for security
  useEffect(() => {
    // Prevent search engine indexing
    const metaRobots = document.createElement('meta');
    metaRobots.name = 'robots';
    metaRobots.content = 'noindex, nofollow';
    document.head.appendChild(metaRobots);

    return () => {
      document.head.removeChild(metaRobots);
    };
  }, []);

  // Show loading state while verifying
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Verifying your purchase...</p>
        </div>
      </div>
    );
  }

  // Only render content if purchase is verified
  if (!isVerified) {
    return null; // Will redirect in the hook
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <ThankYouHeroSection />
      <ThankYouProblemSection />
      <ThankYouAgitateSection />
      <ThankYouSolutionSection />
      <ThankYouValueStackSection />
      <ThankYouGuaranteeSection />
      <ThankYouFAQSection />
      <FooterSection />
    </div>
  );
};

export default ThankYou;
