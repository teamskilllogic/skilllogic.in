
import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import ServicesSection from "../components/home/Services";
import AboutSection from "../components/home/About";
import PortfolioSection from "../components/home/Portfolio";
import TestimonialsSection from "../components/home/Testimonials";
import ContactSection from "../components/home/Contact";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <AboutSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
