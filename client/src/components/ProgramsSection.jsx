import React from 'react';
import './ProgramsSection.css';

const ProgramsSection = () => {
    const programs = [
        {
            id: 1,
            title: 'Lab Technology',
            duration: '3 Years',
            eligibility: 'SLC/SEE Pass',
            icon: '🔬',
            description: 'Master laboratory techniques, diagnostic procedures, and medical testing technologies.'
        },
        {
            id: 2,
            title: 'Radiography',
            duration: '3 Years',
            eligibility: 'SLC/SEE Pass',
            icon: '📡',
            description: 'Learn medical imaging techniques including X-ray, CT scan, and diagnostic radiology.'
        },
        {
            id: 3,
            title: 'Pharmacy',
            duration: '3 Years',
            eligibility: 'SLC/SEE Pass',
            icon: '💊',
            description: 'Pharmaceutical education covering drug dispensing, patient counseling, and medication management.'
        },
        {
            id: 4,
            title: 'Health Assistant (HA)',
            duration: '3 Years',
            eligibility: 'SLC/SEE Pass',
            icon: '🏥',
            description: 'Train to become a certified health assistant providing essential medical services in communities.'
        }
    ];

    return (
        <section id="programs" className="section programs-section">
            <div className="container">
                <div className="section-title">
                    <h2>Our Programs</h2>
                    <p className="section-subtitle">
                        Explore our CTEVT-affiliated programs designed to build your technical expertise and career
                    </p>
                </div>

                <div className="programs-grid grid grid-2">
                    {programs.map((program) => (
                        <div key={program.id} className="program-card glass-card">
                            <div className="program-icon">{program.icon}</div>
                            <h3 className="program-title">{program.title}</h3>
                            <div className="program-meta">
                            </div>
                            <p className="program-description">{program.description}</p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProgramsSection;
