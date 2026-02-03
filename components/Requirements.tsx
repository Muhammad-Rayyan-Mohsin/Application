import React from 'react';
import { Section, Badge } from './ui';

export const Requirements: React.FC = () => {
  return (
    <Section id="requirements" className="relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Badge className="mb-4 bg-zinc-800 text-zinc-300 border-zinc-700 hover:bg-zinc-800">Candidate Match</Badge>
        <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">I Am The Person You Are Looking For</h2>
        <p className="text-muted-foreground text-lg">
          You are hoping to find someone "this time around." I am that someone. 
          Here is why I fit your three core pillars.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        
        {/* Profile 1 */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl" />
          <div className="relative h-full bg-zinc-950 border border-zinc-800 p-8 rounded-2xl hover:border-zinc-600 transition-colors flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center mb-6 text-2xl font-serif text-white">
              01
            </div>
            <h3 className="text-xl font-bold text-white mb-3">The Technical Pro</h3>
            <div className="h-0.5 w-12 bg-primary/30 mb-6"></div>
            <p className="text-zinc-400 leading-relaxed">
              Bachelor's in Data Science from FAST (NUCES). AI Engineer at Remoto Co. I've built unified discovery platforms and managed massive datasets. I have the live, traffic-tested experience.
            </p>
          </div>
        </div>

        {/* Profile 2 */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl" />
          <div className="relative h-full bg-zinc-950 border border-zinc-800 p-8 rounded-2xl hover:border-zinc-600 transition-colors flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center mb-6 text-2xl font-serif text-white">
              02
            </div>
            <h3 className="text-xl font-bold text-white mb-3">The Integrator</h3>
            <div className="h-0.5 w-12 bg-primary/30 mb-6"></div>
            <p className="text-zinc-400 leading-relaxed">
              My 'Gagent' project proves I can make tools talk. I integrate OpenAI, ElevenLabs, Supabase, and custom APIs into seamless workflows that run without human intervention.
            </p>
          </div>
        </div>

        {/* Profile 3 */}
        <div className="relative group">
           <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl" />
          <div className="relative h-full bg-zinc-950 border border-zinc-800 p-8 rounded-2xl hover:border-zinc-600 transition-colors flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center mb-6 text-2xl font-serif text-white">
              03
            </div>
            <h3 className="text-xl font-bold text-white mb-3">The Growth Mindset</h3>
            <div className="h-0.5 w-12 bg-primary/30 mb-6"></div>
            <p className="text-zinc-400 leading-relaxed">
              I focused on ROI (23% improvement) and User Acquisition costs at Remoto Co. I understand that code is just a tool to drive business numbers.
            </p>
          </div>
        </div>

      </div>
    </Section>
  );
};