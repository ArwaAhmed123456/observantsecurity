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
            SIA-Licensed Security Guards & <span className="highlight">24/7 Protection</span> for Your Business
          </h2>
          <p>
            Trusted security services for businesses nationwide. From manned guarding to mobile patrols,
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
            <h2>Observant Security - Your Trusted Security Partner Since 2000</h2>
            <p className="section-description">
              Observant Security Solution was formed in 2000 in response to the need for a security company
              with a service-driven approach. We provide professional, reliable security solutions to businesses
              across the UK, ensuring your assets, people, and premises are protected 24/7.
            </p>
          </div>
          <div className="about-cards">
            <div className="about-card">
              <div className="card-icon">
                <img src="/CIA_Licensed.png" alt="SIA Licensed" />
              </div>
              <h3>SIA Licensed</h3>
              <p>All our security personnel are fully SIA licensed and professionally trained to the highest standards.</p>
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
                <img src="/ExperiencedTeam.png" alt="25+ Years Experience" />
              </div>
              <h3>25+ Years Experience</h3>
              <p>Over two decades of excellence in providing tailored security solutions to diverse industries.</p>
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
            <h2>Your Safety is Our Priority</h2>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/Rapid_response.png" alt="Rapid Response" />
              </div>
              <h3>Rapid Response</h3>
              <p>Fast deployment and emergency response services available 24/7 across the UK.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/ExperiencedTeam.png" alt="Experienced Team" />
              </div>
              <h3>Experienced Team</h3>
              <p>Highly trained, vetted security professionals with extensive industry experience.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/tailored_Sol.png" alt="Tailored Solutions" />
              </div>
              <h3>Tailored Solutions</h3>
              <p>Customized security plans designed to meet your specific business requirements.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/Competitive_pricing.png" alt="Competitive Pricing" />
              </div>
              <h3>Competitive Pricing</h3>
              <p>Professional security services at competitive rates with transparent pricing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics-section">
        <div className="section-container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">25+</div>
              <div className="stat-label">Years in Business</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Clients Served</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Availability</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">SIA Licensed</div>
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
