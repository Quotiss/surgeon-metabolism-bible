import { Lock } from "lucide-react";
interface CTASecurityProps {
  className?: string;
}
const CTASecurity = ({
  className = ""
}: CTASecurityProps) => {
  return (
    <div className={`flex items-center justify-center gap-2 text-sm text-slate-600 ${className}`}>
      <Lock className="h-4 w-4 text-slate-600" />
      <span className="font-medium">Secure Payments • Powered by Polar</span>
      <img src="/lovable-uploads/1b880e80-7d58-4ceb-84cd-6924a42f8ea0.png" alt="Polar Logo" className="h-4 w-4" />
    </div>
  );
};
export default CTASecurity;