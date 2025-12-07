import React from 'react';
import './AdmissionCTA.css';

const AdmissionCTA = () => {
    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const downloadProspectus = () => {
        // Create a link element and trigger download
        const link = document.createElement('a');
        link.href = '/STI-Prospectus-2024-2025.pdf';
        link.download = 'STI-Prospectus-2024-2025.pdf';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="admission" className="section admission-cta-section">
            <div className="container">
                <div className="admission-content">
                    <div className="admission-badge">
                        <span className="badge-icon">📢</span> Admissions Now Open
                    </div>
                    <h2 className="admission-title">Join STI Today</h2>
                    <p className="admission-description">
                        Start your journey towards a successful technical career. Enroll in our CTEVT-affiliated
                        programs and gain the skills needed for tomorrow's opportunities.
                    </p>
                    <div className="admission-buttons">
                        <button className="btn btn-dark" onClick={scrollToContact}>
                            Apply Online
                        </button>
                        <button className="btn btn-green" onClick={downloadProspectus}>
                            <span className="btn-icon">📄</span> Download Prospectus
                        </button>
                    </div>
                    <div className="admission-separator"></div>
                    <div className="admission-info">
                        <div className="info-item">
                            <span className="info-icon-box">📅<span className="date-number">17</span></span>
                            <span>Application Deadline: Rolling Admission</span>
                        </div>
                        <div className="info-item">
                            <span className="info-icon">📞</span>
                            <span>For queries: Call us anytime</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdmissionCTA;
