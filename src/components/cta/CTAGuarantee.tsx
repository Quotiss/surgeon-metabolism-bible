import { Shield } from "lucide-react";
interface CTAGuaranteeProps {
  showBadge?: boolean;
  className?: string;
}
const CTAGuarantee = ({
  showBadge = true,
  className = ""
}: CTAGuaranteeProps) => {
  return <div className={`flex flex-col items-center gap-2 ${className}`}>
      {showBadge && <img src="/lovable-uploads/36484096-74f6-40bb-988c-86af5ddd059a.png" alt="30 Days Money Back Guarantee" className="w-14 h-14 object-contain" />}
      <div className="flex items-center justify-center gap-1.5 text-xs text-center">
        
        <span className="text-green-600 font-semibold">30-day 100% money back guarantee</span>
      </div>
    </div>;
};
export default CTAGuarantee;