import { Target, Shield, Zap, Heart, CheckCircle, BookOpen, Clock, ArrowRight } from "lucide-react";
import LazySection from "@/components/LazySection";
import TrustBadge from "@/components/ui/TrustBadge";
import OptimizedButton from "@/components/ui/OptimizedButton";

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

        {/* Special Featured Protocol - Stands out */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 sm:p-8 rounded-xl shadow-xl mb-8 sm:mb-12 border-2 border-blue-500">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Clock className="h-6 w-6 sm:h-7 sm:w-7 text-blue-600" />
            </div>
            <h3 className="font-bold text-lg sm:text-xl text-white">The 24-Hour Surgeon Shift Protocol</h3>
            <p className="text-base sm:text-lg text-blue-50 leading-relaxed">
              A complete 24-hour step-by-step protocol guaranteed to give you a taste of <span className="font-bold text-white">razor-sharp mental clarity, sustained physical energy, and powerful attention and focus</span> that'll have you <span className="font-bold text-white">lapping your peers all day</span>.
            </p>
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

        <div className="bg-gradient-to-r from-blue-50/50 to-slate-50/30 border-l-4 border-blue-500/30 rounded-r-lg p-4 sm:p-6 my-6 sm:my-8">
          <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed mb-0">
            This isn't information you'll find within <span className="font-bold">mainstream health advice</span>. <span className="font-bold text-blue-600">Elite surgeons</span> have been quietly sharing this <span className="font-bold text-blue-600">blueprint</span> for years, paying top metabolic specialists <span className="font-bold text-blue-600">$500+ per session</span> to share their systems. <span className="font-bold">Most surgeons will never discover this exists</span> — which is why the fact <span className="font-bold text-blue-600">you're reading this means you're ready to join the top-performers who commit to not settling for mediocrity</span>.
          </p>
        </div>

        {/* CTA Button and Trust Badge */}
        <div className="flex flex-col items-center justify-center mt-8 sm:mt-12 space-y-6">
          <OptimizedButton variant="primary" size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 sm:px-12 py-4 sm:py-6 font-bold transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border-2 border-blue-500 h-auto">
            <div className="flex items-center justify-center gap-2">
              <span className="text-base sm:text-xl font-bold">Yes! I Want Instant Access Now</span>
              <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
            </div>
          </OptimizedButton>
          <TrustBadge />
        </div>
      </div>
    </LazySection>
  );
};

export default ScienceSection;
