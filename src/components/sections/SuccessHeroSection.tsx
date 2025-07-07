
import { CheckCircle, Mail } from "lucide-react";
import OptimizedContainer from "@/components/ui/OptimizedContainer";

const SuccessHeroSection = () => {
  return (
    <section className="py-16 sm:py-20">
      <OptimizedContainer size="md" className="text-center">
        <div className="mb-8">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Purchase Complete!
          </h1>
          
          <p className="text-xl sm:text-2xl text-green-600 font-semibold mb-4">
            Welcome to Your Transformation Journey
          </p>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Your order has been processed successfully. You now have everything you need to optimize your metabolism and reclaim your energy as an elite surgeon.
          </p>
        </div>

        <div className="bg-white border-2 border-green-200 rounded-xl p-8 max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Check Your Email Now
          </h3>
          
          <p className="text-lg text-slate-700">
            Your complete Surgeon Metabolism Bible and all bonus materials are being delivered to your inbox as we speak.
          </p>
        </div>
      </OptimizedContainer>
    </section>
  );
};

export default SuccessHeroSection;
