import React from 'react';
import './globals.css';
// components
import Nav from './components/nav/nav';
import Footer from './components/footer/footer';
// UI components
import Hero from './UI/hero/hero';
import Services from './UI/services/services';
import About from './UI/about/about'

export default function Home() {
  return (
    <div className="home-component">
      <div className="home-component-nav">
        <Nav />
      </div>
        <Hero />
        <Services />
        <About />
        {/* We'll add other sections here later:
        - Key Services
        - About Us
        - Why Choose Us
        - Client Testimonials
        - Contact Section */}
      <div className="home-component-footer">
        <Footer />
      </div>
    </div>
  );
}
