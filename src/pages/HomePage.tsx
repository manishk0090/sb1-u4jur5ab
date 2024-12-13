import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Projects from '../components/Projects';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Projects />
    </main>
  );
}