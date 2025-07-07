import { CheckCircle, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import OptimizedContainer from "@/components/ui/OptimizedContainer";

const ThankYouCTASection = () => {
  const handleUpsellClick = () => {
    // TODO: Integrate with Polar modal for upsell
    console.log("Upsell CTA clicked");
  };

  return (
    <section className="py-16 bg-slate-900 text-white">
      <OptimizedContainer size="md" className="text-center">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Don't Risk Becoming Another Statistic
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
            You're one decision away from joining the <span className="text-blue-400 font-bold">5% who execute flawlessly</span> or joining the majority who wonder why they never achieve results
          </p>
        </div>
        
        <div className="mb-12">
          <div className="relative inline-block">
            {/* Enhanced glow effect for final CTA */}
            <div className="absolute inset-0 bg-blue-400 rounded-xl blur-xl opacity-40 animate-pulse"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 rounded-xl opacity-30 blur-sm"></div>
            <Button 
              onClick={handleUpsellClick}
              size="lg" 
              className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white text-2xl px-16 py-8 h-auto font-bold mb-8 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 border-2 border-blue-400"
            >
              <span className="flex items-center gap-3">
                <Zap className="h-6 w-6 text-yellow-400" />
                JOIN THE ELITE 5% - $97
                <Zap className="h-6 w-6 text-yellow-400" />
              </span>
            </Button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-lg text-slate-300 mb-8">
          <div className="flex items-center">
            <Shield className="h-6 w-6 mr-3 text-green-400" />
            <span>30-Day Money-Back Guarantee</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-6 w-6 mr-3 text-green-400" />
            <span>Instant Access</span>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-lg text-slate-300 leading-relaxed">
            Don't let implementation failure rob you of the transformation you deserve
          </p>
        </div>

        {/* Reinforced Urgency */}
        <div className="bg-red-900/30 border-2 border-red-500/50 rounded-xl p-8 max-w-2xl mx-auto">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-red-400 mb-4">
              ⚠️ THIS OFFER EXPIRES WHEN YOU LEAVE
            </h3>
            <p className="text-lg text-red-300 font-semibold mb-4">
              Don't join the 97% who hesitate and never get results
            </p>
            <p className="text-base text-slate-300">
              Close this page and this opportunity disappears forever
            </p>
          </div>
        </div>
      </OptimizedContainer>
    </section>
  );
};

export default ThankYouCTASection;
