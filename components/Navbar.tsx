import React, { useState } from 'react';
import { Button } from './ui';
import { Code2, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav h-16 safe-area-inset">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer min-h-[44px] min-w-[44px] -ml-2 pl-2" 
            onClick={() => window.scrollTo(0,0)}
          >
            <Code2 className="w-6 h-6 text-primary" />
            <span className="font-semibold text-lg tracking-tight">Rayyan.dev</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('role')} 
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors min-h-[44px] px-2"
            >
              My Expertise
            </button>
            <button 
              onClick={() => scrollToSection('requirements')} 
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors min-h-[44px] px-2"
            >
              Why Me?
            </button>
            <Button onClick={() => scrollToSection('apply')} variant="default" size="sm">
              Contact Me
            </Button>
          </div>

          <button 
            className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
            onClick={() => setMobileMenuOpen(false)} 
          />
          <div className="absolute top-16 left-0 right-0 bg-zinc-900 border-b border-zinc-800 p-6 space-y-4 animate-fade-in-up">
            <button 
              onClick={() => scrollToSection('role')} 
              className="block w-full text-left text-lg font-medium text-zinc-200 hover:text-white py-4 border-b border-zinc-800 active:bg-zinc-800 transition-colors"
            >
              My Expertise
            </button>
            <button 
              onClick={() => scrollToSection('requirements')} 
              className="block w-full text-left text-lg font-medium text-zinc-200 hover:text-white py-4 border-b border-zinc-800 active:bg-zinc-800 transition-colors"
            >
              Why Me?
            </button>
            <Button 
              onClick={() => scrollToSection('apply')} 
              variant="default" 
              size="lg"
              className="w-full mt-4 h-14"
            >
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </>
  );
};