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

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] text-white">
          Hello Osamah,<br className="hidden md:block" />
          I Am <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600 italic px-2">
            Muhammad Rayyan.
          </span>
          <br className="hidden md:block" />
          The Engineer You Need.
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          I know you've had poor experiences finding the right talent. I built this page to prove I am different. 
          I am the "kickass" individual ready to scale your high-performance websites.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button 
            size="lg" 
            className="group text-base px-8 h-14"
            onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth'})}
          >
            Let's Talk Business
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="h-14 px-8 border-zinc-700"
            onClick={() => window.open('https://www.linkedin.com/in/rayyan-mohsin-216713331/', '_blank')}
          >
            View My Profile
          </Button>
        </div>

        {/* Feature Ticks */}
        <div className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-zinc-500 font-medium">
          <div className="flex flex-col items-center gap-2">
             <div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800">
                <Zap className="w-5 h-5 text-primary" />
             </div>
             <span>Full-Stack AI Integration</span>
          </div>
          <div className="flex flex-col items-center gap-2">
             <div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800">
                <TrendingUp className="w-5 h-5 text-primary" />
             </div>
             <span>Data-Driven ROI</span>
          </div>
          <div className="flex flex-col items-center gap-2">
             <div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800">
                <Cpu className="w-5 h-5 text-primary" />
             </div>
             <span>Autonomous Agents (n8n)</span>
          </div>
        </div>
      </div>
    </div>
  );
};