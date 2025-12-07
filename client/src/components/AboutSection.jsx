import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container-wide">
                <div className="about-grid">
                    <div className="about-text-content">
                        <div className="section-header-left">
                            <h2 className="about-title">
                                About <span className="highlight-gold">Our College</span>
                            </h2>
                        </div>

                        <p className="about-lead">
                            Carolina is one of the leading arts & science colleges in the USA. It was founded back in 1990.
                        </p>

                        <p className="about-desc">
                            The history of the Carolina College of Arts and Science begins with the founding of the college by John Gilstone, a prominent resident of Columbia. We are a vibrant accredited learning institution with a big choice of undergraduate and graduate degree programs designed for working professionals.
                        </p>

                        <p className="about-desc">
                            At Carolina College of Arts and Science, you do more than just earn a degree. You also define your future, find your way to success personally, socially and professionally. You benefit from:
                        </p>

                        <ul className="about-features-list">
                            <li>Convenient schedules with offline & online classes</li>
                            <li>Scholarship opportunities making your education affordable</li>
                            <li>Accelerated timetable to earn your degree faster</li>
                            <li>Personalized assistance to jump-start your career</li>
                        </ul>

                        <a href="#programs" className="link-arrow-green">
                            Explore our programs <span>&rarr;</span>
                        </a>
                    </div>

                    <div className="about-image-container">
                        <div className="about-img-wrapper">
                            <img src="/src/assets/about-campus.png" alt="Sagarmatha College Campus" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
