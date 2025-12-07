import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="hero-section">
            <div className="container-wide hero-container">
                <div className="hero-grid">
                    <div className="hero-content">
                        <h1 className="hero-title animate-fadeInUp">
                            This is <br />
                            <span className="highlight-text">Sagarmatha!</span>
                        </h1>
                        <p className="hero-description animate-fadeInUp">
                            College of Engineering and Technology in Sanepa, Lalitpur. Infinite possibilities and your promising future start here!
                        </p>
                        <div className="hero-buttons animate-fadeInUp">
                            <button className="btn btn-primary" onClick={() => scrollToSection('admission')}>
                                Explore Admission
                            </button>
                            <a href="#academics" className="link-arrow" onClick={(e) => { e.preventDefault(); scrollToSection('programs'); }}>
                                Academics <span>&rarr;</span>
                            </a>
                        </div>
                    </div>
                    <div className="hero-image-container animate-fadeIn">
                        <div className="image-wrapper">
                            <img src="/src/assets/hero-students.png" alt="Sagarmatha Students" className="hero-img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
