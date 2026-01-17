import React, { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Background from './components/layout/Background';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Testimonials from './components/sections/Testimonials';
import Pricing from './components/sections/Pricing';
import Interactive from './components/sections/Interactive';
import Footer from './components/layout/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className="app">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <Interactive />
      </main>
      <Footer />
    </div>
  );
}

export default App;
