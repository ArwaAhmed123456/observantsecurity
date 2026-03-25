// About.js
import React from 'react';
import './About.css';

function AboutUs() {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <div
        className="about-hero"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + '/Pages%20Images/31.png'})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>About Observant Security Solution</h1>
          <p className="hero-subtitle">
            Our mission is to provide a secure and safe environment for our clients,
            our people, and the wider community.
          </p>
        </div>
      </div>

      {/* Company Background Section */}
      <section className="about-section">
        <div className="section-content">
          <h2>Our Story</h2>
          <p>
            Observant Security Solution is a professional, service-driven security company dedicated to meeting the complex safety needs of modern businesses. Our growth and reputation have been built through excellent service delivery and genuine care for our clients' security. We pride ourselves on the long-term relationships we maintain with our partners across the UK.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="about-section">
        <div className="section-content">
          <h2>Why Choose Observant Security?</h2>
          <p>
            We provide exceptional services for assessing, planning, and securing your most important asset – your property and work environment. Our goal is to deliver the best solution for your business along with impartial advice at a fair price. We are passionate about what we do, and we approach every project with enthusiasm and commitment. In short, if you want a partner who genuinely cares about your safety, choose OBSERVANT SECURITY.
          </p>
        </div>
      </section>

      {/* Philosophy, Ethics and Principles Section — TEXT LEFT, IMAGE RIGHT */}
      <section className="about-section image-content-section reverse">
        <div className="section-image">
          <img src="/Pages%20Images/AboutUs1.jpeg" alt="Philosophy and Ethics" loading="lazy" />
        </div>
        <div className="section-content">
          <h2>Philosophy, Ethics and Principles</h2>
          <p>
            Observant Security Solutions is a UK-owned national company that specialises in
            end-to-end security solutions.
          </p>
          <p>
            At Observant Security, we work within 2 key parameters when delivering our services to customers. These are to always deliver professional standards to our customers and at all times give the customer the best possible value for their money. This is becoming increasingly important with everyone facing such testing times. However, security is still just as vital as ever in combating crime and health and safety issues raised by trespassers and any faults or damages to services causing floods, alarms or power failure.
          </p>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="about-section image-content-section">
        <div className="section-image">
          <img src="/Pages%20Images/AboutUs2.jpg" alt="CCTV Monitoring" loading="lazy" />
        </div>
        <div className="section-content">
          <h2>Our Process</h2>
          <p>
            Observant Security operates across Yorkshire and Lancashire, and we take pride in providing face-to-face interactions with our clients. A free site visit and consultation will always be conducted by a senior management member before any contract is finalised. This approach allows clients to associate a face with a name, ensuring that any issues they may have are addressed promptly and efficiently by someone they know. Our management team is available via phone 24/7, and face-to-face follow-up meetings can be scheduled when necessary.
          </p>
        </div>
      </section>

      {/* Our Business Relations Section */}
      <section className="about-section image-content-section reverse">
        <div className="section-image">
          <img src="/Pages%20Images/AboutUs3.png" alt="Our Business Relations" loading="lazy" />
        </div>
        <div className="section-content">
          <h2>Our Business Relations</h2>
          <p>
            Observant Security is equipped to manage contracts of any size with the professionalism that clients expect. Our guards are trained to meet industry standards and are licensed in accordance with the Security Industry Act 2001. Our client portfolio includes large councils such as Kirklees and Calderdale, as well as major companies like Marshall Construction and Gregory Properties, with whom we have maintained long-term working relationships.
          </p>
        </div>
      </section>

      {/* Brochure Section */}
      <section id="brochure" className="about-section brochure-section">
        <div className="section-container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2>Our Company Brochure</h2>
            <p className="section-description">Download or view our professional security services brochure</p>
            <div style={{ marginTop: '20px' }}>
              <a href="/broucher/broucher_frontside.jpeg" download className="btn primary" style={{ marginRight: '15px' }}>Front Side</a>
              <a href="/broucher/broucher_backside.jpeg" download className="btn primary">Back Side</a>
            </div>
          </div>
          <div className="brochure-display" style={{ 
            display: 'flex', 
            gap: '30px', 
            justifyContent: 'center', 
            flexWrap: 'wrap',
            padding: '20px'
          }}>
            <div className="brochure-page" style={{ 
              flex: '1', 
              maxWidth: '500px', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              borderRadius: '8px',
              overflow: 'hidden'
            }}>
              <img src="/broucher/broucher_frontside.jpeg" alt="Brochure Front" style={{ width: '100%', height: 'auto', display: 'block' }} loading="lazy" />
            </div>
            <div className="brochure-page" style={{ 
              flex: '1', 
              maxWidth: '500px', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              borderRadius: '8px',
              overflow: 'hidden'
            }}>
              <img src="/broucher/broucher_backside.jpeg" alt="Brochure Back" style={{ width: '100%', height: 'auto', display: 'block' }} loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
