
import { Card, CardContent } from "@/components/ui/card";

const CaseStudy = () => {
  return (
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
  );
};

export default CaseStudy;
