
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const features = [
  "Evidence-based metabolic strategies designed for surgical schedules",
  "Quick energy optimization techniques between cases",
  "Stress-adapted nutrition protocols for 12+ hour days",
  "Recovery methods that work with unpredictable call schedules",
  "Mental clarity enhancement for critical decision-making",
  "Sustainable habits that fit your surgical lifestyle"
];

const FeaturesSection = () => {
  const handleCTAClick = () => {
    if ((window as any).openPolarCheckout) {
      (window as any).openPolarCheckout('features');
    }
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            What You'll Get Inside The Surgeon's Metabolism Bible
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 text-left">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700 font-medium">{feature}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-blue-200">
            <p className="text-2xl font-bold text-blue-600 mb-4">
              Limited Time: $27 (Regular Price: $97)
            </p>
            <Button 
              size="lg" 
              onClick={handleCTAClick}
              className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 text-lg"
            >
              Get Instant Access Now
            </Button>
            <p className="text-sm text-slate-600 mt-4">
              Instant download • 30-day money-back guarantee • For surgeons only
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
