
import { AlertTriangle } from "lucide-react";

const UrgencySection = () => {
  return (
    <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-4 sm:p-6 mb-8 text-center">
      <div className="flex items-center justify-center mb-2">
        <AlertTriangle className="h-5 w-5 text-amber-600 mr-2" />
        <p className="font-bold text-amber-800 text-base sm:text-lg">
          Limited Early-Adopter Access - Only 500 Spots Available
        </p>
      </div>
    </div>
  );
};

export default UrgencySection;
