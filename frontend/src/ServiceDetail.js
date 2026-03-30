import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import servicesData from './servicesData';
import './ServiceDetail.css';

function ServiceDetail() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = servicesData[parseInt(serviceId)];

  if (!service || !service.detailedContent) {
    return (
      <div className="not-found">
        <h2>Service not found</h2>
        <button onClick={() => navigate('/services')} className="back-button">Back to Services</button>
      </div>
    );
  }

  const { detailedContent } = service;

  const accreditationLogos = [
    '/license images/contracters_logo_1.png',
    '/license images/contracters_logo_2.png',
    '/license images/contracters_logo_3.png',
    '/license images/contracters_logo_4.png',
    '/license images/contracters_logo_5.png',
    '/license images/contracters_logo_6.png',
    '/license images/contracters_logo_7.png',
    '/license images/contracters_logo_8.png',
    '/license images/contracters_logo_9.png'
  ];

  return (
    <div className="service-detail-expert">
      {/* Hero Section */}
      <div className="service-hero-expert" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + service.image})` }}>
        <div className="overlay-expert"></div>
        <div className="hero-content-expert">
          <button onClick={() => navigate(-1)} className="back-link-expert">
            <i className="fas fa-arrow-left"></i> ← Back
          </button>
          <h1>{service.title}</h1>
          <p className="hero-intro-text">{detailedContent.intro}</p>
        </div>
      </div>

      {/* Intro Section */}
      <section className="intro-section-expert">
        <div className="container-expert">
          <div className="intro-grid-expert">
            <div className="intro-main-text">
              <h2>Overview of {service.title}</h2>
              <p>{detailedContent.longIntro}</p>
            </div>
            <div className="stats-grid-expert">
              {detailedContent.stats.map((stat, idx) => (
                <div key={idx} className="stat-card-expert">
                  <span className="stat-value-expert">{stat.value}</span>
                  <span className="stat-label-expert">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-section-expert">
        <div className="container-expert">
          <div className="why-content-expert">
            <div className="why-text-wrapper-expert">
              <span className="section-tag-expert">Expert Insight</span>
              <h2>{detailedContent.whyTitle}</h2>
              <p>{detailedContent.whyText}</p>
              <button onClick={() => navigate('/contact')} className="btn-primary-expert">Get Expert Advice</button>
            </div>
            <div className="why-image-expert">
               <img src={process.env.PUBLIC_URL + service.image} alt={service.title} loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Features Section */}
      <section className="features-section-expert">
        <div className="container-expert">
          <div className="section-header-expert">
            <h2>Our Specialist {service.title} Capabilities</h2>
            <p>Tailored solutions designed for maximum protection and efficiency.</p>
          </div>
          <div className="features-grid-expert">
            {detailedContent.features.map((feature, idx) => (
              <div key={idx} className="feature-card-expert">
                <div className="feature-icon-expert">
                  <i className={`fas ${feature.icon}`}></i>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology / Process Section */}
      <section className="methodology-section-expert">
        <div className="container-expert">
          <div className="methodology-header-expert">
            <span className="section-tag-expert">Our Methodology</span>
            <h2>Security Deployment Process</h2>
            <p>A rigorous, multi-stage approach to ensuring your site's total integrity.</p>
          </div>
          <div className="process-timeline-expert">
            <div className="process-step-expert">
              <div className="step-number-expert">01</div>
              <div className="step-content-expert">
                <h3>Risk Assessment</h3>
                <p>Comprehensive evaluation of site vulnerabilities, topography, and asset value.</p>
              </div>
            </div>
            <div className="process-step-expert">
              <div className="step-number-expert">02</div>
              <div className="step-content-expert">
                <h3>Technical Design</h3>
                <p>Custom engineering of CCTV, sensor arrays, and communication infrastructure.</p>
              </div>
            </div>
            <div className="process-step-expert">
              <div className="step-number-expert">03</div>
              <div className="step-content-expert">
                <h3>Elite Guarding</h3>
                <p>Deployment of SIA-licensed personnel specifically trained for your sector.</p>
              </div>
            </div>
            <div className="process-step-expert">
              <div className="step-number-expert">04</div>
              <div className="step-content-expert">
                <h3>24/7 Monitoring</h3>
                <p>Triple-redundant remote surveillance with immediate intervention protocols.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Gallery Section */}
      {detailedContent.gallery && (
        <section className="gallery-section-expert">
          <div className="container-expert">
            <div className="section-header-expert">
              <h2>Project Gallery & Media</h2>
              <p>Visual demonstration of our security installations and operational capabilities.</p>
            </div>
            <div className="gallery-grid-expert">
              {detailedContent.gallery.map((item, idx) => (
                <div key={idx} className="gallery-item-expert">
                  {item.type === 'image' ? (
                    <img src={process.env.PUBLIC_URL + item.src} alt={item.alt} loading="lazy" decoding="async" />
                  ) : (
                    <video controls muted preload="none">
                      <source src={process.env.PUBLIC_URL + item.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                  <div className="gallery-caption-expert">{item.alt}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Accreditations Section */}
      <section className="accreditations-section-expert">
        <div className="container-expert">
          <div className="accreditation-header-expert">
             <h3>Accreditations & Certifications</h3>
             <p>Trusted by UK contractors for audit-ready security solutions.</p>
          </div>
          <div className="accreditation-marquee-expert">
            <div className="marquee-content-expert">
              {accreditationLogos.map((logo, idx) => (
                <img key={idx} src={process.env.PUBLIC_URL + logo} alt="Accreditation" loading="lazy" decoding="async" />
              ))}
              {/* Duplicate for seamless loop */}
              {accreditationLogos.map((logo, idx) => (
                <img key={`dup-${idx}`} src={process.env.PUBLIC_URL + logo} alt="Accreditation" loading="lazy" decoding="async" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta-expert">
        <div className="container-expert">
          <div className="cta-box-expert">
            <h2>Ready to Secure Your Assets?</h2>
            <p>Speak with one of our specialists today for a customized security assessment.</p>
            <div className="cta-buttons-expert">
              <button onClick={() => navigate('/contact')} className="btn-main-expert">Request a Quote</button>
              <a href="tel:+447446084868" className="btn-alt-expert">Call Us: +44 7446 084868</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServiceDetail;
