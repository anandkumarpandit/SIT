import React from 'react';
import './FacilitiesSection.css';

const FacilitiesSection = () => {
    const facilities = [
        // { id: 1, icon: '💻', name: 'Computer Lab', description: 'Modern computers with latest software' },
        { id: 2, icon: '🔬', name: 'Science Lab', description: 'Well-equipped for experiments' },
        { id: 3, icon: '📚', name: 'Library', description: 'Extensive collection of books and journals' },
        { id: 4, icon: '🔧', name: 'Workshops', description: 'Practical training facilities' },
        { id: 5, icon: '📡', name: 'Wi-Fi Campus', description: 'High-speed internet throughout' },
        { id: 6, icon: '💬', name: 'Counseling', description: 'Academic and career guidance' }
    ];

    return (
        <section id="facilities" className="section facilities-section">
            <div className="container">
                <div className="section-title">
                    <h2>Facilities</h2>
                    <p className="section-subtitle">
                        World-class infrastructure and resources for comprehensive learning
                    </p>
                </div>

                <div className="facilities-grid grid grid-3">
                    {facilities.map((facility) => (
                        <div key={facility.id} className="facility-card glass-card">
                            <div className="facility-icon">{facility.icon}</div>
                            <h3 className="facility-name">{facility.name}</h3>
                            <p className="facility-description">{facility.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FacilitiesSection;
