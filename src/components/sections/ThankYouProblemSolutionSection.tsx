
import { CheckCircle, Target, Zap, TrendingUp, X } from "lucide-react";
import OptimizedContainer from "@/components/ui/OptimizedContainer";

const ThankYouProblemSolutionSection = () => {
  return (
    <section className="py-12 bg-white">
      <OptimizedContainer size="md">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
            The <span className="font-bold text-blue-600">Fatal Mistake</span> that kills results by day 3...
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
            You now have the same protocol elite surgeons use - <span className="font-bold text-blue-600 italic">but here's where most fail</span>
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Body Copy */}
          <div className="text-center">
            <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
              The problem isn't the system - it's your execution. You know WHAT to do, but figuring out daily meal decisions while you juggle patients' lives leads to decision-fatigue overload. By day 3, most surgeons give up and their $27 investment becomes another failed attempt, and the cycle continues.
            </p>
          </div>

          {/* Two Paths Comparison */}
          <div className="bg-slate-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
              Two Paths Ahead
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Without Precision Implementation */}
              <div className="bg-white border-2 border-red-200 rounded-lg p-6">
                <h4 className="text-xl font-bold text-red-700 mb-6 text-center">
                  Without Precision Implementation
                </h4>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="h-4 w-4 text-red-600" />
                    </div>
                    <p className="text-slate-700">Decision fatigue</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="h-4 w-4 text-red-600" />
                    </div>
                    <p className="text-slate-700">Plateau with no tangible results to show</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="h-4 w-4 text-red-600" />
                    </div>
                    <p className="text-slate-700">Join the struggling 97%</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="h-4 w-4 text-red-600" />
                    </div>
                    <p className="text-slate-700">Another wasted investment</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="h-4 w-4 text-red-600" />
                    </div>
                    <p className="text-slate-700">Another failed attempt chipping away at confidence</p>
                  </div>
                </div>
              </div>

              {/* With Precision Implementation */}
              <div className="bg-white border-2 border-green-200 rounded-lg p-6">
                <h4 className="text-xl font-bold text-green-700 mb-6 text-center">
                  With Precision Implementation
                </h4>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <p className="text-slate-700">Zero decision required</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <p className="text-slate-700">Elite-level transformation of energy and physique</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <p className="text-slate-700">Guarantee your success</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <p className="text-slate-700">Be the energized one everyone admires</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <p className="text-slate-700">Prove to yourself you can see through your commitments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* New Body Copy Section */}
          <div className="text-center py-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              What Elite Surgeons know that you don't...
            </h3>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed mb-6">
              Elite surgeons don't wing implementation. They use a completely done-for-you system that eliminates all meal planning, timing decisions, and guesswork while integrating seamlessly into your chaotic schedule.
            </p>
            <h4 className="text-xl font-bold text-blue-600 mb-4">
              Introducing: The Elite 14-Day Implementation System
            </h4>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
              The exact done-for-you blueprint that guarantees implementation success from the Surgeon Metabolism Bible
            </p>
          </div>

          {/* The Solution Bridge */}
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Bridge the Gap with Precision Implementation
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The difference between knowing and doing is having a foolproof execution system 
              that eliminates decision fatigue entirely.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">
                Zero Decision Fatigue
              </h4>
              <p className="text-slate-600 text-sm">
                Every meal, every timing, every macro pre-calculated and ready to execute
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">
                Maximum Activation
              </h4>
              <p className="text-slate-600 text-sm">
                Mechanisms fire at full capacity when execution is precise and consistent
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">
                Guaranteed Results
              </h4>
              <p className="text-slate-600 text-sm">
                Transform your $27 investment into life-changing results through proven execution
              </p>
            </div>
          </div>
        </div>
      </OptimizedContainer>
    </section>
  );
};

export default ThankYouProblemSolutionSection;
