
import { AlertTriangle } from "lucide-react";

const LimitedAccessPricing = () => {
  return (
    <div className="bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200 rounded-xl p-8 text-center">
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
          <AlertTriangle className="h-6 w-6 text-amber-600" />
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-slate-900 mb-6">
        Limited Access Pricing
      </h3>
      
      <div className="flex justify-center items-center gap-8 mb-6">
        <div className="text-center">
          <p className="text-sm text-slate-600 font-medium mb-1">Today</p>
          <p className="text-3xl font-bold text-blue-600">$97</p>
        </div>
        
        <div className="text-slate-400 text-2xl">|</div>
        
        <div className="text-center">
          <p className="text-sm text-slate-600 font-medium mb-1">Tomorrow</p>
          <p className="text-2xl font-bold text-slate-500">
            $147 <span className="text-sm font-normal">(if available)</span>
          </p>
        </div>
      </div>
      
      <div className="space-y-4">
        <p className="text-lg font-bold text-red-600">
          This offer expires the moment you leave the page. It won't be offered again.
        </p>
        
        <p className="text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
          Don't let implementation failure waste your investment. Every hour you wait is another hour your metabolism stays in gridlock while <span className="font-bold text-blue-600">other surgeons pull ahead</span>.
        </p>
      </div>
    </div>
  );
};

export default LimitedAccessPricing;
