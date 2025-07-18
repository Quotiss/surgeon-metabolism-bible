import { Check, BookOpen, Zap, Flame, Clock, Apple, Shield, Stethoscope } from "lucide-react";
import LazySection from "@/components/LazySection";
import HighlightedText from "@/components/ui/HighlightedText";
import OptimizedButton from "@/components/ui/OptimizedButton";
import { CTA_LOCATIONS } from "@/lib/constants";
import type { SectionProps } from "@/types/common";

const SolutionSection = ({ onCTAClick }: SectionProps) => {
  return (
    <LazySection className="py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
            But Here's What You've Missed...
          </h2>
        </div>
        
        <div className="prose prose-lg max-w-none text-slate-700 mb-8 sm:mb-12">
          <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Your surgical stress isn't your enemy—it's <HighlightedText>your unique edge</HighlightedText>.
          </p>
          
          <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Instead of fighting <HighlightedText>against</HighlightedText> the demands of your profession, these top performers learned to harness that <HighlightedText>same intense pressure</HighlightedText> and convert it into <HighlightedText>raw metabolic fuel</HighlightedText>. They're strolling into the OR with <HighlightedText>endless energy and poise</HighlightedText>. <HighlightedText>Commanding respect</HighlightedText> in every department meeting. <HighlightedText>Controlling conversations</HighlightedText> at medical conferences while their colleagues struggle to keep up.
          </p>
          
          <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Imagine <HighlightedText>striding through the hospital corridors with the same confidence and charisma</HighlightedText> you had in residency. <HighlightedText>Practically bulletproof</HighlightedText>. But now backed by decades of expertise and mastery. Effortlessly executing complex procedures with <HighlightedText>laser focus and presence</HighlightedText>. Returning home <HighlightedText>invigorated</HighlightedText> instead of depleted, <HighlightedText>entertaining</HighlightedText> your wife like the man you married, not the exhausted shell you've become.
          </p>
          
          <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Envision looking in the mirror and seeing the <HighlightedText>powerful physique that matches your surgical discipline</HighlightedText>. Stepping into rooms and <HighlightedText>immediately turning heads</HighlightedText> without saying a word. <HighlightedText>Outlasting</HighlightedText> surgeons half your age and watching them scramble to keep up with your pace.
          </p>
          
          <div className="bg-gradient-to-r from-blue-50/50 to-slate-50/30 border-l-4 border-blue-500/30 rounded-r-lg p-4 sm:p-6 my-6 sm:my-8">
            <p className="text-base sm:text-lg leading-relaxed mb-0 font-medium text-slate-800">
              This isn't fantasy. This is exactly how the <HighlightedText>select few have rewired and weaponized their biology</HighlightedText> to leave their colleagues in the dust - leaving everyone <HighlightedText>stunned by their mere existence</HighlightedText>.
            </p>
          </div>
        </div>

        <div className="mb-8 sm:mb-12">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 text-center">
            The Exact Mechanisms These Surgeons Are Using to Dominate...
          </h2>
          
          <div className="prose prose-lg max-w-none text-slate-700">
            <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Here's the <HighlightedText>hidden biological truth</HighlightedText> most surgeons overlook — your metabolism isn't broken, it's just been running on survival mode, constantly red-lining to keep you alive. Taking control of this exact mechanism is the key to unlocking the <HighlightedText>formidable physique</HighlightedText> you've spent years trying to reveal, and restoring the <HighlightedText>vitality and dominance</HighlightedText> you know you're capable of.
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Here's what happens when you flip that switch: By <HighlightedText>optimizing your circadian timing</HighlightedText> and aligning your fuel intake for <HighlightedText>metabolic supremacy</HighlightedText>, your body starts recovering faster than surgeons half your age. You're constantly <HighlightedText>invigorated</HighlightedText>. Exuding the most <HighlightedText>nonchalant competence and authority</HighlightedText>. Burning fat effortlessly while you sleep. Waking up <HighlightedText>refreshed</HighlightedText> after even the most brutally demanding days instead of needing three cups of coffee just to utter coherent sentences.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50/50 to-slate-50/30 border-l-4 border-blue-500/30 rounded-r-lg p-4 sm:p-6 my-6 sm:my-8">
              <p className="text-base sm:text-lg leading-relaxed mb-0 font-medium text-slate-800">
                Luckily, there's a <HighlightedText>simple blueprint</HighlightedText> to making this your reality, and sustaining it — <HighlightedText>without</HighlightedText> making massive overhauls to your chaotic schedule and giving up the few pleasures you have left that get you through each day.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8 sm:mb-12">
          <div className="bg-gradient-to-r from-blue-50/30 via-white to-blue-50/30 p-6 sm:p-8 rounded-2xl border border-blue-100/50 shadow-sm mb-6 sm:mb-8">
            <div className="flex justify-center items-center mb-4 sm:mb-6">
              <Zap className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600 mr-4" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 text-center">
                Introducing the <HighlightedText variant="gradient">Surgeon Metabolism Bible</HighlightedText>
              </h2>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-slate-700">
            <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              The <HighlightedText variant="gradient">Surgeon Metabolism Bible</HighlightedText> contains the exact, proven metabolic protocols elite surgeons are taking advantage of to <strong>supercharge</strong> their physiques, <strong>reclaim</strong> their mental edge, and easily <strong>surpass their colleagues</strong> who stay <strong>too afraid</strong> to make a change — all while integrating seamlessly with your ruthlessly chaotic schedule. <HighlightedText>No BS. Just efficiency</HighlightedText>.
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Organized into <HighlightedText>five unique, actionable modules</HighlightedText>, the <HighlightedText variant="gradient">Surgeon Metabolism Bible</HighlightedText> eBook is specifically designed to show you how to <HighlightedText>harness the surgical stress</HighlightedText> that's keeping you exhausted, out-of-shape, and constantly unmotivated into <HighlightedText>raw metabolic fuel</HighlightedText>, optimizing the biological mechanisms that <strong>shred pounds</strong> in your sleep and turn you into the <strong>commanding</strong> surgeon who has <strong>bulletproof</strong> resiliency, energy, and stamina. Not to mention turning you into a <strong>formidable force in the bedroom</strong>.
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              This is the gateway to reclaiming your <HighlightedText>biological superiority</HighlightedText>.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-50 to-white p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-100">
          <div className="text-center mb-6 sm:mb-8">
            <div className="flex justify-center items-center mb-3 sm:mb-4">
              <BookOpen className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600 mr-3" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600">
                What You'll Discover...
              </h2>
            </div>
            <p className="text-base sm:text-lg text-slate-600 mb-4">
              The exact system turning <span className="font-bold">exhausted, burnt-out surgeons</span> into <span className="font-bold">lean, sharp, and powerful operators</span>
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-5 sm:space-y-6">
            <div className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200">
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                  <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-white font-bold stroke-[3]" />
                </div>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700 font-medium">
                Building <HighlightedText>bulletproof energy that laughs in the face of your usual 2PM crash</HighlightedText>
              </p>
            </div>
            
            <div className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200">
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                  <Flame className="h-4 w-4 sm:h-5 sm:w-5 text-white font-bold stroke-[3]" />
                </div>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700 font-medium">
                Channeling <HighlightedText>surgical stress into raw calorie-burning fuel</HighlightedText>
              </p>
            </div>
            
            <div className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200">
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-white font-bold stroke-[3]" />
                </div>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700 font-medium">
                Harnessing <HighlightedText>your circadian timing to supercharge your physique</HighlightedText> (only 10 minutes per day)
              </p>
            </div>
            
            <div className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200">
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                  <Apple className="h-4 w-4 sm:h-5 sm:w-5 text-white font-bold stroke-[3]" />
                </div>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700 font-medium">
                Implementing <HighlightedText>precision nutrition timing to outperform your colleagues in the OR</HighlightedText>
              </p>
            </div>
            
            <div className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200">
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-white font-bold stroke-[3]" />
                </div>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700 font-medium">
                Why <HighlightedText>elite surgeons never feel "burnt out"</HighlightedText>
              </p>
            </div>
          </div>
        </div>

        {/* New CTA Section */}
        <div className="text-center mt-8 sm:mt-12">
          <OptimizedButton
            onClick={() => onCTAClick?.(CTA_LOCATIONS.MAIN_CTA)}
            variant="primary"
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-bold mb-3"
          >
            Get Instant Access Now →
          </OptimizedButton>
          <div className="flex items-center justify-center gap-2">
            <Check className="h-4 w-4 text-blue-600" />
            <p className="text-sm text-slate-600">
              Join the Elite and Reclaim your Vitality
            </p>
          </div>
        </div>
      </div>
    </LazySection>
  );
};

export default SolutionSection;
