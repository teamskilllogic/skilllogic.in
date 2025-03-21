
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Globe, Zap } from "lucide-react";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Text for the typing animation
  const phrases = [
    "responsive websites",
    "e-commerce stores",
    "web applications",
    "business solutions",
    "digital experiences"
  ];
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
    
    const typingEffect = () => {
      const currentText = phrases[currentPhraseIndex];
      
      if (isDeleting) {
        setCurrentPhrase(currentText.substring(0, currentCharIndex - 1));
        setCurrentCharIndex(prev => prev - 1);
      } else {
        setCurrentPhrase(currentText.substring(0, currentCharIndex + 1));
        setCurrentCharIndex(prev => prev + 1);
      }
      
      // Typing complete, start deleting
      if (!isDeleting && currentCharIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      }
      
      // Deleting complete, move to next phrase
      if (isDeleting && currentCharIndex === 0) {
        setIsDeleting(false);
        setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
      }
    };
    
    const timeout = setTimeout(typingEffect, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [currentCharIndex, currentPhraseIndex, isDeleting]);
  
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

  // Code snippets for background animation
  const codeSnippets = [
    "const App = () => <div>SkillLogic.in</div>",
    "function optimize() { return 'performance' }",
    "@media (max-width: 768px) { .responsive {} }",
    "import React from 'react'",
    "<div className='container'>...</div>",
    "const api = await fetch('/endpoint')",
    "npm install skilllogic-ui",
    "git commit -m 'Launch website'",
    "export default Component",
    "document.addEventListener('DOMContentLoaded')"
  ];

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
      
      {/* Code snippets floating in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {codeSnippets.map((snippet, index) => (
          <div
            key={index}
            className="absolute text-primary/5 whitespace-nowrap code-snippet"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1,
              transform: `rotate(${Math.random() * 40 - 20}deg) scale(${Math.random() * 0.5 + 0.5})`,
              animation: `float ${Math.random() * 15 + 15}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${Math.random() * 1 + 0.8}rem`
            }}
          >
            {snippet}
          </div>
        ))}
      </div>
      
      {/* Animated shapes */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float animate-delay-600" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)]" />
      
      {/* Hero Content */}
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className={`inline-block px-3 py-1 mb-6 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
          >
            Professional Web Development Services
          </div>
          
          <h1 
            className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/70 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
          >
            Crafting <span className="text-gradient">
              {currentPhrase}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          
          <p 
            className={`text-lg md:text-xl text-muted-foreground mb-8 transition-all duration-700 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
          >
            We build custom, responsive, and high-performing websites that elevate your brand, engage your users, and grow your business.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
          >
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
        
        {/* Animated Skills Icons */}
        <div 
          className={`mt-16 flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-1200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {[
            { name: "React", icon: "⚛️" },
            { name: "Node.js", icon: "🟢" },
            { name: "TypeScript", icon: "🔷" },
            { name: "HTML5", icon: "🌐" },
            { name: "CSS3", icon: "🎨" },
            { name: "MongoDB", icon: "🍃" },
            { name: "NextJS", icon: "▲" },
            { name: "TailwindCSS", icon: "💨" },
          ].map((skill, index) => (
            <div 
              key={index}
              className="px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center text-sm transition-all hover:scale-110 hover:bg-background hover:shadow-md"
              style={{ animationDelay: `${(index + 10) * 100}ms` }}
            >
              <span className="mr-2 text-lg">{skill.icon}</span>
              {skill.name}
            </div>
          ))}
        </div>
        
        {/* Stats */}
        <div 
          className={`mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 transition-all duration-1000 delay-1500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          {[
            { icon: <Globe className="w-6 h-6" />, number: "18+", label: "Projects Completed" },
            { icon: <Users className="w-6 h-6" />, number: "100%", label: "Client Satisfaction" },
            { icon: <Code className="w-6 h-6" />, number: "Innovation", label: "Our Core Value" },
            { icon: <Zap className="w-6 h-6" />, number: "24/7", label: "Customer Support" },
          ].map((stat, index) => (
            <div 
              key={index} 
              className="relative p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-border hover-card transform transition-all hover:scale-105 hover:shadow-md"
              style={{ animationDelay: `${(index + 5) * 150}ms` }}
            >
              <div className="absolute -top-3 -left-3 w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                {stat.icon}
              </div>
              <div className="pt-6">
                <h3 className="text-3xl sm:text-4xl font-bold mb-2 text-gradient">{stat.number}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links Section */}
        <div 
          className={`mt-24 pt-12 border-t border-border transition-all duration-1000 delay-1800 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
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
                className="p-6 rounded-xl border border-border bg-background/50 hover:bg-primary/5 transition-all group transform hover:scale-105 hover:shadow-lg"
                style={{ transitionDelay: `${index * 100}ms` }}
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
