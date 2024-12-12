import React from 'react';
import './globals.css';
// components
import Nav from './components/nav/nav';
import Footer from './components/footer/footer';
// UI components
import Hero from './UI/hero/page';
import Services from './UI/services/page';
import Products from './UI/products/page';
import Sustainability from './UI/sustainability/page';
import About from './UI/about/about';
import Testimonials from './UI/testimonials/page';
import Contact from './UI/contact/page';

export default function Home() {
  return (
    <div className="home-component">
      <div className="home-component-nav">
        <Nav />
      </div>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="products">
        <Products />
      </section>
      <section id="sustainability">
        <Sustainability />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <div className="home-component-footer">
        <Footer />
      </div>
    </div>  
  );
}
