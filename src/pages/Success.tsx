
import SuccessHeroSection from "@/components/sections/SuccessHeroSection";
import SuccessInstructionsSection from "@/components/sections/SuccessInstructionsSection";
import SuccessSupportSection from "@/components/sections/SuccessSupportSection";

const Success = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <SuccessHeroSection />
      <SuccessInstructionsSection />
      <SuccessSupportSection />
    </div>
  );
};

export default Success;
