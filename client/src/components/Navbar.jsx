import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container-wide navbar-container">
                <div className="navbar-logo" onClick={() => scrollToSection('hero')}>
                    <div className="logo-icon">STI</div>
                    <span className="logo-text">Sagarmatha Technical Institute</span>
                </div>

                <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                    <li><a onClick={() => scrollToSection('about')}>About us</a></li>
                    <li><a onClick={() => scrollToSection('admission')}>Admissions</a></li>
                    <li><a onClick={() => scrollToSection('programs')}>Academics</a></li>
                    <li><a onClick={() => scrollToSection('gallery')}>Campus Life</a></li>
                    <li><a onClick={() => scrollToSection('contact')}>News</a></li>
                    <li><a onClick={() => scrollToSection('contact')}>Contacts</a></li>
                </ul>

                <button
                    className="btn-outline-light contact-btn"
                    onClick={() => scrollToSection('contact')}
                >
                    Contact Us
                </button>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
