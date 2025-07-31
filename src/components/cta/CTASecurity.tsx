import { Lock } from "lucide-react";
interface CTASecurityProps {
  className?: string;
}
const CTASecurity = ({
  className = ""
}: CTASecurityProps) => {
  return (
    <div className={`flex items-center justify-center gap-2 text-sm text-slate-600 ${className}`}>
      <Lock className="h-4 w-4" />
      <span>🔒 SSL 256-bit encryption • Secure checkout</span>
    </div>
  );
};
export default CTASecurity;