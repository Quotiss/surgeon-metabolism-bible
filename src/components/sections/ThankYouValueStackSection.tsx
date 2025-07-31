import OptimizedContainer from "@/components/ui/OptimizedContainer";
import { Calendar, Clipboard, Users, Puzzle, ArrowRight, FileText, Play } from "lucide-react";

const ThankYouValueStackSection = () => {
  const valueItems = [
    {
      title: "14-Day Complete Done-For-You Meal Plan",
      icon: Calendar,
      description: "Sharper physique and unlimited energy without thinking. You'll know exactly what to eat, when to eat it, and how it supports your metabolic supremacy. No guesswork, no planning, no backtracking."
    },
    {
      title: "Batch Prep Blueprint",
      icon: Clipboard,
      description: "Win the week in 90 minutes. Save 5+ hours each week while guaranteeing consistency and momentum, even during your busiest OR days."
    },
    {
      title: "Dining Out & Social Survival Guide",
      icon: Users,
      description: "Stay on track without staying home. Know exactly how to eat out, manage social events, and navigate real life — without being the \"weird diet guy\"."
    },
    {
      title: "Mix & Match Meal Builder",
      icon: Puzzle,
      description: "Flexibility without friction. Build custom meals using protocol-approved ingredients that match your cravings, macros, or mood. There are no bad foods. Only bad ingredients."
    },
    {
      title: "Post-Reset Transition Plan",
      icon: ArrowRight,
      description: "Lock in your results. For good. You'll know exactly how to stabilize and maintain the results you've made, without sliding backwards or crashing your hormones. Built specifically for your high-performance surgical lifestyle."
    },
    {
      title: "Quick Start Cheatsheet",
      icon: FileText,
      description: "Don't overthink it. Just start. One page tells you what to eat, prep, and avoid in your first 24 hours. Feel the shift immediately."
    },
    {
      title: "Loom Video Walkthrough",
      icon: Play,
      description: "Zero confusion. Zero delay. I walk you through exactly how to use the system. Instant clarity and complete execution confidence in under 10 minutes."
    },
  ];

  return (
    <section className="py-16 bg-blue-600">
      <OptimizedContainer size="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            Here's What You'll Get With Your 14-Day Surgeon Metabolism Bible Implementation System
          </h2>
          
          {/* Space reserved for large photo asset */}
          <div className="bg-slate-200 border-2 border-dashed border-slate-300 rounded-xl p-12 mb-12 max-w-2xl mx-auto">
            <p className="text-slate-500 text-lg">
              [Space reserved for large photo asset]
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {valueItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <div className="space-y-4 text-white leading-relaxed">
            <p>
              For an elite surgeon like yourself, time is the most valuable resource on the planet.
            </p>
            <p>
              Everything in this implementation system is specifically designed to have your mental energy firing on all cylinders and metabolism running like a blast furnace — in as little time as possible.
            </p>
            <p>
              Your patients in the OR rely on your mental bandwidth to operate at max capacity.
            </p>
            <p>
              While all the information from the Surgeon Metabolism Bible is here for you, implementing it can be frustrating.
            </p>
            <p>
              Don't force yourself to do it alone. Everything is taken care of for you right here.
            </p>
          </div>
        </div>
      </OptimizedContainer>
    </section>
  );
};

export default ThankYouValueStackSection;