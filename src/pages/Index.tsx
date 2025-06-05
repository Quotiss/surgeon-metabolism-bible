import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, ArrowRight, Clock, Shield, Target } from "lucide-react";

const Index = () => {
  const handleCTAClick = () => {
    window.open("https://noahgordon.gumroad.com/l/surgeonsmetabolismbible", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="font-bold text-xl text-slate-900">
              Surgeon Metabolism Bible
            </div>
            <Button onClick={handleCTAClick} className="bg-blue-600 hover:bg-blue-700">
              Get Access Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
            For Orthopedic Surgeons Only
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Your Metabolism's Been <span className="text-blue-600">Misfiring for Years</span> — and No One Told You Why
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover the protocol elite surgeons are using to reclaim their energy, focus, and vitality — without restrictive diets or broken health advice.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={handleCTAClick}
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 h-auto"
            >
              Get The Complete Protocol - $27
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <div className="text-sm text-slate-500">
              ⚡ Instant download • 50-page eBook + bonuses
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2">
              <Clock className="h-5 w-5 text-blue-600" />
              <span className="text-slate-600">No time-wasting fluff</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Shield className="h-5 w-5 text-blue-600" />
              <span className="text-slate-600">Evidence-based approach</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Target className="h-5 w-5 text-blue-600" />
              <span className="text-slate-600">Surgeon-specific protocol</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              You're Successful in Surgery, But Your Body is Failing You
            </h2>
            <p className="text-xl text-slate-600">
              Sound familiar? You're not alone. Here's what most surgeons are struggling with:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 border-l-4 border-l-red-500">
              <CardContent className="p-0">
                <h3 className="font-semibold text-lg mb-4 text-slate-900">The Energy Crisis</h3>
                <ul className="space-y-2 text-slate-700">
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

            <Card className="p-6 border-l-4 border-l-red-500">
              <CardContent className="p-0">
                <h3 className="font-semibold text-lg mb-4 text-slate-900">The Performance Decline</h3>
                <ul className="space-y-2 text-slate-700">
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

          <div className="text-center mt-12 p-8 bg-white rounded-lg shadow-lg">
            <p className="text-lg text-slate-700 italic">
              "You've tried every diet, supplement, and biohack out there. Nothing works because you're treating symptoms, not the root cause."
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              The Solution: Metabolic & Hormonal Optimization
            </h2>
            <p className="text-xl text-slate-600">
              Fix your metabolism at the root using a protocol designed specifically for high-performing surgeons
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Root Cause Approach</h3>
                <p className="text-slate-600">Address insulin resistance, hormonal imbalances, and metabolic dysfunction—not just symptoms</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Time-Efficient</h3>
                <p className="text-slate-600">Designed for your demanding schedule—maximum results with minimal time investment</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Evidence-Based</h3>
                <p className="text-slate-600">Backed by the latest research in metabolic health and hormonal optimization</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              What You Get in the Surgeon Metabolism Bible
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to restore your vitality and reclaim your energy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="font-bold text-2xl mb-4 text-slate-900">Core eBook (50 pages)</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>The 3 metabolic pillars every surgeon must master</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>How to fix insulin resistance in 21 days</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>The surgeon's guide to hormonal optimization</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Energy restoration protocols that work in 48 hours</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Mental clarity enhancement strategies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-blue-200 bg-blue-50">
              <CardContent className="p-0">
                <h3 className="font-bold text-2xl mb-4 text-slate-900">Exclusive Bonuses</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Star className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Grocery Guide:</strong> Done-for-you shopping list</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Star className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Supplement Guide:</strong> Performance, energy & libido stack</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Star className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Quick Start Protocol:</strong> See results in 7 days</span>
                  </li>
                </ul>
                
                <div className="mt-6 p-4 bg-white rounded-lg">
                  <p className="text-sm text-slate-600 mb-2">Total Value: $197</p>
                  <p className="text-3xl font-bold text-blue-600">Your Price: $27</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={handleCTAClick}
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-lg px-12 py-4 h-auto"
            >
              Get Instant Access - $27
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-sm text-slate-500 mt-4">
              Instant download • 30-day money-back guarantee
            </p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Transform Your Body & Performance
            </h2>
            <p className="text-xl text-slate-600">
              What you can expect when you follow the protocol
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-900">Restored Energy</h3>
                  <p className="text-slate-600">Feel sharp and energized throughout 12-hour surgeries</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-900">Mental Clarity</h3>
                  <p className="text-slate-600">Eliminate brain fog and enhance surgical precision</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-900">Effortless Weight Management</h3>
                  <p className="text-slate-600">Lose stubborn weight without restrictive dieting</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-900">Enhanced Performance</h3>
                  <p className="text-slate-600">Reclaim vitality and sexual health</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-900">Family Energy</h3>
                  <p className="text-slate-600">Have energy left for what matters most</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-900">Professional Authority</h3>
                  <p className="text-slate-600">Command respect with renewed confidence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Reclaim Your Vitality?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Stop accepting fatigue and low energy as "part of the job." You deserve to feel strong, sharp, and energized at every stage of your career.
          </p>
          
          <Button 
            onClick={handleCTAClick}
            size="lg" 
            className="bg-white text-blue-600 hover:bg-slate-100 text-lg px-12 py-4 h-auto font-semibold"
          >
            Get The Surgeon Metabolism Bible - $27
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <p className="text-sm mt-4 opacity-75">
            Instant download • 30-day money-back guarantee • For surgeons only
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400">
            © 2024 Surgeon Metabolism Bible. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 mt-2">
            This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
