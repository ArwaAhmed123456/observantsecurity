import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Home.css";
import servicesData from "./servicesData";

function Home() {
  const navigate = useNavigate();

  // Show only 6 services for a balanced grid
  const featuredServices = servicesData.slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <div className="hero" style={{ backgroundImage: "url('/1.bg.png')" }}>
        <div className="overlay"></div>
        <div className="content">
          <h1>Professional Security Solutions Across the UK</h1>
          <h2>
            SIA Licensed Security Officers & <span className="highlight">24/7 Protection</span> for Your Business
          </h2>
          <p>
            Trusted security professional services for businesses nationwide. From manned guarding to mobile patrols,
            we deliver comprehensive protection tailored to your needs.
          </p>
          <div className="buttons">
            <button className="btn primary" onClick={() => navigate("/contact")}>
              GET A FREE QUOTE
            </button>
            <button className="btn secondary" onClick={() => navigate("/services")}>
              VIEW ALL SERVICES
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="about-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">ABOUT US</span>
            <h2>Observant Security - Your Trusted Security Provider</h2>
            <p className="section-description">
              Observant Security Solution was formed in 2000 in response to the need for a security company
              with a service-driven approach. We provide professional, reliable security solutions to businesses
              across the UK, ensuring your assets, people, and premises are protected 24/7.
            </p>
          </div>
          <div className="about-cards">
            <div className="about-card">
              <div className="card-icon">
                <img src="/CIA_Licensed.png" alt="SIA Licensed Security Officers" />
              </div>
              <h3>SIA Licensed Security Officers</h3>
              <p>All our security personnel are fully SIA licensed and professionally trained to the highest standards.</p>
            </div>
            <div className="about-card">
              <div className="card-icon">
                <img src="/tailored_Sol.png" alt="Integrated Security Solutions" />
              </div>
              <h3>Integrated Security Solutions</h3>
              <p>Specialist CCTV Tower surveillance & static guarding for comprehensive site protection.</p>
            </div>
            <div className="about-card">
              <div className="card-icon">
                <img src="/247Avalilability.png" alt="24/7 Availability" />
              </div>
              <h3>24/7 Availability</h3>
              <p>Round-the-clock security services with rapid response times across the UK.</p>
            </div>
            <div className="about-card">
              <div className="card-icon">
                <img src="/ExperiencedTeam.png" alt="Fast-Growing Company" />
              </div>
              <h3>Fast-Growing Company</h3>
              <p>Committed to excellence in providing tailored security solutions to diverse industries across the UK.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="services-showcase">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">OUR SERVICES</span>
            <h2>Comprehensive Security Solutions</h2>
            <p className="section-description">
              We deliver a wide range of security solutions to suit the needs of your business.
              Our guards have protected construction sites, warehouses, retail premises, and many more.
            </p>
          </div>
          <div className="services-grid">
            {featuredServices.map((service, index) => (
              <Link to={`/service/${index}`} key={index} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-overlay"></div>
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="service-arrow">Learn More →</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="view-all-services buttons">
            <button className="btn primary" onClick={() => navigate("/services")}>
              VIEW ALL SERVICES
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">WHY CHOOSE US</span>
            <h2>Our Technology & Approach</h2>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/Rapid_response.png" alt="Complimentary Tech Deployment" />
              </div>
              <h3>Complimentary Tech Deployment</h3>
              <p>Ask about our Free 30-Day Portable Camera trial for new solar farm contracts.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/ExperiencedTeam.png" alt="Night-Vision Superiority" />
              </div>
              <h3>Night-Vision Superiority</h3>
              <p>Specialist optics for 24/7 perimeter monitoring in remote, unlit locations.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/tailored_Sol.png" alt="Body-Cam Accountability" />
              </div>
              <h3>Body-Cam Accountability</h3>
              <p>Transparent, recorded patrolling for maximum site security and legal protection.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/Competitive_pricing.png" alt="Active Visual Deterrence" />
              </div>
              <h3>Active Visual Deterrence</h3>
              <p>High-intensity beacon systems to signal a high-security presence to potential trespassers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics-section">
        <div className="section-container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">UK</div>
              <div className="stat-label">NATIONWIDE COVERAGE</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">CLIENT SATISFACTION</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">AVAILABILITY</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">SIA LICENSED SECURITY OFFICERS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="industries-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">INDUSTRIES WE SERVE</span>
            <h2>Protecting Businesses Across All Sectors</h2>
          </div>
          <div className="industries-grid">
            <div className="industry-card">
              <div className="industry-icon">
                <img src="/Construction_icon_Home_page.png" alt="Construction" />
              </div>
              <h3>Construction</h3>
            </div>
            <div className="industry-card">
              <div className="industry-icon">
                <img src="/Corporate_icon_Home_page.png" alt="Corporate" />
              </div>
              <h3>Corporate</h3>
            </div>
            <div className="industry-card">
              <div className="industry-icon">
                <img src="/Retaild_icon_Home_page.png" alt="Retail" />
              </div>
              <h3>Retail</h3>
            </div>
            <div className="industry-card">
              <div className="industry-icon">
                <img src="/Warehouse_icon_Home_page.png" alt="Warehouses" />
              </div>
              <h3>Warehouses</h3>
            </div>
            <div className="industry-card">
              <div className="industry-icon">
                <img src="/Event_icon_Home_page.png" alt="Events" />
              </div>
              <h3>Events</h3>
            </div>
            <div className="industry-card">
              <div className="industry-icon">
                <img src="/Solar_icon_Home_page.png" alt="Solar Farms" />
              </div>
              <h3>Solar Farms</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Our Contractors / Partners */}
      <section className="contractors-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">ACCREDITATIONS</span>
            <h2>Accreditations & Certifications</h2>
          </div>
          <div className="contractors-marquee">
            <div className="contractors-track">
              {[...Array(2)].map((_, i) => (
                <React.Fragment key={i}>
                  <a href="https://www.chas.co.uk/" target="_blank" rel="noopener noreferrer" className="contractor-logo">
                    <img src="/contracters_logo_1.png" alt="CHAS Contractor" />
                  </a>
                  <a href="https://www.alcumus.com/safecontractor" target="_blank" rel="noopener noreferrer" className="contractor-logo">
                    <img src="/contracters_logo_2.png" alt="SafeContractor" />
                  </a>
                  <a href="https://www.constructionline.co.uk/" target="_blank" rel="noopener noreferrer" className="contractor-logo">
                    <img src="/contracters_logo_3.png" alt="Constructionline" />
                  </a>
                  <a href="https://www.gov.uk/government/organisations/security-industry-authority" target="_blank" rel="noopener noreferrer" className="contractor-logo">
                    <img src="/contracters_logo_4.png" alt="SIA Approved Contractor" />
                  </a>
                  <div className="contractor-logo" style={{ pointerEvents: 'none' }}>
                    <img src="/contracters_logo_5.png" alt="Accreditation Logo" />
                  </div>
                  <div className="contractor-logo" style={{ pointerEvents: 'none' }}>
                    <img src="/contracters_logo_6.png" alt="Accreditation Logo" />
                  </div>
                  <div className="contractor-logo" style={{ pointerEvents: 'none' }}>
                    <img src="/contracters_logo_7.png" alt="Accreditation Logo" />
                  </div>
                  <div className="contractor-logo" style={{ pointerEvents: 'none' }}>
                    <img src="/contracters_logo_8.png" alt="Accreditation Logo" />
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="section-container">
          <div className="cta-content">
            <h2>Ready to Secure Your Business?</h2>
            <p>Contact us today for a free, no-obligation security consultation</p>
            <div className="cta-buttons">
              <button className="btn primary large" onClick={() => navigate("/contact")}>
                GET A FREE QUOTE
              </button>
              <a href="tel:+447446084868" className="btn secondary large">
                📞 Call +44 7446 084868
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
