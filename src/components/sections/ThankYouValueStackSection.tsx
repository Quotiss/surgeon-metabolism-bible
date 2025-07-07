
import { CheckCircle, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import OptimizedContainer from "@/components/ui/OptimizedContainer";

const ThankYouValueStackSection = () => {
  const handleCTAClick = () => {
    // TODO: Integrate with checkout
    console.log("Value Stack CTA clicked");
  };

  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50">
      <OptimizedContainer size="md">
        <div className="text-center mb-12">
          {/* Visual Element */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <Target className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Introducing: The Elite 14-Day Implementation System
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            The exact done-for-you blueprint that guarantees implementation success from the Surgeon Metabolism Bible
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-900 mb-2">
                  Complete Precision Meal Plan
                </h4>
                <p className="text-slate-600">
                  Every meal strategically mapped to <span className="font-bold text-blue-600">natural energy cycles</span>. No more wasting mental resources. What nutritionists charge <span className="font-bold text-blue-600">$500/session</span> for, handed to you on a silver platter
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-900 mb-2">
                  Mistake-Proof Timing
                </h4>
                <p className="text-slate-600">
                  Exact nutritional timing to guarantee conversion into <span className="font-bold text-blue-600">fat-burning fuel</span>. This eliminates the <span className="font-bold text-blue-600">#1 reason surgeons plateau</span>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-900 mb-2">
                  Emergency Protocols
                </h4>
                <p className="text-slate-600">
                  <span className="font-bold text-blue-600">Bulletproof backup plans</span> for navigating the inevitable chaos - exact protocols for traveling, dining out, and maintaining <span className="font-bold text-blue-600">stress-free flexibility</span> while others break down at the first sign of slipping up
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-900 mb-2">
                  Batch Prep Mastery
                </h4>
                <p className="text-slate-600">
                  Streamline your entire week in <span className="font-bold text-blue-600">under 2 hours</span>. Execute like an <span className="font-bold text-blue-600">elite performer</span> while colleagues are stuck wasting resources on simple decisions. This single system pays for itself in time savings - <span className="font-bold text-blue-600">your most important asset</span>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Button */}
        <div className="text-center mb-8">
          <div className="relative inline-block">
            {/* Subtle glow effect behind button */}
            <div className="absolute inset-0 bg-blue-400 rounded-lg blur-lg opacity-30 animate-pulse"></div>
            <Button 
              onClick={handleCTAClick}
              size="lg" 
              className="relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-xl px-12 py-6 h-auto font-bold transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border-2 border-blue-500"
            >
              <span className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                SECURE MY SUCCESS → $97
              </span>
            </Button>
          </div>
        </div>

        {/* Urgency Section */}
        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-red-700 mb-4">
              LIMITED OFFER - $97
            </h3>
            <p className="text-lg text-red-600 font-semibold mb-4">
              Expires when you leave this page
            </p>
            <p className="text-base text-slate-700">
              Walk away and join the 97% who wonder why they never get the results they hope for
            </p>
          </div>
          
          <div className="bg-white border border-red-200 rounded-lg p-4 inline-block">
            <p className="text-sm text-red-600 font-medium">
              ⚠️ This offer will NOT be available once you leave this page
            </p>
          </div>
        </div>
      </OptimizedContainer>
    </section>
  );
};

export default ThankYouValueStackSection;
