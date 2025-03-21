
import React, { useEffect, useRef } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import ServicesSection from "../components/home/Services";
import AboutSection from "../components/home/About";
import PortfolioSection from "../components/home/Portfolio";
import TestimonialsSection from "../components/home/Testimonials";
import ContactSection from "../components/home/Contact";
import { useToast } from "@/components/ui/use-toast";
import { Code, Images, MousePointer, ArrowUp } from "lucide-react";

const Index: React.FC = () => {
  const { toast } = useToast();
  const cursorRef = useRef<HTMLDivElement>(null);

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
            if (entry.target instanceof HTMLElement) {
              entry.target.style.opacity = '1';
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => {
      if (el instanceof HTMLElement) {
        el.style.opacity = '0';
        observer.observe(el);
      }
    });

    // Cursor follower effect
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        const x = e.clientX;
        const y = e.clientY;
        cursorRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [toast]);

  // Images for the interactive gallery
  const devImages = [
    "/lovable-uploads/337af8a2-276c-413a-b0f6-aedd47585419.png",
    "/lovable-uploads/1b43a1f0-6e33-4651-9c2a-3e8b15f8860c.png",
    "/lovable-uploads/e518dcbd-d504-46ee-b0ee-f1cdf8a56d29.png",
    "/lovable-uploads/d5c71625-5048-4544-846f-13c72deea088.png",
    "/lovable-uploads/54b18579-5635-4b0e-806e-72a8de6be16e.png",
    "/lovable-uploads/4b1de562-750e-4261-b520-03386fcd33de.png"
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Custom cursor follower */}
      <div 
        ref={cursorRef} 
        className="fixed w-6 h-6 rounded-full border border-primary/50 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block" 
        style={{ transition: 'transform 0.1s ease-out' }}
      />
      
      <Navbar />
      <main>
        <Hero />
        
        {/* Developer Images Showcase */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
                Our Development Process
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Bringing <span className="text-gradient">Code to Life</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From conceptualization to deployment, we follow a systematic approach to deliver high-quality web solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
              {devImages.map((img, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-xl border border-border hover-card opacity-0 animate-fadeIn"
                  style={{ animationDelay: `${(index + 1) * 150}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={img}
                      alt={`Development process ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5 bg-background">
                    <h3 className="text-lg font-semibold mb-2">
                      {index === 0 && "Clean Code Architecture"}
                      {index === 1 && "Responsive UI Development"}
                      {index === 2 && "Modern Development Environment"}
                      {index === 3 && "Focused Development Process"}
                      {index === 4 && "Collaborative Team Approach"}
                      {index === 5 && "Serene Coding Environment"}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {index === 0 && "We write clean, maintainable code following industry best practices."}
                      {index === 1 && "Creating pixel-perfect UIs that adapt to any device size."}
                      {index === 2 && "Using cutting-edge tools and frameworks for efficient development."}
                      {index === 3 && "Developers working with concentration to solve complex problems."}
                      {index === 4 && "Our team collaborates to create innovative solutions."}
                      {index === 5 && "A peaceful environment for optimal productivity and creativity."}
                    </p>
                    <div className="mt-4 flex items-center text-primary text-sm font-medium">
                      <Code className="w-4 h-4 mr-2" />
                      {index === 0 && "JavaScript / TypeScript"}
                      {index === 1 && "React / Next.js"}
                      {index === 2 && "Modern IDE Setup"}
                      {index === 3 && "Focused Development"}
                      {index === 4 && "Team Collaboration"}
                      {index === 5 && "Workspace Design"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
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

      {/* Enhanced quick action buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-2 z-50">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all hover:scale-110 active:scale-95"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>

      {/* Floating code particles */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute text-primary/5 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `scale(${Math.random() * 0.5 + 0.5})`,
              opacity: Math.random() * 0.5 + 0.25
            }}
          >
            {i % 3 === 0 ? '<div>' : i % 3 === 1 ? '</div>' : '{code}'}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
