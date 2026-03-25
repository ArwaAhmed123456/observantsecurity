import React from 'react';
import './BrochurePage.css';

const BrochurePage = () => {
  return (
    <div className="brochure-page-container">
      <div className="brochure-hero" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/Pages%20Images/31.png'})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Company Brochure</h1>
          <p>Explore our comprehensive security services and standards.</p>
        </div>
      </div>

      <div className="brochure-content-wrapper">
        <div className="brochure-actions">
          <h2>Our Professional Profile</h2>
          <p>Download our full-resolution brochure for offline viewing.</p>
          <div className="download-buttons">
            <a href="/broucher/broucher_frontside.jpeg" download className="download-btn main">
              <i className="fas fa-download"></i> Download Full Brochure
            </a>
          </div>
        </div>

        <div className="brochure-visual-display">
          <div className="brochure-image-card">
            <h3>Front View</h3>
            <img src="/broucher/broucher_frontside.jpeg" alt="Brochure Front" />
          </div>
          <div className="brochure-image-card">
            <h3>Back View</h3>
            <img src="/broucher/broucher_backside.jpeg" alt="Brochure Back" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrochurePage;
