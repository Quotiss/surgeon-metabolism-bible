import OptimizedContainer from "@/components/ui/OptimizedContainer";
import HighlightedText from "@/components/ui/HighlightedText";

const ThankYouAgitateSection = () => {
  return (
    <section className="py-12 bg-blue-600">
      <OptimizedContainer size="md">
        <div className="text-center">
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Trying to "Figure it Out" Slows Everything Down
            </h2>
          </div>
          
          <div className="text-lg text-white/90 space-y-4 max-w-3xl mx-auto">
            <p>For the top 1% of surgeons like yourself,</p>
            
            <p><HighlightedText className="text-white font-bold">Time and Efficiency are everything.</HighlightedText></p>
            
            <p>Trying to force an entirely new system into your life, by yourself, requires extra bandwidth that many surgeons can't spare.</p>
            
            <p>Even with the best intentions and effort, progress flatlines, or barely shows in the first place.</p>
            
            <p>It's not your fault — you're trying to operate in a system stacked against consistency.</p>
            
            <p>That's why the top 1% don't leave their results to chance or willpower alone.</p>
            
            <p><HighlightedText className="text-white font-bold">They remove friction at the start.</HighlightedText></p>
          </div>
        </div>
      </OptimizedContainer>
    </section>
  );
};

export default ThankYouAgitateSection;