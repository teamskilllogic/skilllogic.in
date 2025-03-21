
import React, { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import ServicesSection from "../components/home/Services";
import AboutSection from "../components/home/About";
import PortfolioSection from "../components/home/Portfolio";
import TestimonialsSection from "../components/home/Testimonials";
import ContactSection from "../components/home/Contact";
import { useToast } from "@/components/ui/use-toast";

const Index: React.FC = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Show a welcome toast when the page loads
    toast({
      title: "Welcome to SkillLogic.in!",
      description: "Explore our services and discover how we can help your business grow online.",
      duration: 5000,
    });
    
    // Scroll to the section if the URL has a hash
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Add scroll animation to reveal elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
            entry.target.style.opacity = '1';
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => {
      el.style.opacity = '0';
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [toast]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <div className="reveal">
          <ServicesSection />
        </div>
        <div className="reveal">
          <AboutSection />
        </div>
        <div className="reveal">
          <PortfolioSection />
        </div>
        <div className="reveal">
          <TestimonialsSection />
        </div>
        <div className="reveal">
          <ContactSection />
        </div>
      </main>
      <Footer />

      {/* Quick action buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-2 z-50">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      </div>
    </div>
  );
};

export default Index;
