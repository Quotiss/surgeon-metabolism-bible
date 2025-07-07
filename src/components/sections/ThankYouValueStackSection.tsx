import { CheckCircle } from "lucide-react";
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
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Elite 14-Day Implementation System
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Everything done for you, zero extra decisions
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-900 mb-2">
                  Complete Precision Meal Plan
                </h4>
                <p className="text-slate-600">
                  Every meal completely mapped out, no stress
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
                  Impossible to sabotage results
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
                  Stay on track when life demands resiliency
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
                  Minimal time investment, maximum efficiency and results
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
                SECURE MY SUCCESS - $97
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
