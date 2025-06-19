
import { Target, Shield, Zap, Heart } from "lucide-react";
import LazySection from "@/components/LazySection";

const ScienceSection = () => {
  return (
    <LazySection className="py-8 sm:py-12 md:py-16 bg-slate-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
            Inside the Complete System
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-3 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-100 rounded-full flex items-center justify-center">
                <Target className="h-4 w-4 sm:h-5 sm:w-5 text-red-600" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg">The 3 <span className="font-bold text-blue-600">stress-adapted physiological systems</span></h3>
            </div>
            <p className="text-sm sm:text-base text-slate-600">that explain why surgeon training destroys normal metabolism (and how to reverse the damage)</p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-3 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg">The 5 hidden stress amplifiers</h3>
            </div>
            <p className="text-sm sm:text-base text-slate-600">in your daily routine that keep triggering metabolic shutdown (you're unknowingly doing #3 every morning)</p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-3 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg">The fuel rules</h3>
            </div>
            <p className="text-sm sm:text-base text-slate-600">that <span className="font-bold text-blue-600">convert stress hormones into fat-burning fuel</span> instead of fat storage (what elite surgeons eat that you don't)</p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-3 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg">The 4 stress-resilience protocols</h3>
            </div>
            <p className="text-sm sm:text-base text-slate-600">that make this system bulletproof even during your worst weeks (works with chaos, not against it)</p>
          </div>
        </div>

        <p className="text-base sm:text-lg text-slate-700 text-center">
          This information was previously locked away in expensive consultations with high-end metabolic specialists who understand <span className="font-bold text-blue-600">surgical stress physiology</span>. Now it's yours for less than the cost of a single session with a nutritionist who doesn't understand how your profession rewires your metabolism.
        </p>
      </div>
    </LazySection>
  );
};

export default ScienceSection;
