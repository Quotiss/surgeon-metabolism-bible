
import { ChefHat, Clock, MapPin, BookOpen } from "lucide-react";
import OptimizedContainer from "@/components/ui/OptimizedContainer";
import { memo } from "react";
import ValueStackHeader from "./value-stack/ValueStackHeader";
import ValueStackItem from "./value-stack/ValueStackItem";
import ValueStackCTA from "./value-stack/ValueStackCTA";
import LimitedAccessPricing from "./value-stack/LimitedAccessPricing";

const valueItems = [
  {
    title: "Complete Precision Meal Plan",
    description: "Every meal strategically mapped to natural energy cycles. No more wasting mental resources. What nutritionists charge $500/session for, handed to you on a silver platter",
    icon: ChefHat
  },
  {
    title: "Mistake-Proof Timing",
    description: "Exact nutritional timing to guarantee conversion into fat-burning fuel. This eliminates the #1 reason surgeons plateau",
    icon: Clock
  },
  {
    title: "Emergency Protocols",
    description: "Bulletproof backup plans for navigating the inevitable chaos - exact protocols for traveling, dining out, and maintaining stress-free flexibility while others break down at the first sign of slipping up",
    icon: MapPin
  },
  {
    title: "Batch Prep Mastery",
    description: "Streamline your entire week in under 2 hours. Execute like an elite performer while colleagues are stuck wasting resources on simple decisions. This single system pays for itself in time savings - your most important asset.",
    icon: BookOpen
  }
];

const ThankYouValueStackSection = memo(() => {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50">
      <OptimizedContainer size="md">
        <ValueStackHeader />

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="space-y-8">
            {valueItems.map((item, index) => (
              <ValueStackItem
                key={index}
                title={item.title}
                description={item.description}
                icon={item.icon}
                index={index}
              />
            ))}
          </div>
        </div>

        <ValueStackCTA />

        <LimitedAccessPricing />
      </OptimizedContainer>
    </section>
  );
});

ThankYouValueStackSection.displayName = 'ThankYouValueStackSection';

export default ThankYouValueStackSection;
