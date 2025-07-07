
import { CheckCircle, Download, BookOpen, Zap } from "lucide-react";
import OptimizedContainer from "@/components/ui/OptimizedContainer";

const SuccessInstructionsSection = () => {
  return (
    <section className="py-12 bg-white">
      <OptimizedContainer size="md">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
            Your Next Steps to Success
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Follow these simple steps to begin your transformation immediately
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex items-start space-x-6 p-6 bg-slate-50 rounded-xl">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-xl font-bold text-blue-600">1</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-600" />
                Check Your Email
              </h3>
              <p className="text-slate-700">
                Look for an email from us with the subject "Your Surgeon Metabolism Bible - Download Links Inside". Check your spam folder if you don't see it within 5 minutes.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-6 p-6 bg-slate-50 rounded-xl">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-xl font-bold text-green-600">2</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Download className="h-5 w-5 text-green-600" />
                Download Your Materials
              </h3>
              <p className="text-slate-700">
                Click the download links in your email to save all materials to your device. We recommend creating a dedicated folder for easy access.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-6 p-6 bg-slate-50 rounded-xl">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-xl font-bold text-purple-600">3</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-purple-600" />
                Start with Chapter 1
              </h3>
              <p className="text-slate-700">
                Begin reading immediately. The Surgeon Metabolism Bible is designed for busy professionals - you can implement the first protocol within 24 hours.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-6 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl border-2 border-blue-200">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Zap className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Take Action Today
              </h3>
              <p className="text-slate-700 font-medium">
                Your transformation begins the moment you implement your first protocol. Don't let this investment sit idle - <span className="text-blue-600 font-bold">elite surgeons execute immediately</span>.
              </p>
            </div>
          </div>
        </div>
      </OptimizedContainer>
    </section>
  );
};

export default SuccessInstructionsSection;
