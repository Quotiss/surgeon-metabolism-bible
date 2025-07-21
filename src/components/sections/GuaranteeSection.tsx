
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import SecurityBadge from "@/components/ui/SecurityBadge";
import { CTA_LOCATIONS } from "@/lib/constants";
import type { SectionProps } from "@/types/common";

const GuaranteeSection = ({ onCTAClick }: SectionProps) => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-slate-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        {/* Guarantee Badge */}
        <div className="flex justify-center mb-8">
          <img 
            src="/lovable-uploads/d8d4eb4c-c865-49cb-9cca-9201328face7.png" 
            alt="30 Days Money Back Guarantee" 
            className="w-48 h-48 object-contain"
          />
        </div>

        {/* Header */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 leading-tight">
          Your purchase is backed by our{" "}
          <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent font-black">
            UNCONDITIONAL MONEY BACK GUARANTEE
          </span>
        </h2>

        {/* Main Content */}
        <div className="text-left max-w-3xl mx-auto space-y-6 text-lg leading-relaxed mb-8">
          <p className="text-slate-200">
            Before making a serious commitment like this to take your health and performance to a whole new level, 
            I'd like to know what I'm buying and that it's backed by a solid money-back guarantee.
          </p>
          
          <p className="text-slate-200">
            Even though it's only $27, you worked for that money and it counts.
          </p>
          
          <p className="text-slate-200">
            <span className="font-bold text-white">Here's what I've arranged:</span>
          </p>
          
          <p className="text-slate-200">
            Purchase the Surgeon Metabolism Bible, run the included 24-hour Surgeon Shift Protocol, 
            read the modules, but more importantly, apply what I give you in there.
          </p>
          
          <p className="text-slate-200">
            If you're not happy for any reason at all, shoot us an email at{" "}
            <span className="text-blue-400 font-bold">support@surgeonmetabolismbible.com</span>{" "}
            and request a refund within 30 days.
          </p>
          
          <p className="text-white font-bold text-xl">
            We'll refund you the $27, no questions asked.
          </p>
          
          <p className="text-slate-200">
            <span className="font-bold text-white">Sound fair enough?</span>
          </p>
          
          <p className="text-white font-bold">
            Hit the button below to secure your copy of the Surgeon Metabolism Bible today!
          </p>
        </div>

        {/* CTA Button */}
        <div className="bg-gradient-to-r from-blue-50/10 to-slate-50/10 border-2 border-blue-200/30 rounded-2xl p-6 sm:p-8 mb-6">
          <p className="text-sm sm:text-base font-bold text-amber-400 mb-4 tracking-wide uppercase">
            ⚡ Limited to First 500 Surgeons Only
          </p>
          <Button 
            onClick={() => onCTAClick(CTA_LOCATIONS.MAIN_CTA)} 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-6 text-xl font-bold mb-4 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border-2 border-blue-500 h-auto"
          >
            Get Instant Access Now →
          </Button>
          <div className="space-y-2 mb-4">
            <div className="flex items-center justify-center gap-2">
              <Shield className="h-4 w-4 text-green-400" />
              <p className="text-sm text-slate-300">
                <span className="font-bold">$27 Full Access • ⚠️ Limited Availability • </span>
                <span className="text-green-400 font-bold">30-day 100% money back guarantee</span>
              </p>
            </div>
          </div>
          <SecurityBadge />
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
