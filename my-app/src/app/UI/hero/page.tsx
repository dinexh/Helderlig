'use client';
import React from 'react';
import './hero.css';
import { motion } from 'framer-motion';
import { GiWoodBeam, GiTreeBranch, GiEarthAmerica } from 'react-icons/gi';

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Premium Timber Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Sustainable Wood Products for Global Markets
        </motion.p>
        <motion.div
          className="hero-features"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="feature">
            <GiWoodBeam />
            <span>Premium Quality</span>
          </div>
          <div className="feature">
            <GiTreeBranch />
            <span>Sustainable</span>
          </div>
          <div className="feature">
            <GiEarthAmerica />
            <span>Global Reach</span>
          </div>
        </motion.div>
        <motion.button
          className="cta-button"
          onClick={scrollToServices}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Our Services
        </motion.button>
      </div>
    </div>
  );
};

export default Hero; 