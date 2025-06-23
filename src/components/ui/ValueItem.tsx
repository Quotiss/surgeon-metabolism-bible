import { CheckCircle } from "lucide-react";
interface ValueItemProps {
  title: string;
  value: string;
  description: string;
}
const ValueItem = ({
  title,
  value,
  description
}: ValueItemProps) => {
  return <div className="flex items-start space-x-3 sm:space-x-4 p-4 rounded-lg bg-blue-50 border border-blue-200">
      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
        <CheckCircle className="h-3 w-3 sm:h-5 sm:w-5 text-blue-600" />
      </div>
      <div>
        <h4 className="font-bold text-base sm:text-lg text-slate-900">
          {title} <span className="text-black">({value})</span>
        </h4>
        <p className="text-slate-600 text-sm sm:text-base mt-1">
          {description}
        </p>
      </div>
    </div>;
};
export default ValueItem;