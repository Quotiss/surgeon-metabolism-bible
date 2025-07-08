
import { Target, CheckCircle } from "lucide-react";

const ValueStackHeader = () => {
  return (
    <div className="text-center mb-12">
      <div className="flex justify-center mb-6">
        <div className="relative">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
            <Target className="h-8 w-8 text-white" />
          </div>
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <CheckCircle className="h-4 w-4 text-white" />
          </div>
        </div>
      </div>
      
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
        Introducing: The Elite 14-Day Implementation System
      </h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        The exact done-for-you blueprint that guarantees implementation success from the Surgeon Metabolism Bible
      </p>
    </div>
  );
};

export default ValueStackHeader;
