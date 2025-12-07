import React from 'react';
import './GallerySection.css';

const GallerySection = () => {
    const [showEventModal, setShowEventModal] = React.useState(false);

    const galleryImages = [

        { id: 2, src: '/images/image4.png', alt: 'Technical Workshop' },
        { id: 3, src: '/images/image1.png', alt: 'Students Learning' },
        { id: 4, src: '/images/image6.png', alt: 'College Event' },
        { id: 5, src: '/images/image9.png', alt: 'Practical Training' },
        { id: 6, src: '/images/image10.png', alt: 'Campus Life' },
        { id: 6, src: '/images/image15.png', alt: 'Campus Life' }
    ];

    // Dummy event photos for the modal
    const eventPhotos = [
        { id: 1, src: '/images/image11.png', alt: 'Event Photo 1' },
        { id: 2, src: '/images/image12.png', alt: 'Event Photo 2' },
        { id: 3, src: '/images/image13.png', alt: 'Event Photo 3' },
        { id: 4, src: '/images/image14.png', alt: 'Event Photo 4' },
        { id: 5, src: '/images/image3.png', alt: 'Event Photo 5' },
        { id: 6, src: '/images/image5.png', alt: 'Event Photo 6' },
    ];

    const handleImageClick = (id) => {
        // Open modal only for "College Event" (id: 4) as requested
        if (id === 4) {
            setShowEventModal(true);
        }
    };

    return (
        <section id="gallery" className="section gallery-section">
            <div className="container">
                <div className="section-title">
                    <h2>Student Life & Activities</h2>
                    <div className="title-underline"></div>
                    <p className="section-subtitle">
                        Experience the vibrant campus life at Sagarmatha Technical Institute
                    </p>
                </div>

                <div className="gallery-grid">
                    {galleryImages.map((image) => (
                        <div
                            key={image.id}
                            className="gallery-item glass-card"
                            onClick={() => handleImageClick(image.id)}
                            style={{ cursor: image.id === 4 ? 'pointer' : 'default' }}
                        >
                            <div className="gallery-image-wrapper">
                                <img src={image.src} alt={image.alt} onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.classList.add('placeholder');
                                }} />
                            </div>
                            <div className="gallery-overlay">
                                <span className="gallery-caption">
                                    {image.alt}
                                    {image.id === 4 && <span className="click-hint"> (Click to view more)</span>}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Event Photos Modal */}
            {showEventModal && (
                <div className="event-modal-overlay" onClick={() => setShowEventModal(false)}>
                    <div className="event-modal-content glass-card-strong" onClick={(e) => e.stopPropagation()}>
                        <button className="close-modal-btn" onClick={() => setShowEventModal(false)}>×</button>
                        <h3 className="modal-title">College Events Gallery</h3>
                        <div className="event-gallery-grid">
                            {eventPhotos.map((photo) => (
                                <div key={photo.id} className="event-photo-item">
                                    <img src={photo.src} alt={photo.alt} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default GallerySection;


