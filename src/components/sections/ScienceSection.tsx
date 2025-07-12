
import { Target, Shield, Zap, Heart, CheckCircle } from "lucide-react";
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
            <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-100 rounded-full flex items-center justify-center">
                <Target className="h-4 w-4 sm:h-5 sm:w-5 text-red-600" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg">The Metabolic Breakdown Assessment</h3>
            </div>
            <p className="text-sm sm:text-base text-slate-600 text-center">
              <span className="font-bold text-red-600">Discover</span> what's <span className="font-bold">stealing your energy</span> and vitality
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
            <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg">The Energy Saboteur Elimination Guide</h3>
            </div>
            <p className="text-sm sm:text-base text-slate-600 text-center">
              <span className="font-bold text-yellow-600">Remove</span> hidden killers <span className="font-bold">destroying your performance</span>
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
            <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg">The Circadian Command Protocol</h3>
            </div>
            <p className="text-sm sm:text-base text-slate-600 text-center">
              <span className="font-bold text-blue-600">Reset</span> your biological clock for <span className="font-bold">surgical dominance</span>
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
            <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg">The Performance Fuel System</h3>
            </div>
            <p className="text-sm sm:text-base text-slate-600 text-center">
              <span className="font-bold text-green-600">Precise nutrition timing</span> for <span className="font-bold">endless energy</span>
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg md:col-span-2 md:max-w-md md:mx-auto">
            <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg">The Bulletproof Implementation Framework</h3>
            </div>
            <p className="text-sm sm:text-base text-slate-600 text-center">
              <span className="font-bold text-purple-600">Surgeon-specific protocols</span> that <span className="font-bold">actually stick</span>
            </p>
          </div>
        </div>

        <p className="text-base sm:text-lg text-slate-700 text-center">
          This information was previously locked away in expensive consultations with high-end metabolic specialists who understand <span className="font-bold text-blue-600">surgical stress physiology</span>. Now it's yours for <span className="font-bold text-blue-600">less than the cost of a single session</span> with a nutritionist who doesn't understand how your profession rewires your metabolism.
        </p>
      </div>
    </LazySection>
  );
};

export default ScienceSection;
