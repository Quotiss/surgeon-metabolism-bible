
import { Shield } from "lucide-react";
import SecurityBadge from "./SecurityBadge";

interface MobileGuaranteeProps {
  showFullDetails?: boolean;
  className?: string;
}

const MobileGuarantee = ({ showFullDetails = true, className = "" }: MobileGuaranteeProps) => {
  return (
    <div className={`space-y-4 ${className}`}>
      {showFullDetails && (
        <div className="flex items-center justify-center gap-2 text-center px-2">
          <Shield className="h-4 w-4 text-green-600 flex-shrink-0" />
          <div className="text-sm leading-relaxed">
            <span className="font-bold text-slate-800">$27 Full Access • ⚠️ Limited to First 500 Surgeons</span>
            <br />
            <span className="text-green-600 font-bold">30-day 100% money back guarantee</span>
          </div>
        </div>
      )}
      
      <div className="flex flex-col items-center gap-3">
        <SecurityBadge />
        <img 
          src="/lovable-uploads/36484096-74f6-40bb-988c-86af5ddd059a.png" 
          alt="30 Days Money Back Guarantee" 
          className="w-20 h-20 object-contain"
        />
      </div>
    </div>
  );
};

export default MobileGuarantee;
