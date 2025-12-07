import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProgramsSection from './components/ProgramsSection';
import WhyChooseUs from './components/WhyChooseUs';
import FacilitiesSection from './components/FacilitiesSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import AdmissionCTA from './components/AdmissionCTA';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <WhyChooseUs />
        <FacilitiesSection />
        <GallerySection />
        <TestimonialsSection />
        <AdmissionCTA />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
