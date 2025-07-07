
import { CheckCircle, X } from "lucide-react";
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
              The problem isn't the system - it's your <span className="font-bold text-blue-600">execution</span>. You know WHAT to do, but figuring out daily meal decisions while you juggle patients' lives leads to <span className="font-bold text-blue-600">decision-fatigue overload</span>. By day 3, most surgeons give up and their $27 investment becomes <span className="font-bold text-blue-600">another failed attempt</span>, and the cycle continues.
            </p>
          </div>

          {/* Two Paths Comparison */}
          <div className="bg-slate-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
              Two Paths Ahead: Choose Wisely
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
                    <p className="text-slate-700">The <span className="font-bold text-red-600">medical system continues to steal</span> your energy and vitality</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="h-4 w-4 text-red-600" />
                    </div>
                    <p className="text-slate-700">Patients <span className="font-bold text-red-600">question your health advice</span></p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="h-4 w-4 text-red-600" />
                    </div>
                    <p className="text-slate-700">Wife sees you <span className="font-bold text-red-600">fall asleep on the couch again</span></p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="h-4 w-4 text-red-600" />
                    </div>
                    <p className="text-slate-700">Another <span className="font-bold text-red-600">diet failure damages your confidence</span></p>
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
                    <p className="text-slate-700"><span className="font-bold text-green-600">Zero extra decisions</span></p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <p className="text-slate-700">Limitless <span className="font-bold text-green-600">razor sharp mental clarity</span></p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <p className="text-slate-700">Practice with <span className="font-bold text-green-600">authentic authority</span></p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <p className="text-slate-700"><span className="font-bold text-green-600">Master your own body</span> and the essential levers for energy</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <p className="text-slate-700">Prove you can <span className="font-bold text-green-600">see your commitments through</span></p>
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
              <span className="font-bold text-blue-600">Elite surgeons</span> don't wing implementation. They use a completely <span className="font-bold text-blue-600">done-for-you system</span> that eliminates all meal planning, timing decisions, and guesswork while <span className="font-bold text-blue-600">integrating seamlessly</span> into your chaotic schedule.
            </p>
            <h4 className="text-xl font-bold text-blue-600 mb-4">
              Introducing: The Elite 14-Day Implementation System
            </h4>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
              The exact done-for-you blueprint that guarantees implementation success from the Surgeon Metabolism Bible
            </p>
          </div>
        </div>
      </OptimizedContainer>
    </section>
  );
};

export default ThankYouProblemSolutionSection;
