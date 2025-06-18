
import { Card, CardContent } from "@/components/ui/card";
import { Target, Clock, Shield } from "lucide-react";
import LazySection from "@/components/LazySection";

const SolutionSection = () => {
  return (
    <LazySection className="py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
            The Solution: Metabolic & Hormonal Optimization
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600">
            Fix your metabolism at the root using a protocol designed specifically for high-performing surgeons
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          <Card className="p-4 sm:p-6 text-center hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
            <CardContent className="p-0">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Target className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg mb-2">Root Cause Approach</h3>
              <p className="text-slate-600 text-sm sm:text-base">Address insulin resistance, hormonal imbalances, and metabolic dysfunction—not just symptoms</p>
            </CardContent>
          </Card>

          <Card className="p-4 sm:p-6 text-center hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
            <CardContent className="p-0">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg mb-2">Time-Efficient</h3>
              <p className="text-slate-600 text-sm sm:text-base">Designed for your demanding schedule—maximum results with minimal time investment</p>
            </CardContent>
          </Card>

          <Card className="p-4 sm:p-6 text-center hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
            <CardContent className="p-0">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg mb-2">Evidence-Based</h3>
              <p className="text-slate-600 text-sm sm:text-base">Backed by the latest research in metabolic health and hormonal optimization</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </LazySection>
  );
};

export default SolutionSection;
