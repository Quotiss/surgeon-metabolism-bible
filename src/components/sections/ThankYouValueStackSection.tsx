import OptimizedContainer from "@/components/ui/OptimizedContainer";
import { Calendar, Clipboard, Users, Puzzle, ArrowRight, FileText, Play } from "lucide-react";

const ThankYouValueStackSection = () => {
  const valueItems = [
    {
      title: "14-Day Complete Done-For-You Meal Plan",
      icon: Calendar,
    },
    {
      title: "Batch Prep Blueprint",
      icon: Clipboard,
    },
    {
      title: "Dining Out & Social Survival Guide",
      icon: Users,
    },
    {
      title: "Mix & Match Meal Builder",
      icon: Puzzle,
    },
    {
      title: "Post-Reset Transition Plan",
      icon: ArrowRight,
    },
    {
      title: "Quick Start Cheatsheet",
      icon: FileText,
    },
    {
      title: "Loom Video Walkthrough",
      icon: Play,
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
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {item.title}
                    </h3>
                    <div className="bg-slate-100 border border-dashed border-slate-300 rounded-lg p-4">
                      <p className="text-slate-500 text-sm">
                        [Space for body copy]
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </OptimizedContainer>
    </section>
  );
};

export default ThankYouValueStackSection;