
import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface InstructionStepProps {
  stepNumber: number;
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
  bgColor: string;
  isHighlighted?: boolean;
}

const InstructionStep = ({ 
  stepNumber, 
  title, 
  description, 
  icon: Icon, 
  iconColor, 
  bgColor,
  isHighlighted = false 
}: InstructionStepProps) => {
  return (
    <div className={`flex items-start space-x-6 p-6 rounded-xl ${isHighlighted ? 'bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-200' : 'bg-slate-50'}`}>
      <div className={`w-12 h-12 ${bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
        <span className={`text-xl font-bold ${iconColor}`}>{stepNumber}</span>
      </div>
      <div>
        <h3 className={`text-xl font-bold text-slate-900 mb-2 flex items-center gap-2`}>
          <Icon className={`h-5 w-5 ${iconColor.replace('text-', 'text-')}`} />
          {title}
        </h3>
        <p className={`text-slate-700 ${isHighlighted ? 'font-medium' : ''}`}>
          {description}
          {isHighlighted && (
            <span className="text-blue-600 font-bold"> elite surgeons execute immediately</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default InstructionStep;
