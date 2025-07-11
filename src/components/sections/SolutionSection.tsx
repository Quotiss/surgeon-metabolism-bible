import { Clock, Zap, Calendar, Flame } from "lucide-react";
import LazySection from "@/components/LazySection";

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
            Your surgical stress isn't your enemy—it's <span className="font-bold text-blue-600">your unique edge</span>.
          </p>
          
          <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Instead of fighting <span className="font-bold text-blue-600">against</span> the demands of your profession, these top performers learned to harness that <span className="font-bold text-blue-600">same intense pressure</span> and convert it into <span className="font-bold text-blue-600">raw metabolic fuel</span>. They're strolling into the OR with <span className="font-bold text-blue-600">endless energy and poise</span>. <span className="font-bold text-blue-600">Commanding respect</span> in every department meeting. <span className="font-bold text-blue-600">Controlling conversations</span> at medical conferences while their colleagues struggle to keep up.
          </p>
          
          <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Imagine <span className="font-bold text-blue-600">striding through the hospital corridors with the same confidence and charisma</span> you had in residency. <span className="font-bold text-blue-600">Practically bulletproof</span>. But now backed by decades of expertise and mastery. Effortlessly executing complex procedures with <span className="font-bold text-blue-600">laser focus and presence</span>. Returning home <span className="font-bold text-blue-600">invigorated</span> instead of depleted, <span className="font-bold text-blue-600">entertaining</span> your wife like the man you married, not the exhausted shell you've become.
          </p>
          
          <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Envision looking in the mirror and seeing the <span className="font-bold text-blue-600">powerful physique that matches your surgical discipline</span>. Stepping into rooms and <span className="font-bold text-blue-600">immediately turning heads</span> without saying a word. <span className="font-bold text-blue-600">Outlasting</span> surgeons half your age and watching them scramble to keep up with your pace.
          </p>
          
          <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            This isn't fantasy. This is what happens when you stop fighting your surgical stress and <span className="font-bold text-blue-600">start weaponizing it</span>.
          </p>
        </div>

        {/* Bridge Section */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 text-center">
            How Top Surgeons Build <span className="font-bold text-blue-600">Bulletproof Resilience</span> (and Why They're <span className="font-bold text-blue-600">Winning</span>)
          </h3>
          
          <div className="prose prose-lg max-w-none text-slate-700">
            <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Thankfully, there's a <span className="font-bold text-blue-600">hidden secret</span> that most surgeons haven't unlocked yet — your metabolism isn't broken, it's just been running on survival mode, red-lining just to keep you alive, instead of an <span className="font-bold text-blue-600">effortless dominance mode</span>.
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Here's what happens when you flip that switch: By <span className="font-bold text-blue-600">optimizing your circadian timing</span> and aligning your fuel intake for <span className="font-bold text-blue-600">metabolic supremacy</span>, your body starts recovering faster than surgeons half your age. You're constantly <span className="font-bold text-blue-600">invigorated</span>. Exuding the most <span className="font-bold text-blue-600">nonchalant competence and authority</span>. Burning fat effortlessly while you sleep. Waking up <span className="font-bold text-blue-600">refreshed</span> after even the most brutally demanding days instead of needing three cups of coffee just to utter coherent sentences.
            </p>
        </div>

        {/* New Product Introduction Section */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4 sm:mb-6 text-center">
            Introducing the <span className="font-bold text-blue-600">Surgeon Metabolism Bible</span>
          </h2>
          
          <div className="prose prose-lg max-w-none text-slate-700">
            <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Everything you need to copy the <span className="font-bold text-blue-600">proven metabolic protocol</span> elite surgeons are using to reclaim their edge, shed stubborn weight, and take back control of their health. This isn't for the average person — it's built for those who seek to <span className="font-bold text-blue-600">thrive in surgical chaos</span> and channel their stress into <span className="font-bold text-blue-600">cutting through brain fog</span>, <span className="font-bold text-blue-600">wielding a commanding physique</span>, and <span className="font-bold text-blue-600">radiating physical supremacy</span>.
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              The Surgeon Metabolism Bible reveals the exact <span className="font-bold text-blue-600">30-day blueprint</span> these elite surgeons use to reverse stress-induced metabolic damage while their peers stay stuck. This isn't another diet book - it's the <span className="font-bold text-blue-600">underground system</span> that channels your surgical stress patterns to actually strip away fat, generate endless mental energy, and restore your physical vitality. This is the gateway to reclaiming the <span className="font-bold text-blue-600">biological superiority</span> that the system has taken from you.
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
                The <span className="font-bold text-blue-600">5-minute circadian reset ritual</span> that reprograms your stress-damaged metabolism for all-day energy (works by resetting cortisol rhythm even after 16-hour surgeries)
              </p>
            </div>
            
            <div className="flex items-start space-x-3 sm:space-x-4">
              <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm sm:text-base leading-relaxed">
                The <span className="font-bold text-blue-600">"inflammation foods" secretly amplifying your stress response</span> - 3 "healthy" staples that trigger cortisol spikes and lock in fat storage (eliminate these effortlessly)
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
                The <span className="font-bold text-blue-600">metabolic accelerator foods</span> that actually use your elevated stress hormones as fuel for instant fat burning (nutritionists charge <span className="font-bold text-blue-600">$500/session</span> to reveal this)
              </p>
            </div>
          </div>
        </div>
      </div>
    </LazySection>
  );
};

export default SolutionSection;
