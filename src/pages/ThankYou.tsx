
import { CheckCircle, Zap, Target, Clock, AlertTriangle, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import OptimizedContainer from "@/components/ui/OptimizedContainer";

const ThankYou = () => {
  const handleUpsellClick = () => {
    // TODO: Integrate with Polar modal for upsell
    console.log("Upsell CTA clicked");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-12 sm:py-16">
        <OptimizedContainer size="md" className="text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Congratulations! But Don't Make The Same Mistake{" "}
              <span className="text-blue-600 font-bold">97% of Surgeons</span>{" "}
              Make Next...
            </h1>
            <div className="flex items-center justify-center mb-4">
              <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
                Check your email for download links - but first, here's the{" "}
                <span className="text-blue-600 font-bold">critical gap</span>{" "}
                that determines{" "}
                <span className="text-blue-600 font-bold">success or failure</span>
              </p>
            </div>
          </div>
        </OptimizedContainer>
      </section>

      {/* Problem + Solution Section */}
      <section className="py-12 bg-white">
        <OptimizedContainer size="md">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
              You're 80% There... But Missing the Final Piece
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
              The Surgeon Metabolism Bible gives you the foundation, but top-performing surgeons 
              need more than just knowledge—they need a complete execution system.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-red-600 font-bold">×</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Information Without Implementation
                  </h4>
                  <p className="text-slate-600">
                    Having the knowledge but struggling to execute consistently
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-red-600 font-bold">×</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Time-Consuming Meal Planning
                  </h4>
                  <p className="text-slate-600">
                    Wasting precious hours figuring out what to eat and when
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-red-600 font-bold">×</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Inconsistent Results
                  </h4>
                  <p className="text-slate-600">
                    Starting strong but losing momentum without proper systems
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-8 w-8 text-green-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Done-For-You Implementation
                  </h4>
                  <p className="text-slate-600">
                    Complete meal plans and systems that eliminate guesswork
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-8 w-8 text-green-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Time-Saving Automation
                  </h4>
                  <p className="text-slate-600">
                    Pre-planned everything so you can focus on surgery, not meal prep
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-8 w-8 text-green-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Guaranteed Consistency
                  </h4>
                  <p className="text-slate-600">
                    Foolproof systems that ensure long-term success
                  </p>
                </div>
              </div>
            </div>
          </div>
        </OptimizedContainer>
      </section>

      {/* Value Stack + Urgency Section */}
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

      {/* Final CTA Section */}
      <section className="py-12 bg-slate-900 text-white">
        <OptimizedContainer size="md" className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Complete Your Transformation Today
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            Don't let this opportunity slip away. Join the elite surgeons who have the complete system 
            for effortless metabolic optimization.
          </p>
          
          <Button 
            onClick={handleUpsellClick}
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white text-xl px-12 py-6 h-auto font-bold mb-6 transform hover:scale-105 transition-all duration-300"
          >
            Yes, Upgrade My System Now - $97
          </Button>
          
          <div className="flex items-center justify-center space-x-4 text-sm text-slate-400">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              <span>Instant Access</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              <span>One-Time Payment</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              <span>Complete System</span>
            </div>
          </div>
        </OptimizedContainer>
      </section>
    </div>
  );
};

export default ThankYou;
