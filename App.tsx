import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RoleDetails } from './components/RoleDetails';
import { Requirements } from './components/Requirements';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { BackgroundGradient } from './components/BackgroundGradient';

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary selection:text-white overflow-x-hidden">
      <BackgroundGradient />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <RoleDetails />
        <Requirements />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}