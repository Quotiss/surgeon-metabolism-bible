import { CheckCircle, Target, AlertTriangle } from "lucide-react";
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

        {/* Updated Urgency Section */}
        <div className="bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200 rounded-xl p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
              <AlertTriangle className="h-6 w-6 text-amber-600" />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-slate-900 mb-6">
            Limited Access Pricing
          </h3>
          
          <div className="flex justify-center items-center gap-8 mb-6">
            <div className="text-center">
              <p className="text-sm text-slate-600 font-medium mb-1">Today</p>
              <p className="text-3xl font-bold text-blue-600">$97</p>
            </div>
            
            <div className="text-slate-400 text-2xl">|</div>
            
            <div className="text-center">
              <p className="text-sm text-slate-600 font-medium mb-1">Tomorrow</p>
              <p className="text-2xl font-bold text-slate-500">
                $147 <span className="text-sm font-normal">(if available)</span>
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-lg font-semibold text-slate-800">
              This offer expires the moment you leave the page. It won't be offered again.
            </p>
            
            <p className="text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Don't let implementation failure waste your investment. Every hour you wait is another hour your metabolism stays in gridlock while <span className="font-bold text-blue-600">other surgeons pull ahead</span>.
            </p>
          </div>
        </div>
      </OptimizedContainer>
    </section>
  );
};

export default ThankYouValueStackSection;
