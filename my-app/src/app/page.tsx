import React from 'react';
import './globals.css';
// components
import Nav from './components/nav/nav';
import Footer from './components/footer/footer';
import Hero from './UI/hero/hero';

export default function Home() {
  return (
    <div className="home-component">
      <div className="home-component-nav">
        <Nav />
      </div>
        <Hero />
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
