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
                            <img src={item.image} alt={item.title} className="news-detail-image" />
                        )}

                        <div className="news-detail-content">
                            {item.content.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
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

    // For the list view, separate the latest post as "Featured"
    const featuredPost = filteredNews.length > 0 ? filteredNews[0] : null;
    const remainingNews = filteredNews.length > 1 ? filteredNews.slice(1) : [];

    const mostPopular = newsData.slice(0, 5); // Just for display

    return (
        <div className="official-news-page">
            <div className="blog-container">
                <main className="blog-main">
                    {featuredPost && !searchTerm && (
                        <article className="featured-post">
                            <Link to={`/news/${featuredPost.id}`} className="featured-image-link">
                                <img src={featuredPost.image} alt={featuredPost.title} className="featured-image" />
                            </Link>
                            <div className="post-meta">
                                <span className="post-category">{featuredPost.isNewsletter ? "Newsletter" : "Security"}</span>
                                <span className="meta-separator">●</span>
                                <span className="post-date">{featuredPost.date}</span>
                                <span className="meta-separator">●</span>
                                <span className="post-author">Observant Team</span>
                            </div>
                            <h2 className="featured-title">
                                <Link to={`/news/${featuredPost.id}`}>{featuredPost.title}</Link>
                            </h2>
                            <p className="post-excerpt">{featuredPost.summary}</p>
                            <Link to={`/news/${featuredPost.id}`} className="continue-reading">Continue Reading</Link>
                            <div className="post-footer">
                                <span className="comment-count">0 COMMENTS</span>
                            </div>
                        </article>
                    )}

                    <div className="article-list">
                        {(searchTerm ? filteredNews : remainingNews).map((item) => (
                            <article key={item.id} className="list-post">
                                <Link to={`/news/${item.id}`} className="list-image-link">
                                    <img src={item.image} alt={item.title} className="list-image" />
                                </Link>
                                <div className="post-meta">
                                    <span className="post-category">{item.isNewsletter ? "Newsletter" : "Insights"}</span>
                                    <span className="meta-separator">●</span>
                                    <span className="post-date">{item.date}</span>
                                    <span className="meta-separator">●</span>
                                    <span className="post-author">Observant Team</span>
                                </div>
                                <h3 className="list-title">
                                    <Link to={`/news/${item.id}`}>{item.title}</Link>
                                </h3>
                                <p className="post-excerpt">{item.summary}</p>
                                <Link to={`/news/${item.id}`} className="continue-reading">Continue Reading</Link>
                                <div className="post-footer">
                                    <span className="comment-count">0 COMMENTS</span>
                                </div>
                            </article>
                        ))}
                    </div>

                    {filteredNews.length === 0 && (
                        <div className="no-results">
                            <h3>No articles found for "{searchTerm}"</h3>
                            <button onClick={() => setSearchTerm('')} className="reset-btn">View All articles</button>
                        </div>
                    )}
                </main>

                <aside className="blog-sidebar">
                    <div className="sidebar-section search-sidebar">
                        <h3>Search</h3>
                        <div className="search-box">
                            <input 
                                type="text" 
                                placeholder="Search articles..." 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <i className="fas fa-search"></i>
                        </div>
                    </div>

                    <div className="sidebar-section popular-posts">
                        <h3>Most Popular</h3>
                        <ul className="popular-list">
                            {mostPopular.map((post, idx) => (
                                <li key={post.id}>
                                    <span className="popular-number">0{idx + 1}</span>
                                    <Link to={`/news/${post.id}`}>{post.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="sidebar-section about-sidebar">
                        <h3>About the Blog</h3>
                        <p>The Observant Insight is a daily security and safety site for UK businesses. We cover everything from tactical guarding to AI surveillance, and we strive to provide authentic, expert-led guidance.</p>
                        <Link to="/about-us" className="read-more-about">Read More</Link>
                    </div>

                    <div className="sidebar-section newsletter-sidebar">
                        <h3>Newsletter</h3>
                        <p>Subscribe to our monthly security digest.</p>
                        <form className="sidebar-newsletter" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Your email address" />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default News;
