
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      heroRef.current.style.setProperty('--mouse-x', `${x}`);
      heroRef.current.style.setProperty('--mouse-y', `${y}`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen pt-32 pb-20 overflow-hidden"
      style={{ 
        '--mouse-x': '0.5', 
        '--mouse-y': '0.5' 
      } as React.CSSProperties}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />
      
      {/* Animated shapes */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float animate-delay-600" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)]" />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary animate-fadeIn animate-fill-both">
            Professional Web Development Services
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/70 animate-fadeIn animate-delay-300 animate-fill-both">
            Crafting Websites That <span className="text-gradient">Drive Success!</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fadeIn animate-delay-600 animate-fill-both">
            We build custom, responsive, and high-performing websites that elevate your brand, engage your users, and grow your business.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeIn animate-delay-900 animate-fill-both">
            <Link to="/contact" className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center group">
              Get a Free Consultation
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/portfolio" className="px-8 py-3 rounded-full bg-background border border-border text-foreground font-medium transition-all hover:bg-muted flex items-center gap-2 w-full sm:w-auto justify-center group">
              View Our Work
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {[
            { number: "18+", label: "Projects Completed" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "Innovation", label: "Our Core Value" },
            { number: "24/7", label: "Customer Support" },
          ].map((stat, index) => (
            <div 
              key={index} 
              className="relative p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-border hover-card transform transition-all hover:scale-105 hover:shadow-md"
              style={{ animationDelay: `${(index + 5) * 150}ms` }}
            >
              <div className="absolute -top-3 -left-3 w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
              <div className="pt-6">
                <h3 className="text-3xl sm:text-4xl font-bold mb-2 text-gradient">{stat.number}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links Section */}
        <div className="mt-24 pt-12 border-t border-border">
          <h2 className="text-2xl font-bold text-center mb-12">Explore Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                description: "Custom websites tailored to your business needs",
                link: "/services",
                icon: "🌐"
              },
              {
                title: "UI/UX Design",
                description: "User-friendly interfaces that convert visitors",
                link: "/services",
                icon: "🎨"
              },
              {
                title: "SEO Optimization",
                description: "Improve your site's visibility in search results",
                link: "/services",
                icon: "📈"
              }
            ].map((service, index) => (
              <Link 
                to={service.link} 
                key={index}
                className="p-6 rounded-xl border border-border bg-background/50 hover:bg-primary/5 transition-all group"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="flex items-center text-primary font-medium">
                  Learn more
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" className="w-full h-auto">
          <path 
            fill="currentColor" 
            className="text-background"
            fillOpacity="1" 
            d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,56C1120,48,1280,32,1360,24L1440,16L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
