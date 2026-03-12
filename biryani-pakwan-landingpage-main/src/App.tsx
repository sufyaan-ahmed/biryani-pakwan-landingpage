/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Menu />
        <Reviews />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
