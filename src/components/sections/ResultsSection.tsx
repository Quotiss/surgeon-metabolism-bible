
import { CheckCircle } from "lucide-react";
import LazySection from "@/components/LazySection";

const ResultsSection = () => {
  return (
    <LazySection className="py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
            Transform Your Body & Performance
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600">
            What you can expect when you follow the protocol
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-0 rounded-lg hover:bg-slate-50 transition-colors duration-200">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-3 w-3 sm:h-5 sm:w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg text-slate-900">Restored Energy</h3>
                <p className="text-slate-600 text-sm sm:text-base">Feel sharp and energized throughout 12-hour surgeries</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-0 rounded-lg hover:bg-slate-50 transition-colors duration-200">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-3 w-3 sm:h-5 sm:w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg text-slate-900">Mental Clarity</h3>
                <p className="text-slate-600 text-sm sm:text-base">Eliminate brain fog and enhance surgical precision</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-0 rounded-lg hover:bg-slate-50 transition-colors duration-200">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-3 w-3 sm:h-5 sm:w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg text-slate-900">Effortless Weight Management</h3>
                <p className="text-slate-600 text-sm sm:text-base">Lose stubborn weight without restrictive dieting</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-0 rounded-lg hover:bg-slate-50 transition-colors duration-200">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-3 w-3 sm:h-5 sm:w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg text-slate-900">Enhanced Performance</h3>
                <p className="text-slate-600 text-sm sm:text-base">Reclaim vitality and sexual health</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-0 rounded-lg hover:bg-slate-50 transition-colors duration-200">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-3 w-3 sm:h-5 sm:w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg text-slate-900">Family Energy</h3>
                <p className="text-slate-600 text-sm sm:text-base">Have energy left for what matters most</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-0 rounded-lg hover:bg-slate-50 transition-colors duration-200">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-3 w-3 sm:h-5 sm:w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg text-slate-900">Professional Authority</h3>
                <p className="text-slate-600 text-sm sm:text-base">Command respect with renewed confidence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LazySection>
  );
};

export default ResultsSection;
