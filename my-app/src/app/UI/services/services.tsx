import React from 'react';
import './services.css';
import servicesList from '@/data/services';

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="wood-texture-overlay"></div>
      <div className="services-container">
        <div className="section-header">
          <h2 className="services-title">Our Services</h2>
          <div className="title-underline"></div>
          <p className="services-subtitle">Excellence in Wood Trading</p>
        </div>
        
        <div className="services-grid">
          {servicesList.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                <service.icon />
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
