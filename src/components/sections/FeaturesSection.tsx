
import { Card, CardContent } from "@/components/ui/card";
import LazySection from "@/components/LazySection";

interface FeaturesSectionProps {
  onCTAClick: (location: string) => void;
}

const FeaturesSection = ({ onCTAClick }: FeaturesSectionProps) => {
  return (
    <LazySection className="py-8 sm:py-12 md:py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
            Plus you get these <span className="text-blue-600 font-bold">exclusive bonuses</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <Card className="p-4 sm:p-6 md:p-8 border-2 border-blue-200 bg-blue-50 hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-0 text-center">
              <h3 className="font-bold text-lg sm:text-xl text-slate-900 mb-3 sm:mb-4">
                Bonus #1: The Surgeon's Grocery Blueprint <span className="text-blue-600 font-bold">($97 Value)</span>
              </h3>
              <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4">
                Complete done-for-you shopping list organized by store sections for maximum efficiency. Never waste time wandering aisles again - get in, get the right stress-fighting foods, get out. Includes specific brands that work synergistically with your metabolic reset.
              </p>
            </CardContent>
          </Card>

          <Card className="p-4 sm:p-6 md:p-8 border-2 border-blue-200 bg-blue-50 hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-0 text-center">
              <h3 className="font-bold text-lg sm:text-xl text-slate-900 mb-3 sm:mb-4">
                Bonus #2: The Surgical Stress Supplement Stack <span className="text-blue-600 font-bold">($147 Value)</span>
              </h3>
              <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4">
                The exact supplementation protocol elite surgeons use to amplify their metabolic results. Each supplement is chosen specifically to work with your stress physiology - not against it. Includes dosing, timing, and which combinations accelerate fat burning while supporting energy and recovery.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-6 sm:mt-8">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
            <p className="text-lg sm:text-xl font-bold text-blue-600">Total Bonus Value: $244</p>
          </div>
        </div>

        {/* Case Study Section */}
        <div className="mt-12 sm:mt-16 md:mt-20">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
              Here's What Happened When One Surgeon Made The Switch
            </h2>
          </div>
          
          <Card className="p-6 sm:p-8 md:p-10 border-2 border-slate-200 bg-white shadow-lg">
            <CardContent className="p-0">
              <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                <p className="text-base sm:text-lg md:text-xl">
                  <span className="font-semibold text-blue-600">Dr. Mark T.</span>, a 44-year-old orthopedic surgeon, was hitting the wall every afternoon. <span className="italic">"I'd crush my morning surgeries, then by 2 PM I felt like I was moving through mud,"</span> he says. His wife noticed he'd stopped joining their weekend bike rides - he was <span className="text-blue-600 font-bold">just too drained</span>.
                </p>
                
                <p className="text-base sm:text-lg md:text-xl mt-4">
                  When Mark learned his <span className="text-blue-600 font-bold">erratic schedule was creating metabolic chaos</span>, he made a few simple adjustments to work with his stress patterns instead of against them. Within two weeks, that afternoon crash disappeared.
                </p>
                
                <p className="text-base sm:text-lg md:text-xl mt-4">
                  <span className="italic">"I actually had energy left for my family again. My wife joked that I got my old self back."</span> The best part? It required <span className="text-blue-600 font-bold">almost no extra time</span> - just doing things differently.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </LazySection>
  );
};

export default FeaturesSection;
