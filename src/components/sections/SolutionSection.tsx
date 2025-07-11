
import { Clock, Zap, Calendar, Flame } from "lucide-react";
import LazySection from "@/components/LazySection";
import HighlightedText from "@/components/ui/HighlightedText";

const SolutionSection = () => {
  return (
    <LazySection className="py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
            But Here's What the Top 6% Know...
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
          
          <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            This isn't fantasy. This is what happens when you stop fighting your surgical stress and <HighlightedText>start weaponizing it</HighlightedText>.
          </p>
        </div>

        {/* Bridge Section */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 text-center">
            How Top Surgeons Build <HighlightedText>Bulletproof Resilience</HighlightedText> (and Why They're <HighlightedText>Winning</HighlightedText>)
          </h3>
          
          <div className="prose prose-lg max-w-none text-slate-700">
            <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Thankfully, there's a <HighlightedText>hidden secret</HighlightedText> that most surgeons haven't unlocked yet — your metabolism isn't broken, it's just been running on survival mode, red-lining just to keep you alive, instead of an <HighlightedText>effortless dominance mode</HighlightedText>.
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Here's what happens when you flip that switch: By <HighlightedText>optimizing your circadian timing</HighlightedText> and aligning your fuel intake for <HighlightedText>metabolic supremacy</HighlightedText>, your body starts recovering faster than surgeons half your age. You're constantly <HighlightedText>invigorated</HighlightedText>. Exuding the most <HighlightedText>nonchalant competence and authority</HighlightedText>. Burning fat effortlessly while you sleep. Waking up <HighlightedText>refreshed</HighlightedText> after even the most brutally demanding days instead of needing three cups of coffee just to utter coherent sentences.
            </p>
          </div>
        </div>

        {/* Product Introduction Section */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4 sm:mb-6 text-center">
            Introducing the <HighlightedText>Surgeon Metabolism Bible</HighlightedText>
          </h2>
          
          <div className="prose prose-lg max-w-none text-slate-700">
            <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Everything you need to copy the <HighlightedText>proven metabolic protocol</HighlightedText> elite surgeons are using to reclaim their edge, shed stubborn weight, and take back control of their health. This isn't for the average person — it's built for those who seek to <HighlightedText>thrive in surgical chaos</HighlightedText> and channel their stress into <HighlightedText>cutting through brain fog</HighlightedText>, <HighlightedText>wielding a commanding physique</HighlightedText>, and <HighlightedText>radiating physical supremacy</HighlightedText>.
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              The Surgeon Metabolism Bible reveals the exact <HighlightedText>30-day blueprint</HighlightedText> these elite surgeons use to reverse stress-induced metabolic damage while their peers stay stuck. This isn't another diet book - it's the <HighlightedText>underground system</HighlightedText> that channels your surgical stress patterns to actually strip away fat, generate endless mental energy, and restore your physical vitality. This is the gateway to reclaiming the <HighlightedText>biological superiority</HighlightedText> that the system has taken from you.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">
            What You'll Learn:
          </h3>
          
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-start space-x-3 sm:space-x-4">
              <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm sm:text-base leading-relaxed">
                The <HighlightedText>5-minute circadian reset ritual</HighlightedText> that reprograms your stress-damaged metabolism for all-day energy (works by resetting cortisol rhythm even after 16-hour surgeries)
              </p>
            </div>
            
            <div className="flex items-start space-x-3 sm:space-x-4">
              <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm sm:text-base leading-relaxed">
                The <HighlightedText>"inflammation foods" secretly amplifying your stress response</HighlightedText> - 3 "healthy" staples that trigger cortisol spikes and lock in fat storage (eliminate these effortlessly)
              </p>
            </div>
            
            <div className="flex items-start space-x-3 sm:space-x-4">
              <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm sm:text-base leading-relaxed">
                The surgeon-proof meal timing blueprint that syncs with your stress hormone cycles instead of fighting them
              </p>
            </div>
            
            <div className="flex items-start space-x-3 sm:space-x-4">
              <Flame className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm sm:text-base leading-relaxed">
                The <HighlightedText>metabolic accelerator foods</HighlightedText> that actually use your elevated stress hormones as fuel for instant fat burning (nutritionists charge <HighlightedText>$500/session</HighlightedText> to reveal this)
              </p>
            </div>
          </div>
        </div>
      </div>
    </LazySection>
  );
};

export default SolutionSection;
