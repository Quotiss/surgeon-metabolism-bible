
import { AlertTriangle, Clock, Heart, Target } from "lucide-react";
import LazySection from "@/components/LazySection";

const ProblemSection = () => {
  return (
    <LazySection className="py-8 sm:py-12 md:py-16 bg-slate-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
            Here's What's Really Happening to <span className="text-blue-600 font-bold">Elite Surgeons</span> Like You…
          </h2>
        </div>

        {/* Opening Hook */}
        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg mb-8 border-l-4 border-blue-600">
          <div className="flex items-start space-x-4">
            <Target className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
            <div className="prose prose-lg max-w-none text-slate-700">
              <p className="text-base sm:text-lg leading-relaxed mb-4">
                You sacrificed everything to master the <span className="text-blue-600 font-bold">most demanding profession on earth</span>. Decades of your life. Your twenties. Sleep. Relationships. All to earn the right to be <span className="text-blue-600 font-bold">the hero that others can rely on</span>.
              </p>
            </div>
          </div>
        </div>

        {/* The Betrayal */}
        <div className="bg-red-50 rounded-xl p-6 sm:p-8 shadow-lg mb-8 border-l-4 border-red-500">
          <div className="flex items-start space-x-4">
            <AlertTriangle className="h-8 w-8 text-red-600 flex-shrink-0 mt-1" />
            <div className="prose prose-lg max-w-none text-slate-700">
              <p className="text-base sm:text-lg leading-relaxed mb-4">
                But the system that forged you into a <span className="text-blue-600 font-bold">surgical weapon</span> is now <span className="text-red-600 font-bold">systematically destroying</span> the very vitality that made you unstoppable in the first place.
              </p>
              <div className="bg-white rounded-lg p-4 border border-red-200">
                <p className="text-lg font-bold text-red-700 text-center">
                  This isn't your failure. This is systematic betrayal.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The System's Failure */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <Clock className="h-6 w-6 text-orange-600" />
              <h3 className="text-lg font-bold text-slate-900">The Broken System</h3>
            </div>
            <p className="text-slate-700 leading-relaxed">
              While you were perfecting your craft, the mainstream health industry was feeding you <span className="text-blue-600 font-bold">one-size-fits-all protocols</span> designed for desk workers and weekend warriors—completely ignoring the <span className="text-blue-600 font-bold">unique metabolic chaos</span> your high-stakes surgical career creates.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <Heart className="h-6 w-6 text-red-600" />
              <h3 className="text-lg font-bold text-slate-900">The Hidden Cost</h3>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Every <span className="text-blue-600 font-bold">24-hour shift</span>. Every <span className="text-blue-600 font-bold">3 AM emergency call</span>. Every <span className="text-blue-600 font-bold">life-or-death decision</span> has patients' livelihoods resting on your shoulders.
            </p>
          </div>
        </div>

        {/* The Current Reality */}
        <div className="bg-gradient-to-r from-slate-100 to-slate-200 rounded-xl p-6 sm:p-8 mb-8">
          <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">The Reality You're Living Now</h3>
          
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <p className="text-slate-700 leading-relaxed">
                Your body adapted to survive this <span className="text-blue-600 font-bold">surgical warfare</span>... but those same adaptations are now <span className="text-blue-600 font-bold">cannibalizing your metabolism</span> from the inside.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <p className="text-slate-700 leading-relaxed">
                Now you're the surgeon who <span className="text-blue-600 font-bold">trudges through your day</span> instead of commanding it. Who gets irritated by simple questions from residents who used to <span className="text-blue-600 font-bold">respect your endless patience</span>.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <p className="text-slate-700 leading-relaxed">
                Your mind still <span className="text-blue-600 font-bold">vigorously craves excellence</span>, but your body can't keep up with your standards and aspirations. Your confidence dwindles as the days go by.
              </p>
            </div>
          </div>
        </div>

        {/* Final Hook */}
        <div className="text-center bg-blue-50 rounded-xl p-6 sm:p-8 border border-blue-200">
          <p className="text-lg sm:text-xl font-bold text-slate-900 leading-relaxed">
            The gap between <span className="text-blue-600 font-bold">who you know you are</span> and <span className="text-blue-600 font-bold">how you feel</span> is getting <span className="text-blue-600 font-bold">impossible to ignore</span>.
          </p>
        </div>
      </div>
    </LazySection>
  );
};

export default ProblemSection;
