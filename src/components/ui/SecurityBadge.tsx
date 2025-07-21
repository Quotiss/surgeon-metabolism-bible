
import { Shield, Lock } from "lucide-react";

interface SecurityBadgeProps {
  className?: string;
}

const SecurityBadge = ({ className = "" }: SecurityBadgeProps) => {
  return (
    <div className={`flex items-center justify-center gap-2 text-sm text-slate-600 ${className}`}>
      <div className="flex items-center gap-1">
        <Lock className="h-4 w-4 text-green-600" />
        <span className="font-medium">100% Secure Checkout</span>
      </div>
      <span className="text-slate-400">•</span>
      <div className="flex items-center gap-1">
        <span className="text-slate-500">Powered by</span>
        <span className="font-semibold text-slate-700">Polar</span>
      </div>
    </div>
  );
};

export default SecurityBadge;
