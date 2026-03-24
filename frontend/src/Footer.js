import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section footer-brand-info">
          <Link to="/" className="footer-logo">
            <img src="/logo.png" alt="Observant Security" />
            <h3>Observant Security</h3>
          </Link>
          <p>
            Professional, service-driven security solutions across the UK. Protecting your assets with 24/7 reliability since 2000.
          </p>
        </div>

        <div className="footer-section footer-services">
          <h3>Our Services</h3>
          <div className="services-columns">
            <ul>
              <li><Link to="/service/0">Solar Farm Security</Link></li>
              <li><Link to="/service/1">CCTV Security</Link></li>
              <li><Link to="/service/2">Construction</Link></li>
              <li><Link to="/service/3">Corporate</Link></li>
            </ul>
            <ul>
              <li><Link to="/service/4">Event Security</Link></li>
              <li><Link to="/service/5">Mobile Security</Link></li>
              <li><Link to="/service/6">Warehouses</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-section footer-policies">
          <h3>Legal & Policies</h3>
          <ul>
            <li><Link to="/policy/public-protection">Public Protection Policy</Link></li>
            <li><Link to="/policy/data-protection">Data Protection Policy</Link></li>
            <li><Link to="/policy/social-media">Social Media Policy</Link></li>
            <li><Link to="/policy/business-continuity">Business Continuity Plan</Link></li>
            <li><Link to="/policy/mission">Our Mission</Link></li>
          </ul>
        </div>

        <div className="footer-section footer-contact">
          <h3>Contact Information</h3>
          <p><strong>📞 Phone:</strong><br /><a href="tel:+447446084868">+44 7446 084868</a></p>
          <p><strong>📧 Email:</strong><br /><a href="mailto:abid.fiaz@observantsecurity.co.uk">abid.fiaz@observantsecurity.co.uk</a></p>
          <p><strong>📍 Address:</strong><br />A9 ParkLane Castle Vale<br />Birmingham, UK</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-links-centered">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img src="/linkedin.png" alt="LinkedIn" className="social-icon-img" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <img src="/facebook.png" alt="Facebook" className="social-icon-img" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img src="/instagram.png" alt="Instagram" className="social-icon-img" />
          </a>
          <a href="https://wa.me/+447925127201" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <img src="/whattsup.png" alt="WhatsApp" className="social-icon-img" />
          </a>
        </div>

        <div className="copyright-bar">
          <p>&copy; {new Date().getFullYear()} Observant Security. All Rights Reserved. | <Link to="/policy/data-protection">Privacy Policy</Link> | <button className="link-button">Terms of Service</button></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
