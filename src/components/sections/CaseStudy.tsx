
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Dr. Mark T.",
    age: 44,
    specialty: "Orthopedic Surgeon",
    quote: "I'd crush my morning surgeries, then by 2 PM I felt like I was moving through mud. When Mark learned his erratic schedule was creating metabolic chaos, he made a few simple adjustments to work with his stress patterns instead of against them. Within two weeks, that afternoon crash disappeared.",
    result: "I actually had energy left for my family again. My wife joked that I got my old self back.",
    highlight: "almost no extra time",
    image: "/placeholder.svg"
  },
  {
    name: "Dr. Sarah L.",
    age: 38,
    specialty: "Orthopedic Surgeon",
    quote: "Between back-to-back surgeries and emergency calls, I was surviving on caffeine and willpower. My metabolism had completely stalled despite eating barely anything.",
    result: "The metabolic reset changed everything. I'm sleeping better, have consistent energy, and actually lost 15 pounds without feeling deprived.",
    highlight: "lost 15 pounds",
    image: "/placeholder.svg"
  },
  {
    name: "Dr. James R.",
    age: 52,
    specialty: "Orthopedic Surgeon",
    quote: "I thought constant fatigue was just part of being a surgeon. My joints ached, my mind felt foggy, and I dreaded those long surgery days.",
    result: "Following the surgeon-specific protocols, my joint pain decreased significantly and my mental clarity returned. I feel like I'm in my 40s again.",
    highlight: "feel like I'm in my 40s again",
    image: "/placeholder.svg"
  },
  {
    name: "Dr. Lisa M.",
    age: 41,
    specialty: "Orthopedic Surgeon",
    quote: "The irregular eating schedule was destroying my metabolism. I'd go hours without eating, then binge late at night when I finally got home.",
    result: "Learning how to work with my surgical schedule instead of against it was game-changing. My energy is stable all day long.",
    highlight: "energy is stable all day long",
    image: "/placeholder.svg"
  },
  {
    name: "Dr. Michael K.",
    age: 47,
    specialty: "Orthopedic Surgeon",
    quote: "I was gaining weight despite working 12-hour days. My stress levels were through the roof and I felt like I was aging rapidly.",
    result: "The stress-adapted nutrition approach helped me lose 22 pounds and feel more energized than I have in years. My patients even commented on the change.",
    highlight: "lost 22 pounds",
    image: "/placeholder.svg"
  }
];

const CaseStudy = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    // Auto-scroll every 8 seconds
    const autoScroll = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0); // Loop back to first slide
      }
    }, 8000);

    return () => clearInterval(autoScroll);
  }, [api]);

  return (
    <div className="mt-12 sm:mt-16 md:mt-20">
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
          What Surgeons Are Saying
        </h2>
        <p className="text-slate-600 mt-2">Real results from busy orthopedic surgeons</p>
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
                <Card className="p-6 sm:p-8 md:p-10 border-2 border-slate-200 bg-white shadow-lg">
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
                          <h3 className="font-semibold text-blue-600 text-lg">
                            {testimonial.name}
                          </h3>
                          <p className="text-slate-500 text-sm">
                            {testimonial.age}-year-old {testimonial.specialty}
                          </p>
                        </div>
                        
                        <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                          <p className="text-base sm:text-lg mb-4 italic">
                            "{testimonial.quote}"
                          </p>
                          
                          <p className="text-base sm:text-lg text-blue-600 font-medium">
                            "{testimonial.result}" The best part? It required{" "}
                            <span className="font-bold">{testimonial.highlight}</span>.
                          </p>
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
