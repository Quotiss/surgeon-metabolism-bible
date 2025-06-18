
import LazySection from "@/components/LazySection";

const FooterSection = () => {
  return (
    <LazySection>
      <footer className="py-8 sm:py-12 md:py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Policy Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12">
            
            {/* Terms of Service */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Terms of Service</h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                By using this site or purchasing a product, you agree to not share, reproduce, or 
                distribute any of the materials without written permission. This content is for 
                educational purposes only and is not a substitute for medical advice. Use at your 
                own discretion.
              </p>
            </div>

            {/* Privacy Policy */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Privacy Policy</h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                We respect your privacy. We collect minimal personal information (name, email, 
                payment details) to fulfill your order and deliver your products. We do not sell or 
                share your information with third parties. All data is handled through secure 
                platforms like Gumroad and our email provider.
              </p>
            </div>

            {/* Refund Policy */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Refund Policy</h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                We offer a 30-day, 100% money-back guarantee. If you're not satisfied with your 
                purchase for any reason, simply email us within 30 days of your order and we'll 
                issue a full refund — no questions asked. Your satisfaction is our priority.
              </p>
            </div>

          </div>

          {/* Bottom Section */}
          <div className="border-t border-slate-700 pt-6 sm:pt-8">
            <div className="text-center">
              <p className="text-slate-400 mb-4 sm:mb-6 text-sm sm:text-base">
                © 2024 Surgeon Metabolism Bible. All rights reserved.
              </p>
              
              <p className="text-xs text-slate-500">
                This product is not intended to diagnose, treat, cure, or prevent any disease.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </LazySection>
  );
};

export default FooterSection;
