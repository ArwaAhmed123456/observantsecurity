// Services.js
import React from 'react';
import { Link } from 'react-router-dom';
import servicesData from './servicesData';
import './Services.css';

function Services() {
  return (
    <div className="services-container">
      <div
        className="services-hero"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + '/Pages%20Images/31.png'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Our Services</h1>
          <p>Comprehensive Security Solutions for Every Need</p>
        </div>
      </div>

      <section className="services-section">
        <div className="section-header">
          <h2>What We Offer</h2>
          <p>Observant Security provides a full range of professional security services tailored to protect your business, property, and people.</p>
        </div>
        
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <Link to={`/service/${index}`} key={index} className="service-card">
              <div className="service-image-wrapper">
                <img src={process.env.PUBLIC_URL + service.image} alt={service.title} className="service-image" />
              </div>
              <div className="service-info">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="service-link">Learn More →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;