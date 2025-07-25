import { Button } from "@/components/ui/button";
import { CheckCircle, BookOpen, Gift, Pill, Star, Check, Shield } from "lucide-react";
import { PRODUCT_PRICING, CTA_LOCATIONS } from "@/lib/constants";
import CompleteCTA from "@/components/cta/CompleteCTA";
import TrustBadge from "@/components/ui/TrustBadge";
import type { SectionProps } from "@/types/common";
const ProductValueSection = ({
  onCTAClick
}: SectionProps) => {
  return <div className="bg-white border-2 border-blue-200 rounded-xl shadow-xl p-6 sm:p-8 md:p-10 mb-8">
      {/* Header Section */}
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="mobile-h2 text-slate-900 mb-6 leading-tight">
          Join The <span className="text-blue-600 font-bold">Elite Surgeons</span> Who Invest In Themselves
        </h2>
        <h3 className="mobile-h3 text-slate-900 mb-6">
          Here's What You get With the <span className="text-blue-600 font-bold">Surgeon Metabolism Bible</span>...
        </h3>
        <div className="flex items-center justify-center gap-3 mb-4">
          
          <p className="mobile-body text-slate-600 max-w-5xl mx-auto leading-relaxed">
            The <span className="font-bold">exact tools</span> and protocols you need to effortlessly reveal muscle, reclaim your mental edge, dominate your peers, and take back control of your internal energy that the system <span className="font-bold">stole from you</span>. Built specifically for those who seek to thrive in surgical chaos, and are <span className="font-bold">committed to excellence</span>.
          </p>
        </div>
      </div>

      {/* Product Components */}
      <div className="grid gap-6 sm:gap-8 mb-10 sm:mb-12">
        {/* Main Product - eBook */}
        <div className="p-4 sm:p-6 lg:p-8 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
            {/* Icon and Text Content */}
            <div className="w-full lg:flex-1 text-center lg:text-left px-2 sm:px-4 lg:px-0">
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
                <BookOpen className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600 flex-shrink-0" />
                <div className="flex-1 max-w-2xl lg:max-w-none">
                  <h4 className="mobile-h4 text-blue-600 mb-3">
                    Surgeon Metabolism Bible 5-module eBook
                  </h4>
                  <p className="mobile-body-small text-slate-700 mb-4">
                    Comprehensive 5-module eBook covering the exact metabolic protocols to regain your competitive edge WITHOUT uprooting your life
                  </p>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start space-y-2 sm:space-y-0 sm:space-x-2 mb-4">
                    <Star className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <p className="mobile-body-small text-slate-700 font-medium">
                      Includes the <span className="text-blue-600 font-bold">24-Hour Surgeon-Shift Protocol</span> for a taste of the system that gets results in <span className="text-blue-600 font-bold">ONE DAY</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Product Image */}
            <div className="w-full lg:w-96 flex justify-center">
              <img src="/lovable-uploads/6cdd542e-6d8d-4bfb-bbce-616c53019b5a.png" alt="The Surgeon Metabolism Bible 5-Module eBook on laptop" className="w-full max-w-sm sm:max-w-md lg:max-w-3xl h-auto rounded-lg shadow-lg" />
            </div>
          </div>
        </div>

        {/* Bonus Items */}
        <div className="p-4 sm:p-6 lg:p-8 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6 text-center sm:text-left px-2 sm:px-4 lg:px-0">
            <Gift className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600 flex-shrink-0" />
            <div className="flex-1 max-w-2xl lg:max-w-none">
              <h4 className="mobile-h4 text-blue-600 mb-3">
                Quick Start Bonus #1: The Surgeon's Grocery Blueprint
              </h4>
              <p className="mobile-body-small text-slate-700 mb-4">
                MUST HAVE done-for-you shopping template designed for fast-moving surgeons who don't have any time to waste. Designed for maximum efficiency.
              </p>
              
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6 lg:p-8 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6 text-center sm:text-left px-2 sm:px-4 lg:px-0">
            <Pill className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600 flex-shrink-0" />
            <div className="flex-1 max-w-2xl lg:max-w-none">
              <h4 className="mobile-h4 text-blue-600 mb-3">
                Quick Start Bonus #2: The Surgical Stress Supplement Stack
              </h4>
              <p className="mobile-body-small text-slate-700 mb-4">
                Revealing the exact supplementation protocol elite surgeons use to amplify their results and maximize performance. Designed specifically for your stress physiology and recovery demands.
              </p>
              
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex flex-col items-center justify-center mt-8 sm:mt-12 space-y-4">
        <CompleteCTA onCTAClick={() => onCTAClick(CTA_LOCATIONS.MAIN_CTA)} size="large" showPricing={false} showSecurity={false} showGuarantee={false} buttonText="Yes! I Want Instant Access Now" />
        <p className="text-base sm:text-lg text-slate-600 font-semibold text-center">Reclaim Your Energy and Physique in 30 Days Or Less</p>
        
        {/* Product Image */}
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto mt-6 mb-4">
          <img 
            src="/lovable-uploads/71f3c678-7457-4ccb-807c-58f758509b1b.png" 
            alt="The Surgeon Metabolism Bible 5-Module eBook" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        
        <TrustBadge />
      </div>
    </div>;
};
export default ProductValueSection;