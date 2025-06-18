
import LazySection from "@/components/LazySection";

const ScienceSection = () => {
  return (
    <LazySection className="py-8 sm:py-12 md:py-16 bg-slate-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
            The Science Behind the Reset
          </h2>
        </div>

        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
          <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed mb-4 sm:mb-6">
            Mitochondrial dysfunction has now been linked directly to the symptoms most orthopedic surgeons struggle with: low energy, poor sleep, loss of libido, brain fog, and emotional volatility.
          </p>
          
          <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed mb-4 sm:mb-6">
            A review of 25 studies found consistent evidence that fatigue is strongly associated with impaired mitochondrial function—specifically reduced energy output at the cellular level<sup className="text-blue-600">1</sup>. Another study showed that individuals with better mitochondrial efficiency experienced deeper sleep, improved mood, and fewer signs of burnout and fatigue<sup className="text-blue-600">2</sup>.
          </p>
          
          <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed mb-4 sm:mb-6">
            In short: the worse your mitochondria function, the worse you feel.
          </p>
          
          <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed">
            This guide is built to reverse that dysfunction. By targeting the cellular root cause of your symptoms, it helps restore energy, sharpen focus, rebalance hormones, and reignite the drive you thought was lost to age.
          </p>
        </div>
      </div>
    </LazySection>
  );
};

export default ScienceSection;
