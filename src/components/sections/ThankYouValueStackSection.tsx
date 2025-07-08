import { CheckCircle, Target, AlertTriangle, BookOpen, Clock, MapPin, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import OptimizedContainer from "@/components/ui/OptimizedContainer";
import { POLAR_UPSELL_CHECKOUT_LINK } from "@/lib/constants";
import { usePolarCheckout } from "@/hooks/usePolarCheckout";
import { useNavigate } from "react-router-dom";
import { memo, useCallback } from "react";

const valueItems = [
  {
    title: "Complete Precision Meal Plan",
    description: "Every meal strategically mapped to natural energy cycles. No more wasting mental resources. What nutritionists charge $500/session for, handed to you on a silver platter",
    icon: ChefHat
  },
  {
    title: "Mistake-Proof Timing",
    description: "Exact nutritional timing to guarantee conversion into fat-burning fuel. This eliminates the #1 reason surgeons plateau",
    icon: Clock
  },
  {
    title: "Emergency Protocols",
    description: "Bulletproof backup plans for navigating the inevitable chaos - exact protocols for traveling, dining out, and maintaining stress-free flexibility while others break down at the first sign of slipping up",
    icon: MapPin
  },
  {
    title: "Batch Prep Mastery",
    description: "Streamline your entire week in under 2 hours. Execute like an elite performer while colleagues are stuck wasting resources on simple decisions. This single system pays for itself in time savings - your most important asset.",
    icon: BookOpen
  }
];

const ThankYouValueStackSection = memo(() => {
  const navigate = useNavigate();

  const handleUpsellSuccess = useCallback(() => {
    window.fbq?.("track", "Purchase", {
      currency: "USD",
      value: 97,
    });
  }, []);

  const { createCheckout } = usePolarCheckout({
    onSuccess: handleUpsellSuccess
  });

  const handleCTAClick = useCallback(async () => {
    console.log("Upsell CTA clicked");
    await createCheckout(POLAR_UPSELL_CHECKOUT_LINK);
  }, [createCheckout]);

  const handleSkipClick = useCallback(() => {
    navigate('/success');
  }, [navigate]);

  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50">
      <OptimizedContainer size="md">
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

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="space-y-8">
            {valueItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <IconComponent className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-slate-600">
                      {item.description.split('$500/session').map((part, i) => 
                        i === 0 ? part : (
                          <span key={i}>
                            <span className="font-bold text-blue-600">$500/session</span>
                            {part}
                          </span>
                        )
                      )}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mb-8">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-blue-400 rounded-lg blur-lg opacity-30 animate-pulse"></div>
            <Button 
              onClick={handleCTAClick}
              size="lg" 
              className="relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-xl px-12 py-6 h-auto font-bold transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border-2 border-blue-500"
            >
              <span className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                SECURE MY SUCCESS → $97
              </span>
            </Button>
          </div>
          
          <div className="mt-4">
            <button 
              onClick={handleSkipClick}
              className="text-slate-500 hover:text-slate-700 text-sm underline transition-colors"
            >
              No thanks, I'll risk it
            </button>
          </div>
        </div>

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
            <p className="text-lg font-semibold text-slate-800">
              This offer expires the moment you leave the page. It won't be offered again.
            </p>
            
            <p className="text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Don't let implementation failure waste your investment. Every hour you wait is another hour your metabolism stays in gridlock while <span className="font-bold text-blue-600">other surgeons pull ahead</span>.
            </p>
          </div>
        </div>
      </OptimizedContainer>
    </section>
  );
});

ThankYouValueStackSection.displayName = 'ThankYouValueStackSection';

export default ThankYouValueStackSection;
