
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
            You're doing everything "right" - eating clean, hitting the gym when you can, even cutting calories. Yet you're still gaining weight around your midsection, hitting that 2 PM energy crash that makes you want to crawl under your desk, and wondering why your libido disappeared somewhere between residency and real life.
          </p>
          
          <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Sound familiar? You're not alone. <span className="font-bold text-blue-600">94% of surgeons over 35</span> are quietly struggling with the same metabolic nightmare, watching their bodies betray them <span className="font-bold text-blue-600">despite their discipline and intelligence</span>.
          </p>
          
          <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Here's what's really happening: Your metabolism isn't broken because you lack willpower or eat too much. It's broken because you're following advice designed for 25-year-old personal trainers, not 45-year-old surgeons dealing with <span className="font-bold text-blue-600">the chronic stress cascade</span> - irregular sleep, elevated cortisol, and adrenaline spikes that would make an ER resident look relaxed.
          </p>
          
          <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Every restrictive diet you've tried has made it WORSE. Every "eat less, move more" approach has slowed your metabolism further. The mainstream fitness industry has been feeding you protocols that actively sabotage high-stress professionals like you - completely ignoring <span className="font-bold text-blue-600">how surgical stress rewires your metabolic machinery</span>.
          </p>
          
          <p className="text-base sm:text-lg leading-relaxed">
            Meanwhile, a small group of elite surgeons discovered the real problem: surgical stress creates a <span className="font-bold text-blue-600">perfect storm of disrupted circadian timing and metabolic fuel competition</span> - your body literally can't decide whether to burn fat or store it, leading to <span className="font-bold text-blue-600">metabolic gridlock</span> that normal diet advice can't touch. They're using a completely different approach - one that works WITH your stress physiology, not against it.
          </p>
        </div>
      </div>
    </LazySection>
  );
};

export default ProblemSection;
