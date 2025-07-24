import { Shield } from "lucide-react";
interface CTAGuaranteeProps {
  showBadge?: boolean;
  className?: string;
}
const CTAGuarantee = ({
  showBadge = true,
  className = ""
}: CTAGuaranteeProps) => {
  return (
    <div className={`flex items-center justify-center gap-2 text-sm text-slate-600 ${className}`}>
      <Shield className="h-4 w-4" />
      <span>60-day money-back guarantee</span>
    </div>
  );
};
export default CTAGuarantee;