
import React, { useEffect } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Features from "../components/Features";
import Gallery from "../components/Gallery";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import AnimatedBackground from "../components/AnimatedBackground";

const Index = () => {
  // Placeholder data - replace with real info
  const contactInfo = {
    phoneNumber: "+5551999999999",
    email: "contato@fritzgreen.com",
    instagram: "https://instagram.com/fritzgreen"
  };

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-fritz-black text-white overflow-hidden">
      <AnimatedBackground />
      <Header />
      <HeroSection />
      <AboutSection />
      <WhyChooseUs />
      <Features />
      <Gallery />
      <ContactSection 
        phoneNumber={contactInfo.phoneNumber}
        email={contactInfo.email}
        instagram={contactInfo.instagram}
      />
      <Footer 
        phoneNumber={contactInfo.phoneNumber}
        email={contactInfo.email}
        instagram={contactInfo.instagram}
      />
      <WhatsAppButton phoneNumber={contactInfo.phoneNumber} />
    </div>
  );
};

export default Index;
