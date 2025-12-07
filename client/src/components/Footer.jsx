import React from 'react';
import './Footer.css';

const Footer = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <div className="footer-logo">
                            <div className="logo-icon">STI</div>
                            <span className="logo-text">Sagarmatha Technical Institute</span>
                        </div>
                        <p className="footer-description">
                            CTEVT-affiliated institution committed to excellence in technical education
                            and empowering students for successful careers.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-icon" aria-label="Facebook">📘</a>
                            <a href="#" className="social-icon" aria-label="Instagram">📷</a>
                            <a href="#" className="social-icon" aria-label="LinkedIn">💼</a>
                            <a href="#" className="social-icon" aria-label="Twitter">🐦</a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li><a onClick={() => scrollToSection('about')}>About Us</a></li>
                            <li><a onClick={() => scrollToSection('admission')}>Admission</a></li>
                            <li><a onClick={() => scrollToSection('programs')}>Academics</a></li>
                            <li><a onClick={() => scrollToSection('gallery')}>Campus Life</a></li>
                            <li><a onClick={() => scrollToSection('contact')}>Contact Us</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Programs</h3>
                        <ul className="footer-links">
                            <li><a href="#">Pharmacy</a></li>
                            <li><a href="#">Health Assistant</a></li>
                            <li><a href="#">Lab Technology</a></li>
                            <li><a href="#">Radiography</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Contact Info</h3>
                        <ul className="footer-contact">
                            <li>📍 Kathmandu, Nepal</li>
                            <li>📞 +977-1-XXXXXXX</li>
                            <li>📧 info@sti.edu.np</li>
                            <li>🕒 Sun-Fri: 7AM - 5PM</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Sagarmatha Technical Institute. All rights reserved.</p>
                    <p className="footer-credit">Designed with ❤️ for Quality Education</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
