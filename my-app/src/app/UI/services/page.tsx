'use client';
import React from 'react';
import './services.css';
import { motion } from 'framer-motion';
import { services } from '../../data/services';

const Services = () => {
  return (
    <div className="services">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Our Services
      </motion.h2>
      <div className="services-grid">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.id}
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="service-icon">
                <Icon className="service-icon" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Services; 