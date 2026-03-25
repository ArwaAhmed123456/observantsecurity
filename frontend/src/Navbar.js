import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { user, logout } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleQuoteClick = () => {
        navigate("/contact");
        setMenuOpen(false);
    };

    const handleLogout = () => {
        logout();
        navigate("/login");
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>

            {/* LEFT: Logo */}
            <div className="nav-left">
                <Link to="/" className="logo">
                    <img src="/logo.png" alt="Observant Security" />
                    <div className="brand-text">
                        <span className="brand-top">Observant</span>
                        <span className="brand-bottom">Security</span>
                    </div>
                </Link>
            </div>

            {/* CENTER: Main Navigation Links */}
            <div className="nav-center">
                <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Services</Link></li>
                    <li><Link to="/news" className={location.pathname.startsWith('/news') ? 'active' : ''} onClick={() => setMenuOpen(false)}>News</Link></li>
                    <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
                    <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={() => setMenuOpen(false)}>About Us</Link></li>
                    <li><Link to="/faq" className={location.pathname === '/faq' ? 'active' : ''} onClick={() => setMenuOpen(false)}>FAQ</Link></li>

                    {/* Render auth links in the center menu ONLY for mobile, using a special class */}
                    <div className="mobile-only-auth">
                        {user ? (
                            <>
                                <li><Link to="/dashboard" className={location.pathname.startsWith('/dashboard') ? 'active' : ''} onClick={() => setMenuOpen(false)}>Dashboard</Link></li>
                                <li><button onClick={handleLogout} className="nav-btn-link">Logout</button></li>
                            </>
                        ) : (
                            <>
                                <li><Link to="/login" className={location.pathname === '/login' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Login</Link></li>
                                <li><Link to="/register" className={location.pathname === '/register' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Register</Link></li>
                            </>
                        )}
                    </div>
                </ul>
            </div>

            {/* RIGHT: Auth & CTA */}
            <div className="nav-right">
                <ul className="nav-auth-links desktop-only">
                    {user ? (
                        <>
                            <li><Link to="/dashboard" className={location.pathname.startsWith('/dashboard') ? 'active' : ''}>Dashboard</Link></li>
                            <li><button onClick={handleLogout} className="nav-btn-link">Logout</button></li>
                        </>
                    ) : (
                        <>
                            <li><Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>Login</Link></li>
                            <li><Link to="/register" className={`nav-register-btn ${location.pathname === '/register' ? 'active' : ''}`}>Register</Link></li>
                        </>
                    )}
                </ul>
                <button className="cta-button" onClick={handleQuoteClick}>GET A QUOTE</button>
                <div className="hamburger" onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;