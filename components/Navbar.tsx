import React from 'react';
import { Button } from './ui';
import { Code2 } from 'lucide-react';

export const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav h-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <Code2 className="w-6 h-6 text-primary" />
          <span className="font-semibold text-lg tracking-tight">Rayyan.dev</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('role')} className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
            My Expertise
          </button>
          <button onClick={() => scrollToSection('requirements')} className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
            Why Me?
          </button>
          <Button onClick={() => scrollToSection('apply')} variant="default" size="sm">
            Contact Me
          </Button>
        </div>

         <div className="md:hidden">
            <Button onClick={() => scrollToSection('apply')} variant="default" size="sm">Contact</Button>
         </div>
      </div>
    </nav>
  );
};