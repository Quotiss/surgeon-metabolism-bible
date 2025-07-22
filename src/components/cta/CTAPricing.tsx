import { Shield } from "lucide-react";
interface CTAPricingProps {
  showFullDetails?: boolean;
  className?: string;
}
const CTAPricing = ({
  showFullDetails = true,
  className = ""
}: CTAPricingProps) => {
  if (!showFullDetails) {
    return <div className={`text-center text-xs text-slate-600 ${className}`}>
        <span className="font-bold">$27 Full Access</span>
      </div>;
  }
  return <div className={`flex items-center justify-center gap-2 text-center ${className}`}>
      
      <div className="text-xs sm:text-sm leading-tight">
        <div className="font-bold text-slate-800">
          $27 Full Access • ⚠️ Limited to First 500 Surgeons
        </div>
      </div>
    </div>;
};
export default CTAPricing;