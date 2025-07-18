
import { Target, Shield, Zap, Heart, CheckCircle, BookOpen } from "lucide-react";
import LazySection from "@/components/LazySection";

const ScienceSection = () => {
  return (
    <LazySection className="py-8 sm:py-12 md:py-16 bg-slate-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-3 mb-3 sm:mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-slate-900">
              Inside the Complete System
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
            <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Target className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
              </div>
              <h3 className="font-bold text-base sm:text-lg text-blue-600">The Metabolic Breakdown Assessment</h3>
            </div>
            <p className="text-sm sm:text-base text-slate-600 text-center">
              Discover the root causes and disrupted systems <span className="font-bold">stealing your energy, hiding your muscle, and keeping you foggy</span>
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
            <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
              </div>
              <h3 className="font-bold text-base sm:text-lg text-blue-600">The Energy Saboteur Elimination Guide</h3>
            </div>
            <p className="text-sm sm:text-base text-slate-600 text-center">
              Eliminating the hidden killers that are <span className="font-bold">sabotaging your performance and stopping your dominance</span>
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
            <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
              </div>
              <h3 className="font-bold text-base sm:text-lg text-blue-600">The Circadian Command Protocol</h3>
            </div>
            <p className="text-sm sm:text-base text-slate-600 text-center">
              Optimizing your biological clock for <span className="font-bold">superhuman energy levels, effortless calorie-burning, and deep recovery</span>
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
            <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
              </div>
              <h3 className="font-bold text-base sm:text-lg text-blue-600">The Performance Fuel System</h3>
            </div>
            <p className="text-sm sm:text-base text-slate-600 text-center">
              Revealing the critical nutrition framework that <span className="font-bold">elite surgeons use to realize their maximum potential performance in the OR</span>
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg md:col-span-2 md:max-w-md md:mx-auto">
            <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
              </div>
              <h3 className="font-bold text-base sm:text-lg text-blue-600">The Surgical Implementation Framework</h3>
            </div>
            <p className="text-sm sm:text-base text-slate-600 text-center">
              Integrating the entire system for results that stick, specifically engineered to work within your <span className="font-bold">ruthlessly chaotic surgical schedule for maximum efficiency and minimal decision-making</span>
            </p>
          </div>
        </div>

        <p className="text-base sm:text-lg text-slate-700 text-center">
          This isn't information you'll find in <span className="font-bold">medical journals</span> or <span className="font-bold">mainstream health advice</span>. <span className="font-bold text-blue-600">Elite surgeons</span> have been quietly sharing these protocols through <span className="font-bold text-blue-600">private networks</span> for years, paying top metabolic specialists <span className="font-bold text-blue-600">$500+ per session</span> to customize these systems. <span className="font-bold">Most surgeons will never discover this exists</span>—which is exactly why <span className="font-bold text-blue-600">it works</span>.
        </p>
      </div>
    </LazySection>
  );
};

export default ScienceSection;
