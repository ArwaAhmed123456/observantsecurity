import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import servicesData from './servicesData';
import './ServiceDetail.css';

function ServiceDetail() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = servicesData[parseInt(serviceId)];

  if (!service) {
    return (
      <div className="not-found">
        <h2>Service not found</h2>
        <button onClick={() => navigate('/services')} className="back-button">Back to Services</button>
      </div>
    );
  }

  return (
    <div className="service-detail">
      <div className="service-hero" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + service.image})` }}>
        <div className="overlay"></div>
        <div className="hero-text">
          <h1>{service.title}</h1>
          <p>{service.description}</p>
        </div>
      </div>

      <section className="service-content-section">
        <div className="content-wrapper">
          <div className="section-intro">
            <h2>{service.title} Solutions</h2>
            <p className="intro-subtitle">Professional Security Services Delivered by Licensed Experts</p>
          </div>

          <div className="service-details">
            <div className="details-content">
              {service.content.map((item, index) => (
                <div key={index} className="detail-item">
                  <div className="detail-number">{index + 1}</div>
                  <p className="detail-text">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="service-cta">
            <h3>Ready to Discuss Your Security Needs?</h3>
            <p>Our team is ready to provide you with a customized solution</p>
            <button onClick={() => navigate('/contact')} className="contact-button">Contact Us Today</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServiceDetail;
