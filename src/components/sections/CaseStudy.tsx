import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import { ChevronDown, ChevronUp, CheckCircle, MessageSquare, Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Michael K.",
    age: 52,
    specialty: "Orthopedic Spine Surgeon",
    snippet: "For the past decade, without fail my body and cognition would be shot by 2PM. I would be in a groove all morning and then feel like I ran into a wall.",
    keyResult: "Week three, my PA tells me he hasn't seen me this laser-focused in ages. I could keep up with my 12-year-old when he wanted to throw the football around in the evening!",
    fullContent: "I've been doing spinal fusions for over 20 years, and for the past decade, without fail my body and cognition would be shot by 2PM. I would be in a groove all morning and then feel like I ran into a wall. Brain fog, eyes struggling to stay open, and zero motivation to perform at my best for the rest of the day. I tried all the usual stuff — keto, intermittent fasting, even got on TRT. Nothing worked because I didn't have time to juggle all the extra decision-making and had no concrete system to work within.\n\nWhat I love about the Surgeon Metabolism Bible's approach is it's stupid simple for guys who have zero extra cognitive bandwidth to spend on diet and exercise decisions. I'm talking about small tweaks to what I was already eating at the hospital cafeteria and extremely simple meals to bring from home (that I actually enjoy). No more hour-long grocery runs, no complex and rigid rules that restrain my natural lifestyle. There was work to do on my part, but the specific and tailored nutrition blueprint integrated seamlessly with my already-hectic schedule and eliminated all guilt I used to have about cheating on my diet.\n\nWeek one, I stopped needing that third cup of coffee just to survive all of my cases. Week three, my PA tells me he hasn't seen me this laser-focused in ages. But the real moment was when I could keep up with my 12-year-old when he wanted to throw the football around in the evening!\n\nThat's when it hit me. I'd been fighting my body for way too long. The changes I needed to make were all too simple — this system showed me exactly how to do it!",
    image: "/lovable-uploads/664b8af2-fcfd-4857-9fc5-39276c0a250b.png"
  },
  {
    name: "Dr. James R.",
    age: 45,
    specialty: "Joint Replacement Surgeon",
    snippet: "I was gaining weight eating maybe 1,200 calories a day. Standing through several-hour hip replacements was killing my knees and back, and with each case that passed, my focus dwindled.",
    keyResult: "Thirty days later, I'm down 11 pounds without constantly counting calories, eating intuitively. I did three consecutive joint replacements without sitting down once.",
    fullContent: "I was gaining weight eating maybe 1,200 calories a day (and tracking it was killing me). For the life of me, I had no idea why. The typical 'Calories In Calories Out' seemingly had no effect on me. Standing through several-hour hip replacements was killing my knees and back, and with each case that passed, my focus dwindled. I'm thinking, great, I'll need joint replacements myself at 50.\n\nI almost didn't read the Surgeon Metabolism Bible because who has time? Every single guide I've tried in the past wanted me to uproot my entire lifestyle and go against the grain on everything I enjoy. But it took me ten minutes between cases. Ten minutes. And I'm like, 'Wait, THAT'S why I'm exhausted?' It was such a simple solution that I couldn't believe I had never thought of it before.\n\nThe 'fixes' were things I could do without changing my hospital routine at all. I'm talking about switching my morning coffee order and choosing different options from the same cafeteria I eat at every day. That's it.\n\nThirty days later, I'm down 11 pounds without constantly counting calories, eating intuitively, and I don't have to force anything because I can still enjoy my favorite foods. Last week I did three consecutive joint replacements without sitting down once and can now easily combat the afternoon crash most people dread. My wife noticed... other improvements... before I even told her about the program.\n\nEasiest investment I've ever made.",
    image: "/lovable-uploads/28f8ee24-0a83-44c3-8e84-5a6f253d73e1.png"
  },
  {
    name: "Dr. Adam L.",
    age: 41,
    specialty: "Trauma Surgeon",
    snippet: "Between trauma calls and unpredictable cases, I was basically living on whatever I could grab from vending machines. Constant energy drinks, protein bars, and hospital sandwiches made me feel like garbage.",
    keyResult: "My residents started asking what changed because apparently I'm not the walking zombie they're used to seeing anymore.",
    fullContent: "Between trauma calls and unpredictable cases, I was basically living on whatever I could grab from vending machines and cafeteria food. Constant energy drinks, protein bars, and hospital sandwiches made me feel like garbage and I (admittedly) looked even worse.\n\nEvery 'solution' I found online required eating foods I hated, working out at 5 AM, and putting even more on my plate than I already had. Are you kidding me? I might get called in for a multi-trauma at 2 AM. I simply didn't have the time or capacity to make it work.\n\nWhat I love about the Surgeon Metabolism Bible is it specifically integrates with our lives. It's not some superficial promise that magically works for everyone — it's a blueprint that you can augment and easily work within for your needs. These are simple switches and levers I can pull no matter how crazy my day gets. Even when I'm grabbing food at 3 AM between cases, I know exactly what to choose and how it'll affect me.\n\nThe metabolic stuff works even when life is complete chaos, because it's designed for resiliency instead of fragility, like most guides. My residents started asking what changed because apparently I'm not the walking zombie they're used to seeing anymore.\n\nThe confidence boost from finding a system that I control, rather than the other way around, was incredible!",
    image: "/lovable-uploads/e0607499-2b27-4d31-9fe3-c0034163ac36.png"
  },
  {
    name: "Dr. Robert T.",
    age: 39,
    specialty: "Sports Medicine Surgeon",
    snippet: "Here's the embarrassing part — I'm repairing torn ACLs for college athletes while I can't walk up two flights of stairs without getting winded. These 22-year-olds are in better shape than me at 39.",
    keyResult: "Two months later, I'm down 16 pounds and went mountain biking for the first time in years. Complex cases that used to fry my brain now feel effortless.",
    fullContent: "Here's the embarrassing part — I'm repairing torn ACLs for college athletes while I can't walk up two flights of stairs without getting winded. These 22-year-olds are in better shape than me at 39. The dissonance I felt from that ate at me every single day, and it was noticeable.\n\nI kept putting off 'getting healthy' because everything I read required turning my life upside down. Two hours at the gym every single day, elaborate and restrictive diets, endless amounts of supplements that I couldn't even feel working.\n\nThe Surgeon Metabolism Bible's system changed my entire perspective. I spend zero extra time on this. Zero. Having the knowledge to custom-tailor the system to my liking makes it all the more valuable. I make different choices with the same time I was already spending eating. Same 15 minutes for lunch, just smarter choices from the same hospital options, and a more resilient body that can handle imperfections.\n\nTwo months later, I'm down 16 pounds and I went mountain biking last weekend for the first time in years.\n\nBut here's the crazy part — complex cases that used to fry my brain now feel effortless. When you're not constantly fighting fatigue, everything else just clicks. Like a constant flow state.",
    image: "/lovable-uploads/d998d49b-b7ab-432d-9db0-6a84873685ff.png"
  },
  {
    name: "Dr. Kevin M.",
    age: 58,
    specialty: "Pediatric Orthopedic Surgeon",
    snippet: "At 58, I figured constant fatigue was just part of the deal. I was planning to cut back my case load because 6-hour surgeries were becoming too much.",
    keyResult: "Three months in, I feel like I did during my surgical residency. Last month I did back-to-back complex spinal deformity cases without that afternoon crash.",
    fullContent: "At 58, I figured constant fatigue was just part of the deal. Had to just live with it. I was planning to cut back my case load because 6-hour surgeries were becoming too much. Figured I was just getting old and had to accept that.\n\nI'll be honest — I was skeptical about the Surgeon Metabolism Bible approach because it seemed too simple to get me the results I wanted. No crazy workouts, didn't require me to be perfect 24/7, and worked with my schedule, not against it. I kept thinking, 'If it's this easy, why isn't everyone doing it?'\n\nBut that's exactly why it works. I didn't have to change my schedule, find extra time, or learn some complicated system. Just small tweaks to what I was already doing, and easily-implementable knowledge that I now constantly had at my disposal.\n\nThree months in, I feel like I did during my surgical residency. Last month I did back-to-back complex spinal deformity cases without that afternoon crash that usually hits me like a bus.\n\nOne of my partners pulled me aside and asked, 'What are you taking?' When I told him it wasn't about adding something, it was about fixing what was already broken, he didn't believe me.\n\nSometimes the simplest solutions are the most powerful.",
    image: "/lovable-uploads/9cc603a1-d588-4bea-b761-70ee2762d204.png"
  }
];

const CaseStudy = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [expandedStates, setExpandedStates] = useState<boolean[]>(
    new Array(testimonials.length).fill(false)
  );

  const toggleExpanded = (index: number) => {
    setExpandedStates(prev => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  // Check if any testimonial is expanded
  const isAnyExpanded = expandedStates.some(state => state);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
      // Reset expanded states when slide changes
      setExpandedStates(new Array(testimonials.length).fill(false));
    });

    // Auto-scroll every 8 seconds, but only if no testimonial is expanded
    const autoScroll = setInterval(() => {
      if (!isAnyExpanded) {
        if (api.canScrollNext()) {
          api.scrollNext();
        } else {
          api.scrollTo(0); // Loop back to first slide
        }
      }
    }, 8000);

    return () => clearInterval(autoScroll);
  }, [api, isAnyExpanded]);

  return (
    <div className="mt-12 sm:mt-16 md:mt-20">
      <div className="text-center mb-6 sm:mb-8">
        <div className="flex items-center justify-center gap-2 mb-2">
          <MessageSquare className="h-6 w-6 text-blue-600" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
            What Are Other Surgeons <span className="text-blue-600">Saying</span> About This System?
          </h2>
        </div>
        <p className="text-slate-600 mt-2">
          Actual results from top-performing surgeons who <span className="font-bold text-blue-600">committed to excellence</span>
        </p>
      </div>
      
      <div className="relative max-w-4xl mx-auto">
        <Carousel
          setApi={setApi}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className="p-6 sm:p-8 md:p-10 border-2 border-slate-200 bg-white shadow-lg relative">
                  {/* Verified Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-green-50 border border-green-200 rounded-full px-2 py-1">
                    <CheckCircle className="h-3 w-3 text-green-600" />
                    <span className="text-xs font-medium text-green-700">Verified</span>
                  </div>
                  
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0">
                        <img
                          src={testimonial.image}
                          alt={`${testimonial.name} - ${testimonial.specialty}`}
                          className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-blue-100"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-blue-600 text-lg">
                              {testimonial.name}
                            </h3>
                            <div className="flex gap-0.5">
                              {[...Array(5)].map((_, starIndex) => (
                                <Star
                                  key={starIndex}
                                  className="h-4 w-4 fill-yellow-400 text-yellow-400"
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-slate-500 text-sm">
                            {testimonial.age}-year-old {testimonial.specialty}
                          </p>
                        </div>
                        
                        <div className="text-slate-700 leading-relaxed">
                          {/* Snippet */}
                          <p className="text-base sm:text-lg mb-4 italic">
                            "{testimonial.snippet}"
                          </p>
                          
                          {/* Key Result */}
                          <p className="text-base sm:text-lg text-blue-600 font-medium mb-4">
                            "{testimonial.keyResult}"
                          </p>
                          
                          {/* Expandable Full Content */}
                          {expandedStates[index] && (
                            <div className="mt-4 p-4 bg-slate-50 rounded-lg border-l-4 border-blue-500">
                              <h4 className="font-semibold text-slate-900 mb-3">Full Story:</h4>
                              <div className="text-slate-700 leading-relaxed space-y-4">
                                {testimonial.fullContent.split('\n\n').map((paragraph, pIndex) => (
                                  <p key={pIndex} className="text-sm sm:text-base">
                                    {paragraph}
                                  </p>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {/* Toggle Button */}
                          <button
                            onClick={() => toggleExpanded(index)}
                            className="mt-4 flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                          >
                            {expandedStates[index] ? (
                              <>
                                <ChevronUp className="w-4 h-4" />
                                Hide Full Story
                              </>
                            ) : (
                              <>
                                <ChevronDown className="w-4 h-4" />
                                Read Full Story
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
        
        {/* Slide indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === current ? "bg-blue-600" : "bg-slate-300"
              }`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
