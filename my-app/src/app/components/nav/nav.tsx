'use client'
import React, { useState, useEffect } from 'react';
import './nav.css';
import Logo from "../../Assets/logo.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = document.querySelector('.nav-container')?.clientHeight || 0;
      const elementPosition = element.offsetTop - navHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`nav-container ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <div className="nav-logo" onClick={() => scrollToSection('home')}>
          <div className="logo-wrapper">
            <Image 
              src={Logo} 
              alt="Logo" 
              className="logo-icon" 
              width={50} 
              height={50} 
              priority
            />
          </div>
          <span className="company-name">Helderlig Commmerico PVT LTD</span>
        </div>

        <div className="nav-links-desktop">
          {['about', 'services', 'products', 'sustainability', 'team',  'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="nav-link"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>

        <button 
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <GiHamburgerMenu className="menu-icon" />
        </button>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {['about', 'services', 'products', 'sustainability', 'team',  'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="mobile-nav-link"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Nav;