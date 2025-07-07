
import { CheckCircle } from "lucide-react";
import OptimizedContainer from "@/components/ui/OptimizedContainer";

const ThankYouHeroSection = () => {
  return (
    <section className="py-12 sm:py-16">
      <OptimizedContainer size="md" className="text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Congratulations! But Don't Make The Same Mistake{" "}
            <span className="text-blue-600 font-bold">97% of Surgeons</span>{" "}
            Make Next...
          </h1>
          <div className="flex items-center justify-center mb-4">
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Check your email for download links - but first, here's the{" "}
              <span className="text-blue-600 font-bold">critical gap</span>{" "}
              that determines{" "}
              <span className="text-blue-600 font-bold">success or failure</span>
            </p>
          </div>
        </div>
      </OptimizedContainer>
    </section>
  );
};

export default ThankYouHeroSection;
