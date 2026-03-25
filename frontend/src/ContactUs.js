import React from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    address: '',
    service: '',
    message: ''
  });

  const [status, setStatus] = React.useState({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({
          name: '',
          email: '',
          phone: '',
          city: '',
          address: '',
          service: '',
          message: ''
        });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setStatus({ loading: false, success: false, error: 'Failed to send message. Please try again later.' });
    }
  };

  return (
    <div className="contact-container">
      <div
        className="contact-hero"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + '/Pages%20Images/31.png'})`,
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
            <img src="/Pages%20Images/Questions-pana.png" alt="Contact Us" className="contact-form-img" loading="lazy" />
            <p className="feel-free">Feel Free to Contact Us</p>
            <p>Please fill in our short form and a member of our team will be in touch within 60 min.</p>
          </div>
          <div className="form-right">
            <h2>Enquire Today</h2>
            <p>Fill in the form below and we'll get back to you shortly</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  required
                  aria-label="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status.loading}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                  aria-label="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status.loading}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  required
                  aria-label="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={status.loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Enter your city"
                  aria-label="City"
                  value={formData.city}
                  onChange={handleChange}
                  disabled={status.loading}
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Enter your address"
                  aria-label="Address"
                  value={formData.address}
                  onChange={handleChange}
                  disabled={status.loading}
                />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service of Interest</label>
                <select
                  id="service"
                  name="service"
                  aria-label="Service of Interest"
                  value={formData.service}
                  onChange={handleChange}
                  disabled={status.loading}
                >
                  <option value="">Select a service</option>
                  <option value="manned-guarding">Manned Guarding</option>
                  <option value="cctv-monitoring">CCTV Monitoring</option>
                  <option value="mobile-patrol">Mobile Patrol</option>
                  <option value="access-control">Access Control</option>
                  <option value="solar-farm-security">Solar Farm Security</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your security requirements"
                  aria-label="Message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status.loading}
                ></textarea>
              </div>

              {status.error && <p className="error-message" style={{ color: 'red', marginBottom: '10px' }}>{status.error}</p>}
              {status.success && <p className="success-message" style={{ color: 'green', marginBottom: '10px' }}>Message sent successfully! We'll be in touch soon.</p>}

              <button type="submit" disabled={status.loading}>
                {status.loading ? 'Sending...' : 'Submit Enquiry'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;