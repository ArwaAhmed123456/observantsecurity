import React from 'react';
import trainingData from './trainingData';
import './About.css';

const Trainings = () => {
    return (
        <div className="about-container">
            <div className="about-hero" style={{ background: '#1B2631', height: '40vh' }}>
                <div className="hero-content">
                    <h1>Security Standards & Trainings</h1>
                    <p>We adhere to the highest UK security standards including BS7858, BS10800, and BS99.</p>
                </div>
            </div>

            <section className="about-section">
                <div className="section-content">
                    <div className="trainings-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px', maxWidth: '1200px', margin: '0 auto' }}>
                        {trainingData.map(training => (
                            <div key={training.id} className="training-card" style={{ background: '#fff', padding: '40px', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', border: '1px solid #f0f0f0' }}>
                                <h2 style={{ color: '#D4AF37', marginBottom: '15px', fontSize: '1.5rem' }}>{training.title}</h2>
                                <p style={{ color: '#666', marginBottom: '25px', lineHeight: '1.6' }}>{training.description}</p>

                                <h3 style={{ fontSize: '1rem', borderBottom: '2px solid #D4AF37', paddingBottom: '10px', marginBottom: '20px' }}>Core Modules</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {training.modules.map((module, index) => (
                                        <li key={index} style={{ padding: '10px 0', borderBottom: '1px solid #eee', fontSize: '0.95rem', display: 'flex', alignItems: 'center' }}>
                                            <span style={{ color: '#D4AF37', marginRight: '10px' }}>✓</span> {module}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Trainings;
