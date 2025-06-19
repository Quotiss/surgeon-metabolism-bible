
import { Clock } from "lucide-react";

const UrgencySection = () => {
  return (
    <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 sm:p-6 mb-8 text-center">
      <div className="flex items-center justify-center mb-2">
        <Clock className="h-5 w-5 text-red-600 mr-2" />
        <p className="font-bold text-red-600 text-base sm:text-lg">
          Price increases to $97 in 24 hours
        </p>
      </div>
    </div>
  );
};

export default UrgencySection;
