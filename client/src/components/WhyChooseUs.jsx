import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const features = [
        {
            id: 1,
            icon: '👨‍🏫', // You could use actual SVG icons here if available
            title: 'Experienced tutors',
            description: 'Our tutors have extensive teaching experience. They really care about the students and help them master topics.'
        },
        {
            id: 2,
            icon: '🌍',
            title: 'Students from 40+ countries',
            description: 'Students from different continents study in our college. This ensures a unique exchange of cultural values and experiences.'
        },
        {
            id: 3,
            icon: '🦉',
            title: 'Modern teaching methods',
            description: 'We combine different teaching methods including online, offline and evening classes, and offer accelerated programs.'
        }
    ];

    return (
        <section id="why-choose-us" className="section why-choose-section">
            <div className="container-wide">
                <div className="features-grid grid grid-3">
                    {features.map((feature) => (
                        <div key={feature.id} className="feature-item">
                            <div className="feature-icon-circle">
                                <span className="feature-emoji">{feature.icon}</span>
                            </div>
                            <h3 className="feature-title-green"><span>&mdash; </span>{feature.title}</h3>
                            <p className="feature-desc-text">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
