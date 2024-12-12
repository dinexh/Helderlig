"use client";
import React from 'react';
import './whyChooseUs.css';
import { benefits } from '@/app/data/benefits';
import { motion } from 'framer-motion';
import Image from 'next/image';

const WhyChooseUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  // Add error checking for benefits
  if (!benefits || !Array.isArray(benefits)) {
    console.error('Benefits data is not properly defined');
    return null;
  }

  return (
    <section className="why-choose-us">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Why Choose Us
      </motion.h2>
      <motion.div
        className="benefits-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {benefits.map((benefit, index) => {
          // Add error checking for each benefit
          if (!benefit || !benefit.icon || !benefit.title) {
            console.error(`Invalid benefit data at index ${index}:`, benefit);
            return null;
          }

          return (
            <motion.div
              key={index}
              className="benefit-card"
              variants={itemVariants}
            >
              <div className="benefit-icon-wrapper">
                {typeof benefit.icon === 'string' ? (
                  <Image 
                    src={benefit.icon}
                    alt={benefit.title}
                    width={64}  // Adjusted to more reasonable icon sizes
                    height={64} // Adjusted to more reasonable icon sizes
                    priority={index < 2} // Only prioritize loading first two images
                  />
                ) : (
                  // If icon is a React component
                  benefit.icon
                )}
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default WhyChooseUs; 