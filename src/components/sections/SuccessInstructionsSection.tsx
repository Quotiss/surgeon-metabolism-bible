
import { Mail, Download, BookOpen, Zap } from "lucide-react";
import OptimizedContainer from "@/components/ui/OptimizedContainer";
import InstructionStep from "@/components/ui/InstructionStep";
import { memo } from "react";

const instructionSteps = [
  {
    stepNumber: 1,
    title: "Check Your Email",
    description: "Look for an email from us with the subject \"Your Surgeon Metabolism Bible order confirmation\". Check your spam folder if you don't see it within 5 minutes.",
    icon: Mail,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    stepNumber: 2,
    title: "Download Your Materials",
    description: "Click the download links in your email to save all materials to your device. We recommend creating a dedicated folder for easy access.",
    icon: Download,
    iconColor: "text-green-600",
    bgColor: "bg-green-100"
  },
  {
    stepNumber: 3,
    title: "Start with Chapter 1",
    description: "Begin reading immediately. The Surgeon Metabolism Bible is designed for busy professionals - you can implement the first protocol within 24 hours.",
    icon: BookOpen,
    iconColor: "text-purple-600",
    bgColor: "bg-purple-100"
  }
];

const SuccessInstructionsSection = memo(() => {
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
          {instructionSteps.map((step) => (
            <InstructionStep
              key={step.stepNumber}
              {...step}
            />
          ))}

          <InstructionStep
            stepNumber={4}
            title="Take Action Today"
            description="Your transformation begins the moment you implement your first protocol. Don't let this investment sit idle -"
            icon={Zap}
            iconColor="text-yellow-600"
            bgColor="bg-yellow-100"
            isHighlighted={true}
          />
        </div>
      </OptimizedContainer>
    </section>
  );
});

SuccessInstructionsSection.displayName = 'SuccessInstructionsSection';

export default SuccessInstructionsSection;
