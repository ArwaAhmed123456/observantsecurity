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
          backgroundImage: `url(${process.env.PUBLIC_URL + '/31.png'})`,
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
          <img src="/AboutUs1.jpeg" alt="Philosophy and Ethics" />
        </div>
        <div className="section-content">
          <h2>Philosophy, Ethics and Principles</h2>
          <p>
            Observant Security Solutions is a UK-owned national company that specializes in
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
          <img src="/AboutUs2.jpg" alt="CCTV Monitoring" />
        </div>
        <div className="section-content">
          <h2>Our Process</h2>
          <p>
            Observant Security operates across Yorkshire and Lancashire, and we take pride in providing face-to-face interactions with our clients. A free site visit and consultation will always be conducted by a senior management member before any contract is finalized. This approach allows clients to associate a face with a name, ensuring that any issues they may have are addressed promptly and efficiently by someone they know. Our management team is available via phone 24/7, and face-to-face follow-up meetings can be scheduled when necessary.
          </p>
        </div>
      </section>

      {/* Our Business Relations Section */}
      <section className="about-section image-content-section reverse">
        <div className="section-image">
          <img src="/AboutUs3.png" alt="Mobile Patrol" />
        </div>
        <div className="section-content">
          <h2>Our Business Relations</h2>
          <p>
            Observant Security is equipped to manage contracts of any size with the professionalism that clients expect. Our guards are trained to meet industry standards and are licensed in accordance with the Security Industry Act 2001. Our client portfolio includes large councils such as Kirklees and Calderdale, as well as major companies like Marshall Construction and Gregory Properties, with whom we have maintained long-term working relationships.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
