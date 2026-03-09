import React from 'react';
import { useParams, Link } from 'react-router-dom';
import newsData from './newsData';
import './About.css'; // Reuse base styles

const News = () => {
    const { newsId } = useParams();

    // Detailed View
    if (newsId) {
        const item = newsData.find(n => n.id === parseInt(newsId));
        if (!item) return <div className="about-container"><h2>News not found</h2></div>;

        return (
            <div className="about-container">
                <div className="about-hero" style={{ background: '#1B2631', height: '35vh' }}>
                    <div className="hero-content">
                        <span style={{ color: '#D4AF37', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>
                            {item.isNewsletter ? "Newsletter" : "Company Update"}
                        </span>
                        <h1 style={{ marginTop: '10px', fontSize: '2.5rem' }}>{item.title}</h1>
                        <p style={{ opacity: 0.8 }}>Published on {item.date}</p>
                    </div>
                </div>
                <section className="about-section" style={{ padding: '60px 20px', background: '#f9f9f9' }}>
                    <div className="section-content" style={{ background: '#fff', padding: '50px', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', maxWidth: '800px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'left', color: '#333', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            {item.content.map((p, i) => (
                                <p key={i} style={{ marginBottom: '25px' }}>{p}</p>
                            ))}
                        </div>
                        <div style={{ marginTop: '40px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
                            <Link to="/news" style={{ color: '#1B2631', fontWeight: 'bold', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                ← Back to All Updates
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    // List View - Professional Vertical Feed
    return (
        <div className="about-container">
            <div className="about-hero" style={{ background: '#1B2631', height: '40vh' }}>
                <div className="hero-content">
                    <h1 style={{ fontSize: '3rem', marginBottom: '15px' }}>News & Insights</h1>
                    <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', opacity: 0.9 }}>
                        Stay informed on the latest developments, quarterly newsletters, and industry insights from Observant Security.
                    </p>
                </div>
            </div>

            <section className="about-section" style={{ background: '#f4f4f4', padding: '80px 20px' }}>
                <div className="section-content" style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div className="news-feed" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                        {newsData.map(item => (
                            <div key={item.id} className="news-card-horizontal" style={{
                                display: 'flex',
                                background: '#fff',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                boxShadow: '0 4px 10px rgba(0,0,0,0.03)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                borderLeft: `5px solid ${item.isNewsletter ? '#D4AF37' : '#1B2631'}`
                            }}>
                                <div style={{
                                    width: '200px',
                                    background: '#ececec',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '20px'
                                }}>
                                    {/* Placeholder for actual news images, using logo icon for now */}
                                    <img src="/logo.png" alt="Observant" style={{ width: '80px', opacity: 0.5 }} />
                                </div>
                                <div style={{ padding: '30px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                        <span style={{ color: item.isNewsletter ? '#D4AF37' : '#666', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                            {item.isNewsletter ? "QUARTERLY NEWSLETTER" : "PRESS RELEASE"}
                                        </span>
                                        <span style={{ fontSize: '0.85rem', color: '#999' }}>{item.date}</span>
                                    </div>
                                    <h3 style={{ marginBottom: '15px', fontSize: '1.5rem', color: '#1B2631' }}>{item.title}</h3>
                                    <p style={{ color: '#555', fontSize: '1rem', lineHeight: '1.6', marginBottom: '20px' }}>
                                        {item.summary}
                                    </p>
                                    <div>
                                        <Link to={`/news/${item.id}`} style={{
                                            display: 'inline-block',
                                            padding: '8px 20px',
                                            background: '#1B2631',
                                            color: '#fff',
                                            textDecoration: 'none',
                                            borderRadius: '4px',
                                            fontSize: '0.9rem',
                                            fontWeight: '500'
                                        }}>
                                            Read Full Article
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default News;
