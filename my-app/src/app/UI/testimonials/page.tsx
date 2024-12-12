'use client';
import React, { useState, useEffect } from 'react';
import './testimonials.css';
import { testimonials } from '@/app/data/testimonials';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="testimonials">
      <div className="wood-texture-overlay"></div>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Client Testimonials
      </motion.h2>
      <div className="testimonials-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="testimonial-card"
          >
            <div className="testimonial-content">
              <div className="quote-icon">❝</div>
              <p>{testimonials[currentSlide].content}</p>
              <div className="testimonial-author">
                <div className="author-line"></div>
                <div className="author-info">
                  <h4>{testimonials[currentSlide].name}</h4>
                  <p>{testimonials[currentSlide].role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="testimonial-controls">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`control-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 