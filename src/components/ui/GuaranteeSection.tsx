
import { Shield, CheckCircle } from "lucide-react";

interface GuaranteeSectionProps {
  className?: string;
  showLifetimeAccess?: boolean;
}

const GuaranteeSection = ({ className = "", showLifetimeAccess = false }: GuaranteeSectionProps) => {
  return (
    <div className={`flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-slate-600 ${className}`}>
      <div className="flex items-center">
        <Shield className="h-5 w-5 mr-2 text-green-500" />
        <span>30-Day Money-Back Guarantee</span>
      </div>
      <div className="flex items-center">
        <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
        <span>{showLifetimeAccess ? "Lifetime Access" : "Instant Access"}</span>
      </div>
    </div>
  );
};

export default GuaranteeSection;
