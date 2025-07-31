
import ThankYouHeroSection from "@/components/sections/ThankYouHeroSection";
import ThankYouProblemSection from "@/components/sections/ThankYouProblemSection";
import ThankYouAgitateSection from "@/components/sections/ThankYouAgitateSection";
import ThankYouSolutionSection from "@/components/sections/ThankYouSolutionSection";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <ThankYouHeroSection />
      <ThankYouProblemSection />
      <ThankYouAgitateSection />
      <ThankYouSolutionSection />
    </div>
  );
};

export default ThankYou;
