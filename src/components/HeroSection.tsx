import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
const HeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('why-we-showed-up');
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-purple-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,212,255,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.05),transparent_50%)]" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => <div key={i} className="absolute w-1 h-1 bg-electric-blue rounded-full opacity-30 animate-pulse" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${2 + Math.random() * 3}s`
      }} />)}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Logo Container */}
        <div className="mb-8 sm:mb-12 flex justify-center">
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-deep-violet to-electric-blue opacity-20 blur-xl scale-150 animate-glow-pulse" />
            
            {/* Actual Logo */}
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 animate-logo-float">
              <img src="/lovable-uploads/a58f20d0-fc74-4368-a2da-2040d63e3065.png" alt="The Innovators - Octopus Shield Logo" className="w-full h-full object-contain drop-shadow-2xl" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-purple-600/10 to-transparent" />
            </div>
          </div>
        </div>

        {/* YouTube Video */}
        <div className="mb-8 sm:mb-12 flex justify-center">
          <div className="relative w-full max-w-2xl aspect-video rounded-lg overflow-hidden shadow-2xl">
            <iframe src="https://www.youtube.com/embed/k-1oPVhCWaI" title="The Innovators Video" className="w-full h-full" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-orbitron font-bold text-white mb-6 animate-fade-in-up tracking-tight">
          <span className="bg-gradient-to-r from-white via-electric-blue to-deep-violet bg-clip-text text-transparent">Enter the</span>
          <br />
          <span className="text-white">Arena of Agency</span>
        </h1>

        {/* Tagline */}
        <div className="space-y-4 mb-8 sm:mb-12 animate-fade-in-up" style={{
        animationDelay: '0.3s',
        animationFillMode: 'both'
      }}>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-inter font-light leading-relaxed max-w-3xl mx-auto">
            Agency for All (Who Want It)
          </p>
          <div className="flex items-center justify-center space-x-4 text-electric-blue font-orbitron font-semibold">
            <span className="text-sm sm:text-base">THE INNOVATORS</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in-up" style={{
        animationDelay: '0.6s',
        animationFillMode: 'both'
      }}>
          <Button onClick={scrollToNext} size="lg" className="bg-gradient-to-r from-arena-purple to-deep-violet hover:from-deep-violet hover:to-arena-purple text-white font-orbitron font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 border border-purple-400/30">
            Step In
            <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
          </Button>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>;
};
export default HeroSection;