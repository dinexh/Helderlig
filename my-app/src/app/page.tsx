import React from 'react';
import './globals.css';
import Nav from './components/nav/nav';
import Footer from './components/footer/footer';
export default function Home() {
  return (
      <div className="home-component">
        <div className="home-component-nav">
          <Nav />
        </div>
        <div className="home-component-footer">
          <Footer />
        </div>
      </div>
  );
}
