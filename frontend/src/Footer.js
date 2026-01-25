import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>📞 <a href="tel:+447446084868">+44 7446 084868</a></p>
          <p>📧 <a href="mailto:abid.fiaz@observantsecurity.co.uk">abid.fiaz@observantsecurity.co.uk</a></p>
          <p>📍 A9 ParkLane Castle Vale<br />Birmingham</p>
        </div>
        <div className="footer-section footer-services">
          <h3>Services</h3>
          <div className="services-columns">
            <ul>
              <li><Link to="/service/0">CCTV Security</Link></li>
              <li><Link to="/service/1">Residential Security</Link></li>
              <li><Link to="/service/2">Construction Security</Link></li>
              <li><Link to="/service/3">Corporate Security</Link></li>
            </ul>
            <ul>
              <li><Link to="/service/4">Event Security</Link></li>
              <li><Link to="/service/5">Mobile Security</Link></li>
              <li><Link to="/service/6">Warehouses Security</Link></li>
              <li><Link to="/service/7">Solar Farm Security</Link></li>
            </ul>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
              <img src="/linkedin-logo.webp" alt="LinkedIn" className="social-icon-img" />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook">
              <img src="/facebook-logo.png" alt="Facebook" className="social-icon-img" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
              <img src="/insta_logo.png" alt="Instagram" className="social-icon-img" />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>About</h3>
          <p>Observant Security Solution was formed in 2000 in response to the need for a security company with a service-driven approach. We provide professional security solutions nationwide.</p>
        </div>
      </div>
      <div className="copyright-bar">
        <p>&copy; {new Date().getFullYear()} Observant Security. All Rights Reserved. | <button className="link-button">Privacy Policy</button> | <button className="link-button">Terms of Service</button></p>
        <div className="accreditation-logos">
          {/* Placeholder for accreditation logos */}
          <img src="/logo.png" alt="SIA Accredited" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
