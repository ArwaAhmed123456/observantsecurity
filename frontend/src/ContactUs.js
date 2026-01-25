import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <div
        className="contact-hero"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + '/31.png'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="hero-content">
          <p className="hero-tagline">YOUR SAFETY IS OUR PRIORITY</p>
          <h1>Contact Us</h1>
          <p className="hero-description">
            Get in touch with our team to discuss your security needs
          </p>
          <button className="hero-button">How Can We Keep You Safe</button>
        </div>
      </div>

      <div className="contact-help">
        <div className="help-content">
          <h2>How Can We Help?</h2>
          <p>
            If you're looking for more information, need to talk to someone about an enquiry, or want to discuss your service needs, please get in touch. Our team is ready to assist you with tailored security solutions that meet your specific requirements.
          </p>
        </div>
      </div>

      <div className="contact-form-section">
        <div className="form-container">
          <div className="form-left">
            <p>Please fill in our short form and a member of our team will be in touch within 24 hours.</p>
            <p className="feel-free">Feel Free to Contact Us</p>
            <p><a href="mailto:abid.fiaz@observantsecurity.co.uk">abid.fiaz@observantsecurity.co.uk</a></p>
            <p><a href="tel:+447446084868">+44 7446 084868</a></p>
            <p>A9 ParkLane, Castle Vale<br />Birmingham</p>
          </div>
          <div className="form-right">
            <h2>Enquire Today</h2>
            <p>Fill in the form below and we'll get back to you shortly</p>
            <form>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input type="text" id="name" name="name" placeholder="Enter your full name" required aria-label="Full Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" name="email" placeholder="Enter your email address" required aria-label="Email Address" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required aria-label="Phone Number" />
              </div>

              <div className="form-group">
                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" placeholder="Enter your city" aria-label="City" />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="address" placeholder="Enter your address" aria-label="Address" />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service of Interest</label>
                <select id="service" name="service" aria-label="Service of Interest">
                  <option value="">Select a service</option>
                  <option value="manned-guarding">Manned Guarding</option>
                  <option value="cctv-monitoring">CCTV Monitoring</option>
                  <option value="mobile-patrol">Mobile Patrol</option>
                  <option value="access-control">Access Control</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Tell us about your security requirements" aria-label="Message"></textarea>
              </div>
              <button type="submit">Submit Enquiry</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;