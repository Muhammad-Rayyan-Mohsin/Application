import React from 'react';
import { ArrowRight, Zap, TrendingUp, Cpu } from 'lucide-react';
import { Button } from './ui';

export const Hero: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[90vh] text-center pt-16 overflow-hidden">
      
      {/* Decorative particles (static for performance) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/20 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-primary/40 rounded-full" />
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white/10 rounded-full" />
      </div>

      <div className="relative z-10 px-4 max-w-5xl mx-auto space-y-8 animate-fade-in-up">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 backdrop-blur-sm mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-xs font-medium text-zinc-300 tracking-wide uppercase">
            Exclusively Built for Osamah Nasir • 23% ROI Proven
          </span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.15] sm:leading-[1.1] text-white">
          Hello Osamah,<br className="hidden sm:block" />
          I Am <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600 italic px-1 sm:px-2">
            Muhammad Rayyan.
          </span>
          <br className="hidden sm:block" />
          The Engineer You Need.
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
          I know you've had poor experiences finding the right talent. I built this page to prove I am different. 
          I am the "kickass" individual ready to scale your high-performance websites.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 w-full px-2 sm:px-0">
          <Button 
            size="lg" 
            className="group text-base px-6 sm:px-8 h-14 w-full sm:w-auto min-h-[56px] touch-manipulation"
            onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth'})}
          >
            Let's Talk Business
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="h-14 px-6 sm:px-8 border-zinc-700 w-full sm:w-auto min-h-[56px] touch-manipulation"
            onClick={() => window.open('https://www.linkedin.com/in/rayyan-mohsin-216713331/', '_blank')}
          >
            View My Profile
          </Button>
        </div>

        {/* Feature Ticks */}
        <div className="pt-10 sm:pt-16 grid grid-cols-3 gap-3 sm:gap-8 text-xs sm:text-sm text-zinc-500 font-medium px-2 sm:px-0">
          <div className="flex flex-col items-center gap-2 text-center">
             <div className="p-2 sm:p-3 bg-zinc-900 rounded-lg border border-zinc-800">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
             </div>
             <span className="leading-tight">Full-Stack AI<br className="sm:hidden" /> Integration</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
             <div className="p-2 sm:p-3 bg-zinc-900 rounded-lg border border-zinc-800">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
             </div>
             <span className="leading-tight">Data-Driven<br className="sm:hidden" /> ROI</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
             <div className="p-2 sm:p-3 bg-zinc-900 rounded-lg border border-zinc-800">
                <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
             </div>
             <span className="leading-tight">Autonomous<br className="sm:hidden" /> Agents</span>
          </div>
        </div>
      </div>
    </div>
  );
};