import React from 'react';
import { useParams } from 'react-router-dom';
import policiesData from './policiesData';
import './About.css'; // Reuse about styles for legal pages

const Policies = () => {
    const { policyId } = useParams();
    const policy = policiesData[policyId];

    if (!policy) {
        return (
            <div className="about-container">
                <div className="section-content" style={{ padding: '100px 20px', textAlign: 'center' }}>
                    <h2>Policy Not Found</h2>
                    <p>The requested policy document does not exist.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="about-container">
            {/* Hero Section */}
            <div
                className="about-hero"
                style={{
                    background: '#1B2631', // Solid dark background for professional look
                    height: '40vh'
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>{policy.title}</h1>
                </div>
            </div>

            <section className="about-section">
                <div className="section-content">
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
                        {policy.content.map((paragraph, index) => (
                            <p key={index} style={{ marginBottom: '20px', lineHeight: '1.6' }}>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Policies;
