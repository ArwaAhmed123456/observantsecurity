import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import newsData from './newsData';
import './News.css';

const News = () => {
    const { newsId } = useParams();
    const [searchTerm, setSearchTerm] = useState('');

    if (newsId) {
        const item = newsData.find(n => n.id === parseInt(newsId));
        if (!item) return <div className="news-page"><div className="news-container"><h2>Article not found</h2></div></div>;

        return (
            <div className="news-page detail-view">
                <div className="news-container">
                    <article className="news-detail-wrapper">
                        <header className="news-detail-meta">
                            <span className="news-category">
                                {item.isNewsletter ? "QUARTERLY NEWSLETTER" : "BLOG ARTICLE"}
                            </span>
                            <h1 className="news-detail-title">{item.title}</h1>
                            <span className="news-detail-date">Published on {item.date}</span>
                        </header>

                        {item.image && (
                            <img src={item.image} alt={item.title} className="news-detail-image" />
                        )}

                        <div className="news-detail-content">
                            {item.content.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                        </div>

                        {item.gallery && (
                            <div className="news-gallery">
                                {item.gallery.map((img, index) => (
                                    <div key={index} className="gallery-item">
                                        <img src={img} alt={`Gallery ${index}`} />
                                    </div>
                                ))}
                            </div>
                        )}

                        <footer className="back-to-news">
                            <Link to="/news">
                                <i className="fas fa-arrow-left"></i> Back to Blog & Insights
                            </Link>
                        </footer>
                    </article>

                    {/* Related Posts Section */}
                    <section className="related-posts">
                        <div className="section-header">
                            <span className="section-tag">CONTINUE READING</span>
                            <h2>Related Articles</h2>
                        </div>
                        <div className="news-grid">
                            {newsData
                                .filter(post => post.id !== item.id)
                                .slice(0, 3)
                                .map(post => (
                                    <div key={post.id} className="news-card">
                                        <Link to={`/news/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <div className="card-image">
                                                <img src={post.image} alt={post.title} />
                                                <span className="card-category">Related</span>
                                            </div>
                                            <div className="card-body">
                                                <span className="card-date">{post.date}</span>
                                                <h3>{post.title}</h3>
                                                <div className="read-more-btn">
                                                    Read More <i className="fas fa-arrow-right"></i>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                        </div>
                    </section>
                </div>
            </div>
        );
    }

    // Filter news based on search term
    const filteredNews = newsData.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="news-page">
            <div className="news-hero">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <span className="section-tag">INSIGHTS & UPDATES</span>
                    <h1>The Observant Blog</h1>
                    <p>Expert perspectives on the UK security landscape, industry trends, and company news.</p>
                    
                    <div className="search-container">
                        <input 
                            type="text" 
                            placeholder="Search articles..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="news-search"
                        />
                        <i className="fas fa-search search-icon"></i>
                    </div>
                </div>
            </div>

            <div className="news-container">
                {filteredNews.length > 0 ? (
                    <div className="news-grid">
                        {filteredNews.map((item) => (
                            <div key={item.id} className="news-card">
                                <Link to={`/news/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div className="card-image">
                                        <img src={item.image} alt={item.title} />
                                        <span className="card-category">Blog</span>
                                    </div>
                                    <div className="card-body">
                                        <span className="card-date">{item.date}</span>
                                        <h3>{item.title}</h3>
                                        <p>{item.summary}</p>
                                        <div className="read-more-btn">
                                            Read Article <i className="fas fa-arrow-right"></i>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="no-results">
                        <i className="fas fa-search"></i>
                        <h3>No articles found</h3>
                        <p>Try adjusting your search terms to find what you're looking for.</p>
                        <button onClick={() => setSearchTerm('')} className="reset-btn">View All Articles</button>
                    </div>
                )}
            </div>

            <section className="newsletter-section">
                <div className="newsletter-container">
                    <div className="newsletter-text">
                        <h2>Stay Informed</h2>
                        <p>Subscribe to our monthly blog digest for the latest security insights and UK industry updates.</p>
                    </div>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Enter your email" required />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default News;
