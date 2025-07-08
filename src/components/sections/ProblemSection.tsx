import LazySection from "@/components/LazySection";

const ProblemSection = () => {
  return (
    <LazySection className="py-8 sm:py-12 md:py-16 bg-slate-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
            Here's What's Really Happening...
          </h2>
        </div>

        <div className="prose prose-lg max-w-none text-slate-700">
          <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            You're doing everything "right" - eating clean, hitting the gym when you can, even cutting calories. Yet you're still gaining weight your wife subtly mentions, crashing at 2 PM like clockwork, wondering where your motivation—and your sex drive—went.
          </p>
          
          <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Sound familiar? You're not alone. <span className="font-bold text-blue-600">94% of surgeons over 35</span> are quietly struggling with the same hormonal nightmare, angrily feeling their bodies betray them despite their discipline and intelligence that's been the cornerstone of their careers. You gave everything to this profession—discipline, sleep, your twenties—believing it would be worth it. But now your body's unraveling, your energy's crashing, and the system that once rewarded your grind? It's nowhere to be found.
          </p>
          
          <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Here's what's really happening: Your metabolism isn't broken because you lack willpower or eat too much. It's broken because you've been fed protocols that actively sabotage high-stress, high-stakes performers like you. who struggle with the chronic stress cascade-irregular sleep, elevated cortisol, and adrenaline spikes that wreck mental clarity. The people you've been taking advice from simply don't understand <span className="font-bold text-blue-600">the chaos you have to navigate</span>. The good thing is, <span className="font-bold text-blue-600">it's not your fault</span>. And <span className="font-bold text-blue-600">the damage is reversible</span>.
          </p>
          
          <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Every restrictive diet you've tried has made it WORSE. Every "eat less, move more" approach has slowed your metabolism further. The mainstream fitness industry has been feeding you protocols that actively sabotage high-stress professionals like you - completely ignoring <span className="font-bold text-blue-600">how surgical stress rewires your metabolic machinery</span>.
          </p>
          
          <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Meanwhile, a small group of elite surgeons discovered the real problem: surgical stress creates a <span className="font-bold text-blue-600">perfect storm of disrupted circadian timing and metabolic fuel competition</span> - your body literally can't decide whether to burn fat or store it, leading to <span className="font-bold text-blue-600">metabolic gridlock</span> that normal diet advice can't touch. They're using a completely different approach - one that works WITH your stress physiology, not against it.
          </p>

          <p className="text-base sm:text-lg leading-relaxed">
            You've had flashes of the man you've always envisioned — an <span className="font-bold text-blue-600">envious physique</span>, a <span className="font-bold text-blue-600">commanding aura</span>, and an <span className="font-bold text-blue-600">internal confidence that exudes authority</span> to your colleagues. That guy's not gone. He's just been held back by the system that promised you everything.
          </p>
        </div>
      </div>
    </LazySection>
  );
};

export default ProblemSection;
