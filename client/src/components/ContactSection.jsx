import React, { useState } from "react";
import "./ContactSection.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    programInterested: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      const response = await fetch(`${apiUrl}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ type: "success", message: data.message });
        setFormData({
          name: "",
          email: "",
          programInterested: "",
          message: "",
        });
      } else {
        setStatus({ type: "error", message: data.message });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to submit. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
          <p className="section-subtitle">
            Get in touch with us for admissions, inquiries, or any questions
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card glass-card">
              <div className="info-icon">📍</div>
              <h3>Visit Us</h3>
              <p>
                Biratnagar, Nepal
                <br />
                Near DPS School
              </p>
            </div>

            <div className="info-card glass-card">
              <div className="info-icon">📞</div>
              <h3>Call Us</h3>
              <p>
                +9779823445
                <br />
                +977 970-9026715
              </p>
            </div>

            <div className="info-card glass-card">
              <div className="info-icon">📧</div>
              <h3>Email Us</h3>
              <p>
                sagarmathatechbrt@gmail.com
                <br />
                admission@sti.edu.np
              </p>
            </div>

            <div className="map-placeholder glass-card">
              <div className="map-icon">🗺️</div>
              <p>Map Location</p>
            </div>
          </div>

          <div className="contact-form-wrapper glass-card">
            <h3>Send us a Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="programInterested">Program Interested</label>
                <select
                  id="programInterested"
                  name="programInterested"
                  value={formData.programInterested}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a program</option>
                  <option value="Pharmacy">Diploma in Pharmacy</option>
                  <option value="HA">Health Assistant</option>
                  <option value="LAB">Lab Technician</option>
                  <option value="Radiography">Radiography</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              {status.message && (
                <div className={`form-status ${status.type}`}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary btn-large"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
