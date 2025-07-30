
import ThankYouHeroSection from "@/components/sections/ThankYouHeroSection";
import ThankYouProblemSection from "@/components/sections/ThankYouProblemSection";
import ThankYouProblemSolutionSection from "@/components/sections/ThankYouProblemSolutionSection";
import ThankYouValueStackSection from "@/components/sections/ThankYouValueStackSection";
import ThankYouCTASection from "@/components/sections/ThankYouCTASection";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <ThankYouHeroSection />
      <ThankYouProblemSection />
      <ThankYouProblemSolutionSection />
      <ThankYouValueStackSection />
      <ThankYouCTASection />
    </div>
  );
};

export default ThankYou;
