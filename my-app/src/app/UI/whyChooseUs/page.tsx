import React from 'react';
import './whyChooseUs.css';
import { benefits } from '@/app/data/benefits';
import { motion } from 'framer-motion';

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
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className="benefit-card"
            variants={itemVariants}
          >
            <div className="benefit-icon-wrapper">
              <img src={benefit.icon} alt={benefit.title} className="benefit-icon" />
            </div>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhyChooseUs; 