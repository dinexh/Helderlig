'use client';
import React from 'react';
import { products } from '@/app/data/products';
import Image from 'next/image';
import './projects.css';
import { motion } from 'framer-motion';

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <motion.h1 
        className="projects-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Wood Projects & Applications
      </motion.h1>
      
      <div className="projects-container">
        {products.map((product, index) => (
          <motion.div 
            key={product.id}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="project-image">
              <Image
                src={product.image}
                alt={product.name}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="project-content">
              <h2>{product.name}</h2>
              <p className="origin">Origin: {product.origin}</p>
              <div className="properties">
                <div className="property">
                  <span>Hardness: {product.hardness}%</span>
                  <div className="property-bar">
                    <div 
                      className="property-fill"
                      style={{ width: `${product.hardness}%` }}
                    ></div>
                  </div>
                </div>
                <div className="property">
                  <span>Durability: {product.durability}%</span>
                  <div className="property-bar">
                    <div 
                      className="property-fill"
                      style={{ width: `${product.durability}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="detailed-description">
                <h3>Description</h3>
                <p>{product.description}</p>
              </div>
              <div className="applications">
                <h3>Applications</h3>
                <ul>
                  {product.applications.map((app, idx) => (
                    <li key={idx}>{app}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage; 