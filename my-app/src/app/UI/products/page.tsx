'use client';
import React, { useState, useEffect } from 'react';
import './products.css';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '@/app/data/products';
import { StaticImageData } from 'next/image';
import Image from 'next/image';

// Define the Product type
interface Product {
  id: number;
  name: string;
  shortDesc: string;
  description: string;
  image: StaticImageData;
  origin: string;
  hardness: number;
  durability: number;
  applications: string[];
}

const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Handle "Escape" key to close the modal
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedProduct(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="products" className="products-section">
      {/* Section Title */}
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Premium Woods
      </motion.h2>
      
      {/* Products Grid */}
      <div className="products-grid">
        {products && products.length > 0 ? (
          products.map((product: Product, index: number) => (
            <motion.div
              key={product.id}
              className="product-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProduct(product)}
            >
              <div className="product-image-container">
                <Image 
                  src={product.image} 
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="product-overlay">
                  <span>View Details</span>
                </div>
              </div>
              <h3>{product.name}</h3>
              <p>{product.shortDesc}</p>
            </motion.div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>

      {/* Modal for Selected Product */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="product-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)} // Close modal on overlay click
          >
            <motion.div
              className="product-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Prevent modal click from closing
            >
              <button 
                className="close-modal"
                onClick={() => setSelectedProduct(null)}
              >
                ×
              </button>
              <div className="modal-content">
                {/* Modal Image */}
                <div className="modal-image">
                  <Image 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>

                {/* Modal Information */}
                <div className="modal-info">
                  <h3>{selectedProduct.name}</h3>
                  <p className="product-origin">Origin: {selectedProduct.origin}</p>
                  
                  {/* Product Properties */}
                  <div className="product-properties">
                    <div className="property">
                      <span>Hardness:</span>
                      <div className="property-bar">
                        <div 
                          className="property-fill"
                          style={{ width: `${selectedProduct.hardness}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="property">
                      <span>Durability:</span>
                      <div className="property-bar">
                        <div 
                          className="property-fill"
                          style={{ width: `${selectedProduct.durability}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Product Description */}
                  <p className="product-description">{selectedProduct.description}</p>

                  {/* Product Applications */}
                  <div className="product-applications">
                    <h4>Common Applications:</h4>
                    <ul>
                      {selectedProduct.applications.map((app, index) => (
                        <li key={index}>{app}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Products;
