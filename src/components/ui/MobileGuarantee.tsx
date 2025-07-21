
import { Shield } from "lucide-react";
import SecurityBadge from "./SecurityBadge";

interface MobileGuaranteeProps {
  showFullDetails?: boolean;
  className?: string;
}

const MobileGuarantee = ({ showFullDetails = true, className = "" }: MobileGuaranteeProps) => {
  return (
    <div className={`space-y-3 ${className}`}>
      {showFullDetails && (
        <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
          <Shield className="h-4 w-4 text-green-600 flex-shrink-0" />
          <span className="text-slate-600 text-center">
            <span className="font-bold">$27 Full Access • ⚠️ Limited to First 500 Surgeons • </span>
            <span className="text-green-600 font-bold">30-day 100% money back guarantee</span>
          </span>
        </div>
      )}
      
      <div className="flex items-center justify-center gap-4">
        <SecurityBadge />
        <img 
          src="/lovable-uploads/36484096-74f6-40bb-988c-86af5ddd059a.png" 
          alt="30 Days Money Back Guarantee" 
          className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
        />
      </div>
    </div>
  );
};

export default MobileGuarantee;
