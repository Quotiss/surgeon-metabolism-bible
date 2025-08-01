
import ThankYouHeroSection from "@/components/sections/ThankYouHeroSection";
import ThankYouProblemSection from "@/components/sections/ThankYouProblemSection";
import ThankYouAgitateSection from "@/components/sections/ThankYouAgitateSection";
import ThankYouSolutionSection from "@/components/sections/ThankYouSolutionSection";
import ThankYouValueStackSection from "@/components/sections/ThankYouValueStackSection";
import ThankYouGuaranteeSection from "@/components/sections/ThankYouGuaranteeSection";
import ThankYouFAQSection from "@/components/sections/ThankYouFAQSection";
import FooterSection from "@/components/sections/FooterSection";

const ThankYou = () => {
  const handleCTAClick = (location: string) => {
    window.open('https://gumroad.com/l/surgeon-metabolism-bible', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <ThankYouHeroSection />
      <ThankYouProblemSection />
      <ThankYouAgitateSection />
      <ThankYouSolutionSection />
      <ThankYouValueStackSection />
      <ThankYouGuaranteeSection />
      <ThankYouFAQSection onCTAClick={handleCTAClick} />
      <FooterSection />
    </div>
  );
};

export default ThankYou;
