
import { LucideIcon } from "lucide-react";

interface ValueStackItemProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

const ValueStackItem = ({ title, description, icon: IconComponent, index }: ValueStackItemProps) => {
  const formatDescription = (description: string, index: number) => {
    switch (index) {
      case 0: // Complete Precision Meal Plan
        return description
          .replace('No more wasting mental resources', '<span class="font-bold text-blue-600">No more wasting mental resources</span>')
          .replace('$500/session', '<span class="font-bold text-blue-600">$500/session</span>');
      
      case 1: // Mistake-Proof Timing
        return description
          .replace('guarantee conversion', '<span class="font-bold text-blue-600">guarantee conversion</span>')
          .replace('#1 reason surgeons plateau', '<span class="font-bold text-blue-600">#1 reason surgeons plateau</span>');
      
      case 2: // Emergency Protocols
        return description
          .replace('Bulletproof backup plans', '<span class="font-bold text-blue-600">Bulletproof backup plans</span>')
          .replace('while others break down', '<span class="font-bold text-blue-600">while others break down</span>');
      
      case 3: // Batch Prep Mastery
        return description
          .replace('Execute like an elite performer', '<span class="font-bold text-blue-600">Execute like an elite performer</span>')
          .replace('your most important asset', '<span class="font-bold text-blue-600">your most important asset</span>');
      
      default:
        return description;
    }
  };

  return (
    <div className="flex items-start space-x-4">
      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
        <IconComponent className="h-5 w-5 text-green-600" />
      </div>
      <div>
        <h4 className="font-bold text-lg text-slate-900 mb-2">
          {title}
        </h4>
        <p 
          className="text-slate-600"
          dangerouslySetInnerHTML={{ 
            __html: formatDescription(description, index) 
          }}
        />
      </div>
    </div>
  );
};

export default ValueStackItem;
