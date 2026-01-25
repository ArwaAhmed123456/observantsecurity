import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleQuoteClick = () => {
        navigate("/contact");
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
            <div className="logo">
                <img src="/logo.png" alt="Observant Security" />
                <span className="company-name">Observant Security</span>
            </div>
            <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
                <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link></li>
                <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact Us</Link></li>
                <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link></li>
            </ul>
            <button className="cta-button" onClick={handleQuoteClick}>GET A QUOTE</button>
            <div className="hamburger" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
};

export default Navbar;