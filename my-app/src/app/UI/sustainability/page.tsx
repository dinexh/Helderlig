'use client';
import React from 'react';
import './sustainability.css';
import { motion } from 'framer-motion';
import { GiTreeGrowth, GiRecycle, GiEarthAmerica } from 'react-icons/gi';
import { FaSeedling, FaTree, FaCertificate } from 'react-icons/fa';
import { MdForest, MdEco } from 'react-icons/md';
import { FaLeaf } from 'react-icons/fa';

const Sustainability = () => {
  const initiatives = [
    {
      icon: <GiTreeGrowth />,
      title: 'Responsible Forestry',
      description: 'We partner with certified sustainable forests and support reforestation programs.'
    },
    {
      icon: <GiRecycle />,
      title: 'Zero Waste',
      description: 'Our processing facilities implement zero-waste policies, utilizing every part of the timber.'
    },
    {
      icon: <GiEarthAmerica />,
      title: 'Carbon Footprint',
      description: 'We actively work to reduce our carbon footprint through efficient logistics and green energy.'
    },
    {
      icon: <FaSeedling />,
      title: 'Future Growth',
      description: 'For every tree harvested, we ensure multiple new ones are planted in its place.'
    }
  ];

  const certifications = [
    {
      icon: <FaTree className="cert-icon" />,
      name: 'FSC Certified'
    },
    {
      icon: <MdForest className="cert-icon" />,
      name: 'PEFC Certified'
    },
    {
      icon: <FaLeaf className="cert-icon" />,
      name: 'Green Business Certified'
    },
    {
      icon: <MdEco className="cert-icon" />,
      name: 'ISO 14001'
    },
    {
      icon: <FaCertificate className="cert-icon" />,
      name: 'Carbon Trust Standard'
    }
  ];

  return (
    <div className="sustainability">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Our Commitment to Sustainability
      </motion.h2>
      
      <div className="sustainability-content">
        <motion.div 
          className="sustainability-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>
            At WoodFlow, sustainability isn&apos;t just a buzzword – it&apos;s the core of our business. 
            We believe in responsible forestry practices that preserve our natural resources for future generations.
          </p>
        </motion.div>

        <div className="initiatives-grid">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              className="initiative-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="initiative-icon">
                {initiative.icon}
              </div>
              <h3>{initiative.title}</h3>
              <p>{initiative.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="certification-banner"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="certification-logos">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-item">
                {cert.icon}
                <span className="cert-name">{cert.name}</span>
              </div>
            ))}
          </div>
          <p>Proudly certified by leading international sustainability organizations</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Sustainability; 