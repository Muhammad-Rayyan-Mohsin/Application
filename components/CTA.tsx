import React from 'react';
import { Section, Button, Card, CardContent } from './ui';
import { Mail, Calendar, CheckCircle2, Phone, Github, Linkedin } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <Section id="apply" className="mb-10 sm:mb-20">
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800">
        
        {/* Background gradient */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-900/20 to-transparent pointer-events-none" />
        
        <div className="relative p-5 sm:p-8 md:p-16 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 space-y-5 sm:space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white">
              Osamah, let's stop searching and <span className="text-primary italic">start scaling.</span>
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 max-w-xl">
              I've built this page to prove I speak your language. I am ready to be the "technical pro" you've been looking for.
            </p>
            
            <div className="flex flex-col gap-2 sm:gap-3">
               <div className="flex items-center gap-2 text-zinc-300 text-sm sm:text-base">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span>Available Immediately</span>
               </div>
               <div className="flex items-center gap-2 text-zinc-300 text-sm sm:text-base">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span>Expert in n8n, AI Agents & Full Stack</span>
               </div>
            </div>

            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a 
                href="mailto:Mo.rayyan2002@gmail.com?subject=Interview Request from Osamah Nasir"
                className="inline-block w-full sm:w-auto"
              >
                <Button size="lg" className="h-14 px-6 sm:px-8 text-base bg-white text-black hover:bg-zinc-200 w-full min-h-[56px] touch-manipulation">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Me Back
                </Button>
              </a>
               <Button 
                size="lg" 
                variant="outline" 
                className="h-14 px-6 sm:px-8 text-base w-full sm:w-auto min-h-[56px] touch-manipulation"
                onClick={() => window.open('https://www.linkedin.com/in/rayyan-mohsin-216713331/', '_blank')}
               >
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </Button>
            </div>
          </div>

          <div className="flex-1 w-full lg:max-w-md">
            <Card className="bg-black/40 backdrop-blur-md border-zinc-700/50">
              <CardContent className="p-5 sm:p-8 space-y-4 sm:space-y-6">
                <div className="space-y-3 sm:space-y-4">
                  <label className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">My Contact Details</label>
                  
                  <a 
                    href="mailto:Mo.rayyan2002@gmail.com" 
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-zinc-600 active:bg-zinc-800 transition-colors min-h-[52px] touch-manipulation"
                  >
                    <Mail className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-zinc-200 break-all">Mo.rayyan2002@gmail.com</span>
                  </a>
                  
                  <a 
                    href="tel:+923339312013" 
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-zinc-600 active:bg-zinc-800 transition-colors min-h-[52px] touch-manipulation"
                  >
                    <Phone className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-zinc-200">0333-9312013</span>
                  </a>

                  <a 
                    href="https://github.com/rayyan-mohsin" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-zinc-600 active:bg-zinc-800 transition-colors min-h-[52px] touch-manipulation"
                  >
                    <Github className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-zinc-200">github.com/rayyan-mohsin</span>
                  </a>

                </div>
                <div className="p-3 sm:p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                  <p className="text-sm text-emerald-200">
                    <strong className="block mb-1 text-emerald-400">Personal Note:</strong> 
                    Osamah, this entire site was built to demonstrate that I don't just talk about "high-end" design—I deliver it.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
};