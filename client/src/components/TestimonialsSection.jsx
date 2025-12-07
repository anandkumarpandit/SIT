import React from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Anket Kumar Pandit',
            program: 'Health Assistant',
            quote: 'STI provided me with the perfect blend of theoretical knowledge and practical skills. The faculty is supportive and the facilities are excellent. I highly recommend it!',
            image: '👨‍🎓'
        },
        {
            id: 2,
            name: 'Priya Thapa',
            program: 'Diploma in Pharmacy',
            quote: 'The Pharmacy program at STI shaped my future in healthcare. The practical lab sessions, experienced faculty, and strong academic support gave me the confidence and skills I needed to grow in my pharmaceutical career.',
            image: '👩‍⚕️'
        },
        {
            id: 3,
            name: 'Bikash Gurung',
            program: 'Radiography',
            quote: 'Amazing learning experience! The practical approach and modern labs helped me develop real-world skills. STI is the best choice for technical education in Nepal.',
            image: '👨‍💼'
        }
    ];

    return (
        <section id="testimonials" className="section testimonials-section">
            <div className="container">
                <div className="section-title">
                    <h2>What Our Students Say</h2>
                    <p className="section-subtitle">
                        Hear from our successful graduates about their experience at STI
                    </p>
                </div>

                <div className="testimonials-grid grid grid-3">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial-card glass-card">
                            <div className="quote-icon">"</div>
                            <p className="testimonial-quote">{testimonial.quote}</p>
                            <div className="testimonial-author">
                                <div className="author-image">{testimonial.image}</div>
                                <div className="author-info">
                                    <h4 className="author-name">{testimonial.name}</h4>
                                    <p className="author-program">{testimonial.program}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
