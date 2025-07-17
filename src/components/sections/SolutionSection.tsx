import { Check, BookOpen, Zap, Flame, Clock, Apple, Shield, Target, Lightbulb } from "lucide-react";
import LazySection from "@/components/LazySection";
import HighlightedText from "@/components/ui/HighlightedText";

const SolutionSection = () => {
  return (
    <LazySection className="py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <div className="bg-gradient-to-r from-green-50/80 to-blue-50/60 rounded-xl p-6 sm:p-8 border border-green-100/50">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <Lightbulb className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-slate-900">
                But Here's What You've Missed...
              </h2>
            </div>
          </div>
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

        {/* Bridge Section */}
        <div className="mb-8 sm:mb-12">
          <div className="bg-gradient-to-r from-blue-50/60 to-slate-50/40 rounded-xl p-6 sm:p-8 border border-blue-100/50">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <Target className="h-5 w-5 text-blue-600" />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 text-center">
                The Exact Mechanisms These Surgeons Are Using to Dominate...
              </h2>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-slate-700">
            <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Here's the <HighlightedText>hidden biological truth</HighlightedText> most surgeons overlook — your metabolism isn't broken, it's just been running on survival mode, constantly red-lining to keep you alive. Taking control of this exact mechanism is the key to unlocking the <HighlightedText>formidable physique</HighlightedText> you've spent years trying to reveal, and restoring the <HighlightedText>vitality and dominance</HighlightedText> you know you're capable of.
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Here's what happens when you flip that switch: By <HighlightedText>optimizing your circadian timing</HighlightedText> and aligning your fuel intake for <HighlightedText>metabolic supremacy</HighlightedText>, your body starts recovering faster than surgeons half your age. You're constantly <HighlightedText>invigorated</HighlightedText>. Exuding the most <HighlightedText>nonchalant competence and authority</HighlightedText>. Burning fat effortlessly while you sleep. Waking up <HighlightedText>refreshed</HighlightedText> after even the most brutally demanding days instead of needing three cups of coffee just to utter coherent sentences.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50/50 to-slate-50/30 border-l-4 border-blue-500/30 rounded-r-lg p-4 sm:p-6 my-6 sm:my-8">
              <p className="text-base sm:text-lg leading-relaxed mb-0 font-medium text-slate-800">
                Luckily, there's a simple blueprint to making this your reality, and sustaining it — without making massive overhauls to your chaotic schedule and giving up the few pleasures you have left that get you through each day.
              </p>
            </div>
          </div>
        </div>

        {/* Product Introduction Section */}
        <div className="mb-8 sm:mb-12">
          <div className="bg-gradient-to-r from-blue-50/80 to-indigo-50/60 rounded-xl p-6 sm:p-8 border border-blue-200/50">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 text-center">
                Introducing the <HighlightedText>Surgeon Metabolism Bible</HighlightedText>
              </h2>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-slate-700">
            <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Everything you need to copy the <HighlightedText>proven metabolic protocol</HighlightedText> elite surgeons are using to reclaim their edge, shed stubborn weight, and take back control of their health. This isn't for the average person — it's built for those who seek to <HighlightedText>thrive in surgical chaos</HighlightedText> and channel their stress into <HighlightedText>cutting through brain fog</HighlightedText>, <HighlightedText>wielding a commanding physique</HighlightedText>, and <HighlightedText>radiating physical supremacy</HighlightedText>.
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              The Surgeon Metabolism Bible reveals the exact <HighlightedText>30-day blueprint</HighlightedText> these elite surgeons use to reverse stress-induced metabolic damage while their peers stay stuck. This isn't another diet book - it's the <HighlightedText>underground system</HighlightedText> that channels your surgical stress patterns to actually strip away fat, generate endless mental energy, and restore your physical vitality. This is the gateway to reclaiming the <HighlightedText>biological superiority</HighlightedText> that the system has taken from you.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-50 to-white p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-100">
          {/* Header with Icon */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="flex justify-center items-center mb-3 sm:mb-4">
              <BookOpen className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600 mr-3" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
                What You'll Discover
              </h2>
            </div>
            <p className="text-base sm:text-lg text-slate-600 mb-4">
              exact blueprint found in the 5-module system
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
                <HighlightedText>Bulletproof energy</HighlightedText> that lasts through 12-hour surgery days
              </p>
            </div>
            
            <div className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200">
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                  <Flame className="h-4 w-4 sm:h-5 sm:w-5 text-white font-bold stroke-[3]" />
                </div>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700 font-medium">
                How to convert <HighlightedText>surgical stress into raw fat-burning fuel</HighlightedText>
              </p>
            </div>
            
            <div className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200">
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-white font-bold stroke-[3]" />
                </div>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700 font-medium">
                The <HighlightedText>circadian hack</HighlightedText> that eliminates 2PM energy crashes
              </p>
            </div>
            
            <div className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200">
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                  <Apple className="h-4 w-4 sm:h-5 sm:w-5 text-white font-bold stroke-[3]" />
                </div>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700 font-medium">
                Secret <HighlightedText>nutrition timing</HighlightedText> to supercharge your physique
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
      </div>
    </LazySection>
  );
};

export default SolutionSection;
