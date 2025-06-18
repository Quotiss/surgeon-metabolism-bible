
import { Card, CardContent } from "@/components/ui/card";
import LazySection from "@/components/LazySection";

const ProblemSection = () => {
  return (
    <LazySection className="py-8 sm:py-12 md:py-16 bg-slate-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
            You're Successful in Surgery, But Your Body is Failing You
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600">
            Sound familiar? You're not alone. Here's what most surgeons are struggling with:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <Card className="p-4 sm:p-6 border-l-4 border-l-red-500 hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-0">
              <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-slate-900">The Energy Crisis</h3>
              <ul className="space-y-2 text-slate-700 text-sm sm:text-base">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Chronic fatigue that coffee can't fix</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Brain fog affecting your surgical precision</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>No energy left for family after long surgeries</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-4 sm:p-6 border-l-4 border-l-red-500 hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-0">
              <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-slate-900">The Performance Decline</h3>
              <ul className="space-y-2 text-slate-700 text-sm sm:text-base">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Weight gain despite restrictive diets</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Low libido and diminished performance</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Lost the respect and authority you once commanded</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-6 sm:mt-8 md:mt-12 p-4 sm:p-6 md:p-8 bg-white rounded-lg shadow-lg">
          <p className="text-sm sm:text-base md:text-lg text-slate-700 italic">
            "You've tried every diet, supplement, and biohack out there. Nothing works because you're treating symptoms, not the root cause."
          </p>
        </div>
      </div>
    </LazySection>
  );
};

export default ProblemSection;
