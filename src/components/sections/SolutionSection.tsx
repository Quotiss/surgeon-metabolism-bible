
import { CheckCircle } from "lucide-react";
import LazySection from "@/components/LazySection";

const SolutionSection = () => {
  return (
    <LazySection className="py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
            Introducing the Surgeon Metabolism Bible
          </h2>
        </div>

        <div className="prose prose-lg max-w-none text-slate-700 mb-8 sm:mb-12">
          <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            The Surgeon Metabolism Bible reveals the exact 30-day protocol these elite surgeons use to reverse metabolic damage while their peers stay stuck. This isn't another diet book - it's the underground system that fixes the root cause mechanism destroying surgeon metabolism.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">
            What You'll Learn:
          </h3>
          
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-start space-x-3 sm:space-x-4">
              <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm sm:text-base leading-relaxed">
                The <span className="font-semibold">5-minute circadian reset ritual</span> that instantly primes your metabolism for all-day energy (works even after 16-hour surgeries)
              </p>
            </div>
            
            <div className="flex items-start space-x-3 sm:space-x-4">
              <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm sm:text-base leading-relaxed">
                The <span className="font-semibold">"inflammation foods"</span> secretly destroying your energy - 3 "healthy" staples keeping you chronically fatigued (eliminate these effortlessly)
              </p>
            </div>
            
            <div className="flex items-start space-x-3 sm:space-x-4">
              <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm sm:text-base leading-relaxed">
                The <span className="font-semibold">surgeon-proof meal timing blueprint</span> that syncs perfectly with OR schedules and clinical rotations
              </p>
            </div>
            
            <div className="flex items-start space-x-3 sm:space-x-4">
              <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm sm:text-base leading-relaxed">
                The <span className="font-semibold">metabolic accelerator foods</span> nutritionists charge $500/session to reveal - that trigger instant fat burning on autopilot
              </p>
            </div>
          </div>
        </div>
      </div>
    </LazySection>
  );
};

export default SolutionSection;
