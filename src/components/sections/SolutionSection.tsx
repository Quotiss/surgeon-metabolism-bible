import { Check, BookOpen, Zap, Flame, Clock, Apple, Shield, Stethoscope, Battery, Heart, ArrowRight } from "lucide-react";
import LazySection from "@/components/LazySection";
import HighlightedText from "@/components/ui/HighlightedText";
import OptimizedButton from "@/components/ui/OptimizedButton";
import TrustBadge from "@/components/ui/TrustBadge";
import { CTA_LOCATIONS } from "@/lib/constants";
import type { SectionProps } from "@/types/common";
const SolutionSection = ({
  onCTAClick
}: SectionProps) => {
  return <LazySection className="py-8 sm:py-12 md:py-16">
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 text-center">
                Introducing the <HighlightedText variant="gradient">Surgeon Metabolism Bible</HighlightedText>
              </h2>
            </div>
            <div className="flex justify-center">
              <BookOpen className="h-12 w-12 text-blue-600" />
            </div>
          </div>
          
          
          <div className="flex justify-center my-6 sm:my-8">
            <TrustBadge size="medium" />
          </div>
          
          <div className="prose prose-lg max-w-none text-slate-700">
            <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              The <HighlightedText variant="gradient">Surgeon Metabolism Bible</HighlightedText> contains the exact, proven metabolic protocols elite surgeons are taking advantage of to <strong>supercharge</strong> their physiques, <strong>reclaim</strong> their mental edge, and easily <strong>surpass their colleagues</strong> who stay <strong>too afraid</strong> to make a change — all while integrating seamlessly with your ruthlessly chaotic schedule. <HighlightedText>No BS. Just efficiency</HighlightedText>.
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Organized into <HighlightedText>five unique, actionable modules</HighlightedText>, the <HighlightedText variant="gradient">Surgeon Metabolism Bible</HighlightedText> eBook is specifically designed to show you how to <HighlightedText>harness the surgical stress</HighlightedText> that's keeping you exhausted, out-of-shape, and constantly unmotivated into <HighlightedText>raw metabolic fuel</HighlightedText>, optimizing the biological mechanisms that <strong>shred pounds</strong> in your sleep and turn you into the <strong>commanding</strong> surgeon who has <strong>bulletproof</strong> resiliency, energy, and stamina. Not to mention turning you into a <strong>formidable force in the bedroom</strong>.
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              The best part? <HighlightedText><strong>30 days</strong></HighlightedText> is all it takes to reverse the biological damage the system has done to you.
            </p>
            
            {/* Quick-Win Paragraph */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 max-w-4xl mx-auto my-6 sm:my-8">
              <div className="flex items-start space-x-4">
                <Zap className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-lg text-slate-700 leading-relaxed text-left">
                  Additionally, you'll get an <span className="font-bold text-blue-600">instant taste</span> of what it feels like to embody the <span className="font-bold">confidence, sharpness, and motivation</span> of <span className="font-bold text-blue-600">the elite surgeon</span> you know you're destined to be. Inside the Surgeon Metabolism Bible, you'll run through the <span className="font-bold text-blue-600">24 Hour Surgeon-Shift Protocol</span> — a step-by-step, time-efficient protocol that guarantees <span className="font-bold">increased mental clarity, vitality, and deep recovery</span> — in <span className="font-bold text-blue-600">only 24 hours</span>
                </p>
              </div>
            </div>
            
            
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center my-8 sm:my-12">
          {/* Pricing */}
          <div className="mb-6">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-2">
              ONLY <span className="line-through text-slate-400">$97.00</span> $27
            </div>
            <p className="text-lg sm:text-xl text-slate-700 font-semibold">
              (SAVE $70.00 TODAY)
            </p>
          </div>
          
          {/* CTA Button */}
          <OptimizedButton onClick={() => onCTAClick?.(CTA_LOCATIONS.MAIN_CTA)} variant="primary" size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 sm:px-12 py-4 sm:py-6 font-bold mb-4 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border-2 border-blue-500 h-auto">
            <div className="flex items-center justify-center gap-2">
              <span className="text-base sm:text-xl font-bold">Yes! I Want Instant Access Now</span>
              <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
            </div>
          </OptimizedButton>
          
          <p className="text-sm sm:text-base text-slate-600 font-medium mb-4">
            Reclaim your energy and physique in 30 days or less
          </p>
          
          {/* Secure Payments */}
          <div className="flex items-center justify-center gap-2 mb-4 text-sm text-slate-600">
            <Shield className="h-4 w-4 text-green-600" />
            <span className="font-medium">Secure Payments • Powered by Polar</span>
          </div>
          
          {/* Guarantee Badge */}
          <div className="flex justify-center mt-4">
            <img src="/lovable-uploads/5a79b5e8-8c21-4078-a3fe-4150e6d0be4b.png" alt="30-Day Money Back Guarantee" className="h-16 w-auto" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-50 to-white p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-100">
          <div className="text-center mb-6 sm:mb-8">
            <div className="flex justify-center items-center mb-3 sm:mb-4">
              <BookOpen className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600 mr-1" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 text-center">
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
                  <Battery className="h-4 w-4 sm:h-5 sm:w-5 text-white font-bold stroke-[3]" />
                </div>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700 font-semibold">
                Building <span className="font-bold text-blue-600">bulletproof energy</span> that laughs in the face of your usual 2PM crash
              </p>
            </div>
            
            <div className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200">
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                  <Flame className="h-4 w-4 sm:h-5 sm:w-5 text-white font-bold stroke-[3]" />
                </div>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700 font-semibold">
                Channeling surgical stress into <span className="font-bold text-blue-600">raw calorie-burning fuel</span>
              </p>
            </div>
            
            <div className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200">
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                  <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-white font-bold stroke-[3]" />
                </div>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700 font-semibold">
                Harnessing your circadian timing to <span className="font-bold text-blue-600">supercharge your physique</span> (only 10 minutes per day)
              </p>
            </div>
            
            <div className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200">
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                  <Stethoscope className="h-4 w-4 sm:h-5 sm:w-5 text-white font-bold stroke-[3]" />
                </div>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700 font-semibold">
                Implementing precision nutrition timing to <span className="font-bold text-blue-600">outperform your colleagues</span> in the OR
              </p>
            </div>
            
            <div className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200">
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                  <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-white font-bold stroke-[3]" />
                </div>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700 font-semibold">
                Optimizing your hormonal pathways to leave your wife in awe of your <span className="font-bold text-blue-600">superhuman libido and vitality</span>
              </p>
            </div>
          </div>
        </div>

        {/* New CTA Section */}
        <div className="text-center mt-8 sm:mt-12">
          <div className="p-6 sm:p-8 mb-6">
            <OptimizedButton onClick={() => onCTAClick?.(CTA_LOCATIONS.MAIN_CTA)} variant="primary" size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 sm:px-12 py-4 sm:py-6 font-bold mb-3 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border-2 border-blue-500 h-auto">
              <div className="flex items-center justify-center gap-2">
                <span className="text-base sm:text-xl font-bold">Yes! I Want Instant Access Now</span>
                <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
              </div>
            </OptimizedButton>
            
            <p className="text-sm sm:text-base text-slate-600 font-medium mb-6">
              Reclaim your energy and physique in 30 days or less
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <TrustBadge size="medium" />
              
            </div>
          </div>
        </div>
      </div>
    </LazySection>;
};
export default SolutionSection;