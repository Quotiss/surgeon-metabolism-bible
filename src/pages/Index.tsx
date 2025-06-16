
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, ArrowRight, Clock, Shield, Target, FileText, ShoppingCart, Gift } from "lucide-react";
import FloatingCTA from "@/components/FloatingCTA";
import LazySection from "@/components/LazySection";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useEffect } from "react";

const Index = () => {
  const { trackCTAClick } = useAnalytics();

  // Enhanced preloading and optimization for mobile
  useEffect(() => {
    // Preload critical resources
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = '//noahgordon.gumroad.com';
    document.head.appendChild(link);

    // Preload fonts for better mobile performance
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
    fontLink.as = 'style';
    document.head.appendChild(fontLink);

    // Reduce motion for users who prefer it
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    }

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
      if (document.head.contains(fontLink)) {
        document.head.removeChild(fontLink);
      }
    };
  }, []);

  const handleCTAClick = (location: string = 'general') => {
    trackCTAClick(location);
    window.open("https://noahgordon.gumroad.com/l/surgeonsmetabolismbible", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Floating Mobile CTA */}
      <FloatingCTA onClick={() => handleCTAClick('floating_mobile')} />

      {/* Header - Enhanced mobile optimization */}
      <header className="bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-0 z-40 header-nav">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <div className="font-bold text-base sm:text-lg md:text-xl text-slate-900 truncate pr-4">
              Surgeon Metabolism Bible
            </div>
            <Button 
              onClick={() => handleCTAClick('header')} 
              className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-xs sm:text-sm md:text-base px-3 sm:px-4 py-2 transition-all duration-200 touch-manipulation"
            >
              Get Access Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section - Enhanced mobile layout */}
      <section className="py-8 sm:py-12 md:py-20 px-4 hero-section">
        <div className="container mx-auto max-w-6xl text-center">
          
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
            <span className="text-blue-600">Surgeons:</span> Your Metabolism's Been <span className="text-blue-600">Misfiring for Years</span> — and No One Told You Why
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover the protocol elite surgeons are using to reclaim their energy, focus, and vitality — without restrictive diets or broken health advice.
          </p>

          <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-green-800 font-semibold text-xs sm:text-sm md:text-base">
              <FileText className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
              <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
              <Gift className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
              <span className="text-center">Get $127 worth of surgeon-specific protocols, grocery cheatsheets & bonus guides for $27 today.</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 md:mb-12">
            <Button 
              onClick={() => handleCTAClick('hero')}
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto w-full sm:w-auto transition-all duration-200 touch-manipulation font-semibold"
            >
              Get The Complete Protocol - $27
              <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
            </Button>
            <div className="text-xs sm:text-sm text-slate-500 text-center">
              ⚡ Instant download • 50-page eBook + bonuses
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-8 max-w-4xl mx-auto text-xs sm:text-sm md:text-base">
            <div className="flex items-center justify-center space-x-2 p-2 rounded-lg bg-slate-50/50">
              <Clock className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600 flex-shrink-0" />
              <span className="text-slate-600">No time-wasting fluff</span>
            </div>
            <div className="flex items-center justify-center space-x-2 p-2 rounded-lg bg-slate-50/50">
              <Shield className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600 flex-shrink-0" />
              <span className="text-slate-600">Evidence-based approach</span>
            </div>
            <div className="flex items-center justify-center space-x-2 p-2 rounded-lg bg-slate-50/50">
              <Target className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600 flex-shrink-0" />
              <span className="text-slate-600">Surgeon-specific protocol</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - Enhanced mobile spacing */}
      <LazySection className="py-8 sm:py-12 md:py-16 bg-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
              You're Successful in Surgery, But Your Body is Failing You
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600">
              Sound familiar? You're not alone. Here's what most surgeons are struggling with:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <Card className="p-4 sm:p-6 border-l-4 border-l-red-500 hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-0">
                <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-slate-900">The Energy Crisis</h3>
                <ul className="space-y-2 text-slate-700 text-sm sm:text-base">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Chronic fatigue that coffee can't fix</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Brain fog affecting your surgical precision</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>No energy left for family after long surgeries</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-4 sm:p-6 border-l-4 border-l-red-500 hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-0">
                <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-slate-900">The Performance Decline</h3>
                <ul className="space-y-2 text-slate-700 text-sm sm:text-base">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Weight gain despite restrictive diets</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Low libido and diminished performance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Lost the respect and authority you once commanded</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-6 sm:mt-8 md:mt-12 p-4 sm:p-6 md:p-8 bg-white rounded-lg shadow-lg">
            <p className="text-sm sm:text-base md:text-lg text-slate-700 italic">
              "You've tried every diet, supplement, and biohack out there. Nothing works because you're treating symptoms, not the root cause."
            </p>
          </div>
        </div>
      </LazySection>

      {/* Solution Section - Enhanced mobile layout */}
      <LazySection className="py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
              The Solution: Metabolic & Hormonal Optimization
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600">
              Fix your metabolism at the root using a protocol designed specifically for high-performing surgeons
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
            <Card className="p-4 sm:p-6 text-center hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Target className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg mb-2">Root Cause Approach</h3>
                <p className="text-slate-600 text-sm sm:text-base">Address insulin resistance, hormonal imbalances, and metabolic dysfunction—not just symptoms</p>
              </CardContent>
            </Card>

            <Card className="p-4 sm:p-6 text-center hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg mb-2">Time-Efficient</h3>
                <p className="text-slate-600 text-sm sm:text-base">Designed for your demanding schedule—maximum results with minimal time investment</p>
              </CardContent>
            </Card>

            <Card className="p-4 sm:p-6 text-center hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg mb-2">Evidence-Based</h3>
                <p className="text-slate-600 text-sm sm:text-base">Backed by the latest research in metabolic health and hormonal optimization</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </LazySection>

      {/* Science Behind the Reset Section - Enhanced readability */}
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

      {/* What You Get - Enhanced mobile grid */}
      <LazySection className="py-8 sm:py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
              What You Get in the Surgeon Metabolism Bible
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600">
              Everything you need to restore your vitality and reclaim your energy
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <Card className="p-4 sm:p-6 md:p-8 hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-0">
                <h3 className="font-bold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-slate-900">Core eBook (50 pages)</h3>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">The 3 metabolic pillars every surgeon must master</span>
                  </li>
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">How to fix insulin resistance in 21 days</span>
                  </li>
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">The surgeon's guide to hormonal optimization</span>
                  </li>
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Energy restoration protocols that work in 48 hours</span>
                  </li>
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Mental clarity enhancement strategies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-4 sm:p-6 md:p-8 border-2 border-blue-200 bg-blue-50 hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-0">
                <h3 className="font-bold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-slate-900">Exclusive Bonuses</h3>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base"><strong>Grocery Guide:</strong> Done-for-you shopping list</span>
                  </li>
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base"><strong>Supplement Guide:</strong> Performance, energy & libido stack</span>
                  </li>
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base"><strong>Quick Start Protocol:</strong> See results in 7 days</span>
                  </li>
                </ul>
                
                <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-white rounded-lg">
                  <p className="text-xs sm:text-sm text-slate-600 mb-1 sm:mb-2">Total Value: $197</p>
                  <p className="text-2xl sm:text-3xl font-bold text-blue-600">Your Price: $27</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-6 sm:mt-8 md:mt-12">
            <Button 
              onClick={() => handleCTAClick('main_offer')}
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-12 py-3 md:py-4 h-auto w-full sm:w-auto transition-all duration-200 touch-manipulation font-semibold"
            >
              Get Instant Access - $27
              <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
            </Button>
            <p className="text-xs sm:text-sm text-slate-500 mt-3 sm:mt-4">
              Instant download • 30-day money-back guarantee
            </p>
          </div>
        </div>
      </LazySection>

      {/* Results Section - Enhanced mobile spacing */}
      <LazySection className="py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
              Transform Your Body & Performance
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600">
              What you can expect when you follow the protocol
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-0 rounded-lg hover:bg-slate-50 transition-colors duration-200">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-3 w-3 sm:h-5 sm:w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg text-slate-900">Restored Energy</h3>
                  <p className="text-slate-600 text-sm sm:text-base">Feel sharp and energized throughout 12-hour surgeries</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-0 rounded-lg hover:bg-slate-50 transition-colors duration-200">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-3 w-3 sm:h-5 sm:w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg text-slate-900">Mental Clarity</h3>
                  <p className="text-slate-600 text-sm sm:text-base">Eliminate brain fog and enhance surgical precision</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-0 rounded-lg hover:bg-slate-50 transition-colors duration-200">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-3 w-3 sm:h-5 sm:w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg text-slate-900">Effortless Weight Management</h3>
                  <p className="text-slate-600 text-sm sm:text-base">Lose stubborn weight without restrictive dieting</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-0 rounded-lg hover:bg-slate-50 transition-colors duration-200">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-3 w-3 sm:h-5 sm:w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg text-slate-900">Enhanced Performance</h3>
                  <p className="text-slate-600 text-sm sm:text-base">Reclaim vitality and sexual health</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-0 rounded-lg hover:bg-slate-50 transition-colors duration-200">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-3 w-3 sm:h-5 sm:w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg text-slate-900">Family Energy</h3>
                  <p className="text-slate-600 text-sm sm:text-base">Have energy left for what matters most</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-0 rounded-lg hover:bg-slate-50 transition-colors duration-200">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-3 w-3 sm:h-5 sm:w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg text-slate-900">Professional Authority</h3>
                  <p className="text-slate-600 text-sm sm:text-base">Command respect with renewed confidence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LazySection>

      {/* Final CTA - Enhanced mobile layout */}
      <LazySection className="py-8 sm:py-12 md:py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 sm:mb-4">
            Ready to Reclaim Your Vitality?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90">
            Stop accepting fatigue and low energy as "part of the job." You deserve to feel strong, sharp, and energized at every stage of your career.
          </p>
          
          <Button 
            onClick={() => handleCTAClick('bottom_cta')}
            size="lg" 
            className="bg-white text-blue-600 hover:bg-slate-100 active:bg-slate-200 text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-12 py-3 sm:py-4 h-auto font-semibold w-full sm:w-auto transition-all duration-200 touch-manipulation"
          >
            Get The Surgeon Metabolism Bible - $27
            <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
          </Button>
          
          <p className="text-xs sm:text-sm mt-3 sm:mt-4 opacity-75">
            Instant download • 30-day money-back guarantee • For surgeons only
          </p>
        </div>
      </LazySection>

      {/* Footer - Enhanced mobile layout */}
      <LazySection>
        <footer className="py-8 sm:py-12 md:py-16 bg-slate-900 text-white">
          <div className="container mx-auto px-4 max-w-6xl">
            
            {/* Policy Sections */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12">
              
              {/* Terms of Service */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Terms of Service</h3>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  By using this site or purchasing a product, you agree to not share, reproduce, or 
                  distribute any of the materials without written permission. This content is for 
                  educational purposes only and is not a substitute for medical advice. Use at your 
                  own discretion.
                </p>
              </div>

              {/* Privacy Policy */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Privacy Policy</h3>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  We respect your privacy. We collect minimal personal information (name, email, 
                  payment details) to fulfill your order and deliver your products. We do not sell or 
                  share your information with third parties. All data is handled through secure 
                  platforms like Gumroad and our email provider.
                </p>
              </div>

              {/* Refund Policy */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Refund Policy</h3>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  We offer a 30-day, 100% money-back guarantee. If you're not satisfied with your 
                  purchase for any reason, simply email us within 30 days of your order and we'll 
                  issue a full refund — no questions asked. Your satisfaction is our priority.
                </p>
              </div>

            </div>

            {/* Bottom Section */}
            <div className="border-t border-slate-700 pt-6 sm:pt-8">
              <div className="text-center mb-6 sm:mb-8">
                <p className="text-slate-400 mb-4 sm:mb-6 text-sm sm:text-base">
                  © 2024 Surgeon Metabolism Bible. All rights reserved.
                </p>
                
                {/* Citations */}
                <div className="mb-6 sm:mb-8">
                  <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">References</h4>
                  <div className="text-left max-w-4xl mx-auto space-y-2 sm:space-y-3 text-xs sm:text-sm text-slate-400">
                    <p>
                      <sup>1</sup> Filler K, Lyon D, Bennett J, McCain N, et al. Association of mitochondrial dysfunction and fatigue: A review of the literature. BBA Clin. 2014 Aug;1:12-23.
                    </p>
                    <p>
                      <sup>2</sup> Boolani A, O'Connor P, Reid J, et al. Sleep Quality in Relation to Trait Energy and Fatigue. Front Psychol. 2022 Feb 15;13:799961.
                    </p>
                  </div>
                </div>
                
                <p className="text-xs text-slate-500">
                  This product is not intended to diagnose, treat, cure, or prevent any disease.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </LazySection>
    </div>
  );
};

export default Index;
