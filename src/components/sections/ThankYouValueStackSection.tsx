
import { Zap, Target, Clock } from "lucide-react";
import OptimizedContainer from "@/components/ui/OptimizedContainer";

const ThankYouValueStackSection = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50">
      <OptimizedContainer size="md">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            The Complete Precision Protocol
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need for effortless, sustainable transformation
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Zap className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-900 mb-2">
                  30-Day Done-For-You Meal Plans
                </h4>
                <p className="text-slate-600">
                  Complete breakfast, lunch, dinner, and snack plans optimized for surgeon schedules
                </p>
                <p className="text-sm text-blue-600 font-semibold mt-1">Value: $297</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Target className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-900 mb-2">
                  Precision Macro Calculator
                </h4>
                <p className="text-slate-600">
                  Personalized macro targets based on your surgery schedule and goals
                </p>
                <p className="text-sm text-green-600 font-semibold mt-1">Value: $197</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-900 mb-2">
                  Quick-Prep Recipe Database
                </h4>
                <p className="text-slate-600">
                  50+ recipes that take 15 minutes or less to prepare
                </p>
                <p className="text-sm text-purple-600 font-semibold mt-1">Value: $147</p>
              </div>
            </div>
          </div>

          <div className="border-t pt-6 mt-6 text-center">
            <p className="text-lg text-slate-700 mb-2">
              Total Package Value: <span className="font-bold text-slate-900">$641</span>
            </p>
            <p className="text-2xl font-bold text-red-600 mb-2">
              Special Upgrade Price: <span className="text-3xl">$97</span>
            </p>
            <p className="text-sm text-slate-600">
              ⏰ Available only for the next 15 minutes
            </p>
          </div>
        </div>
      </OptimizedContainer>
    </section>
  );
};

export default ThankYouValueStackSection;
