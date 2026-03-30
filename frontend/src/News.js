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
                        <header className="news-detail-meta-official">
                            <div className="post-meta">
                                <span className="post-category">{item.category || (item.isNewsletter ? "Newsletter" : "Security")}</span>
                                <span className="meta-separator">●</span>
                                <span className="post-date">{item.date}</span>
                                <span className="meta-separator">●</span>
                                <span className="post-author">Observant Team</span>
                            </div>
                            <h1 className="news-detail-title-official">{item.title}</h1>
                        </header>

                        {item.image && (
                            <img src={item.image} alt={item.title} className="news-detail-image" loading="eager" decoding="async" />
                        )}

                        <div className="news-detail-content newspaper-layout">
                            {item.content.map((block, i) => {
                                if (typeof block === 'string') {
                                    return <p key={i}>{block}</p>;
                                }
                                if (block.type === 'text') {
                                    return <p key={i}>{block.text}</p>;
                                }
                                if (block.type === 'image') {
                                    return (
                                        <div key={i} className={`content-image-wrapper align-${block.align || 'center'}`}>
                                            <img src={block.src} alt={block.alt || "Article image"} loading="lazy" />
                                            {block.caption && <span className="image-caption">{block.caption}</span>}
                                        </div>
                                    );
                                }
                                return null;
                            })}
                        </div>

                        {item.gallery && (
                            <div className="news-gallery-official">
                                {item.gallery.map((img, index) => (
                                    <div key={index} className="gallery-item-official">
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
                                                <img src={post.image} alt={post.title} loading="lazy" decoding="async" />
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
            <div className="news-hero" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Hero\ page/1.bg.png)` }}>
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
                <div className="news-grid">
                    {filteredNews.map((item) => (
                        <div key={item.id} className="news-card">
                            <Link to={`/news/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className="card-image">
                                    <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
                                    <span className={`card-category ${item.isNewsletter ? 'newsletter' : ''}`}>
                                        {item.isNewsletter ? "Newsletter" : "Security"}
                                    </span>
                                </div>
                                <div className="card-body">
                                    <span className="card-date">{item.date}</span>
                                    <h3>{item.title}</h3>
                                    <p>{item.summary}</p>
                                    <div className="read-more-btn">
                                        Read More <i className="fas fa-arrow-right"></i>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                {filteredNews.length === 0 && (
                    <div className="no-results">
                        <h3>No articles found for "{searchTerm}"</h3>
                        <button onClick={() => setSearchTerm('')} className="reset-btn">View All articles</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default News;
