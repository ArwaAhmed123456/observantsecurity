import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import newsData from './newsData';
import './News.css';

const News = () => {
    const { newsId } = useParams();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Detail View Logic
    if (newsId) {
        const item = newsData.find(n => n.id === parseInt(newsId));
        if (!item) return <div className="news-page"><div className="news-container"><h2>Article not found</h2></div></div>;

        return (
            <div className="news-page detail-view journal-container">
                <article className="news-detail-wrapper">
                        <header className="news-detail-meta-official">
                            <div className="post-meta">
                                <span className="post-category">{item.category}</span>
                                <span className="meta-separator">●</span>
                                <span className="post-date">{item.date}</span>
                                <span className="meta-separator">●</span>
                                <span className="post-read-time">{item.readTime || "5 MIN READ"}</span>
                            </div>
                            <h1 className="news-detail-title-official">{item.title}</h1>
                        </header>

                        {item.image && (
                            <img src={item.image} alt={item.title} className="news-detail-image" loading="eager" decoding="async" />
                        )}

                        <div className="news-detail-content newspaper-layout">
                            {item.content.map((block, i) => {
                                if (typeof block === 'string') return <p key={i}>{block}</p>;
                                if (block.type === 'text') return <p key={i}>{block.text}</p>;
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

                        <div className="back-to-news">
                            <div className="social-share">
                                <span>SHARE THIS ARTICLE:</span>
                                <div className="share-icons">
                                    <i className="fab fa-facebook-f"></i>
                                    <i className="fab fa-twitter"></i>
                                    <i className="fab fa-linkedin-in"></i>
                                </div>
                            </div>
                            <Link to="/news" className="back-link-btn">
                                <i className="fas fa-arrow-left"></i> Back to Journal
                            </Link>
                        </div>
                    </article>
                </div>
        );
    }

    // List View Logic
    const featuredPost = newsData.find(item => item.isFeatured) || newsData[0];
    const categories = ['All', ...new Set(newsData.map(item => item.category))];
    
    const filteredNews = newsData.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                             item.summary.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="news-page magazine-view">
            {/* 1. Header & Search Section */}
            <header className="journal-header">
                <div className="journal-container">
                    <span className="premium-tag">OBSERVANT INSIGHTS</span>
                    <h1>The Daily Journal</h1>
                    <p className="journal-subtitle">Expert perspectives on security, technology, and industry trends.</p>
                    
                    <div className="magazine-search-bar">
                        <span className="search-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </span>
                        <input 
                            type="text" 
                            placeholder="Search articles, insights, and news..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </header>

            <div className="journal-container">
                {/* 2. Featured Section */}
                {!searchTerm && selectedCategory === 'All' && (
                    <section className="featured-section">
                        <Link to={`/news/${featuredPost.id}`} className="featured-card">
                            <div className="featured-image">
                                <img src={featuredPost.image} alt={featuredPost.title} />
                                <span className="featured-badge">FEATURED ARTICLE</span>
                            </div>
                            <div className="featured-info">
                                <span className="post-category">{featuredPost.category}</span>
                                <h2>{featuredPost.title}</h2>
                                <p>{featuredPost.summary}</p>
                                <div className="post-meta-footer">
                                    <span className="author">By Observant Team</span>
                                    <span className="dot"></span>
                                    <span className="read-time">{featuredPost.readTime || "5 MIN READ"}</span>
                                </div>
                                <div className="explore-btn">Read Article <i className="fas fa-arrow-right"></i></div>
                            </div>
                        </Link>
                    </section>
                )}

                {/* 3. Categories Quick Select */}
                <section className="categories-preview">
                    <h2>Browse Categories</h2>
                    <div className="category-menu">
                        {categories.map(cat => (
                            <button 
                                key={cat} 
                                className={`category-link ${selectedCategory === cat ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </section>

                <div className="journal-layout-grid">
                    {/* 4. Main Journal List */}
                    <main className="journal-main-list">
                        <div className="section-header">
                            <h2>Latest from the Journal</h2>
                            {selectedCategory !== 'All' && <span className="active-filter">Filtering by: {selectedCategory}</span>}
                        </div>
                        
                        <div className="journal-list-wrapper">
                            {filteredNews.map(item => (
                                <Link key={item.id} to={`/news/${item.id}`} className="journal-list-item">
                                    <div className="item-image">
                                        <img src={item.image} alt={item.title} loading="lazy" />
                                    </div>
                                    <div className="item-content">
                                        <span className="item-category">{item.category}</span>
                                        <h3>{item.title}</h3>
                                        <p>{item.summary}</p>
                                        <div className="item-meta">
                                            <span>{item.date}</span>
                                            <span className="dot"></span>
                                            <span>{item.readTime || "5 MIN READ"}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {filteredNews.length === 0 && (
                            <div className="no-results-premium">
                                <i className="fas fa-search"></i>
                                <h3>No matching articles found</h3>
                                <p>Try adjusting your search or category filters.</p>
                                <button onClick={() => {setSearchTerm(''); setSelectedCategory('All')}}>Clear All Filters</button>
                            </div>
                        )}
                    </main>

                    {/* 5. Progressive Sidebar */}
                    <aside className="journal-sidebar">
                        <div className="sidebar-widget newsletter-widget">
                            <h3>Join our Community</h3>
                            <p>Get the latest security insights delivered to your inbox weekly.</p>
                            <div className="subscribe-box">
                                <input type="email" placeholder="email@address.com" />
                                <button>Join Now</button>
                            </div>
                            <div className="stat-row">
                                <div className="stat">
                                    <span className="val">NEW</span>
                                    <span className="lbl">WEEKLY INSIGHTS</span>
                                </div>
                                <div className="avatars">
                                    <span className="avatar-placeholder">📩</span>
                                </div>
                            </div>
                        </div>

                        <div className="sidebar-widget popular-widget">
                            <h3>Popular Stories</h3>
                            <div className="popular-list">
                                {newsData.slice(0, 3).map(item => (
                                    <Link key={item.id} to={`/news/${item.id}`} className="mini-item">
                                        <div className="mini-img"><img src={item.image} alt={item.title} /></div>
                                        <div className="mini-info">
                                            <h4>{item.title}</h4>
                                            <span className="mini-meta">{item.readTime || "5 MIN READ"}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default News;
