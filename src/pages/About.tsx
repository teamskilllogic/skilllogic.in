
import React, { useEffect, useRef } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Users, Lightbulb, BarChart, Target, Award, TrendingUp, Code, Laptop } from "lucide-react";

const AboutPage: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  
  // Additional development images for the About page
  const developmentImages = [
    "/lovable-uploads/b84a5741-b91e-4e1c-9477-f4ea5a5f79f0.png",
    "/lovable-uploads/2b3336d5-166c-47f5-9e1f-a622ce4b19e0.png",
    "/lovable-uploads/a3bbc24a-dc41-413c-b108-cf5dd5323617.png",
    "/lovable-uploads/a0dfe608-8de8-4136-b51c-035f604b0d84.png",
    "/lovable-uploads/4786fb50-24c3-4758-93c9-099152b6917c.png"
  ];
  
  const team = [
    {
      name: "Alex Johnson",
      position: "Founder & CEO",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "With over 15 years of experience in web development and digital strategy, Alex founded SkillLogic to help businesses leverage technology for growth.",
    },
    {
      name: "Sarah Williams",
      position: "Lead Designer",
      image: "https://randomuser.me/api/portraits/women/42.jpg",
      bio: "Sarah brings 10+ years of UI/UX expertise, creating user-centered designs that combine aesthetics with functionality for optimal user experiences.",
    },
    {
      name: "Michael Chen",
      position: "Technical Director",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      bio: "Michael oversees all technical aspects of our projects, ensuring high-quality code, performance optimization, and cutting-edge solutions.",
    },
    {
      name: "Emily Rodriguez",
      position: "Project Manager",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      bio: "Emily excels at coordinating complex projects, ensuring they're delivered on time, within budget, and exceeding client expectations.",
    }
  ];

  useEffect(() => {
    // Add scroll animation for sections
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

    // Custom cursor effect
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        const x = e.clientX;
        const y = e.clientY;
        cursorRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animated code blocks
    const codeElements = document.querySelectorAll('.code-block');
    codeElements.forEach((el) => {
      if (el instanceof HTMLElement) {
        const typeSpeed = 50;
        const codeText = el.textContent || '';
        el.textContent = '';
        
        let i = 0;
        const typeCode = () => {
          if (i < codeText.length) {
            el.textContent += codeText.charAt(i);
            i++;
            setTimeout(typeCode, typeSpeed);
          }
        };
        
        const elObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                typeCode();
                elObserver.disconnect();
              }
            });
          },
          { threshold: 0.5 }
        );
        
        elObserver.observe(el);
      }
    });

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Custom cursor follower */}
      <div 
        ref={cursorRef} 
        className="fixed w-6 h-6 rounded-full border border-primary/50 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block" 
        style={{ transition: 'transform 0.1s ease-out' }}
      />
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-3 py-1 mb-6 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
                  About SkillLogic
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Bringing Your Digital <span className="text-gradient">Vision to Life</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  We're a team of passionate web developers, designers, and digital strategists dedicated to creating exceptional online experiences that drive business success.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/services" className="btn-primary inline-flex items-center group">
                    Our Services
                    <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link to="/contact" className="px-8 py-3 rounded-full bg-background border border-border text-foreground font-medium transition-all hover:bg-muted inline-flex items-center group">
                    Contact Us
                    <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
              <div>
                <div className="aspect-square rounded-2xl overflow-hidden relative shadow-lg">
                  <img 
                    src={developmentImages[2]} 
                    alt="SkillLogic Team" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <div className="text-2xl font-bold mb-2">Our Team</div>
                      <p className="text-white/80">Passionate experts committed to your success</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Developer Workspace Showcase */}
        <section className="py-16 reveal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
                Our Workspace
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Where <span className="text-gradient">Innovation</span> Happens
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Take a look at our development environment where we craft digital solutions with precision and creativity.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {developmentImages.map((img, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-xl border border-border shadow-sm hover-card opacity-0 animate-fadeIn"
                  style={{ animationDelay: `${(index + 1) * 200}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={img}
                      alt={`Development workspace ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5 bg-background">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-3">
                        <Code className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-semibold">
                        {index === 0 && "Modern Development Setup"}
                        {index === 1 && "Clean Workspace Environment"}
                        {index === 2 && "Focused Development"}
                        {index === 3 && "Peaceful Coding Atmosphere"}
                        {index === 4 && "Collaborative Teamwork"}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {index === 0 && "Our dual-monitor setup allows for efficient coding and testing workflows."}
                      {index === 1 && "Natural light and plants create a refreshing development environment."}
                      {index === 2 && "Quality hardware and distraction-free environment for optimal coding."}
                      {index === 3 && "Ambient lighting enhances focus during late-night coding sessions."}
                      {index === 4 && "Team members working together to deliver exceptional results."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Code Animation Section */}
        <section className="py-16 bg-muted/20 reveal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
                  Our Expertise
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  The <span className="text-gradient">Code</span> Behind Our Success
                </h2>
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-lg bg-skilllogic-dark text-green-400">
                <div className="flex items-center bg-skilllogic-dark/90 px-4 py-2 border-b border-gray-800">
                  <div className="flex space-x-2 mr-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-gray-400">skilllogic.tsx</div>
                </div>
                <div className="p-6 font-mono text-sm overflow-x-auto">
                  <pre className="code-block">
{`import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
}

const Project: React.FC<ProjectProps> = ({ 
  title, 
  description, 
  technologies 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    // Initialize project components
    console.log(\`Project \${title} initialized\`);
  }, [title]);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20
      }}
      transition={{ duration: 0.5 }}
      className="project-card"
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <p>{description}</p>
      <div className="tech-stack">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default Project;`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-20 reveal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                SkillLogic Journey: From Idea to Innovation
              </h2>
              <p className="text-muted-foreground">
                Our journey from a visionary concept to creating innovative digital solutions
              </p>
            </div>
            
            <div className="relative pl-8 border-l border-primary/30 space-y-16 max-w-4xl mx-auto">
              {[
                {
                  year: "2024",
                  title: "The Beginning",
                  description: "SkillLogic.in was founded with a vision to provide cutting-edge web development solutions for businesses of all sizes, focusing on quality, innovation, and customer satisfaction.",
                  image: developmentImages[0]
                },
                {
                  year: "2025",
                  title: "Expanding Our Reach",
                  description: "We are growing our expertise in UI/UX design, website development, and SEO optimization to help businesses establish a strong digital presence.",
                  image: developmentImages[1]
                },
                {
                  year: "2026",
                  title: "Scaling Up (Future Vision)",
                  description: "With an expanding client base, we plan to incorporate AI-powered solutions and automation into our web development services to offer smarter, more efficient websites.",
                  image: developmentImages[2]
                },
                {
                  year: "2027",
                  title: "Industry Innovators (Future Vision)",
                  description: "SkillLogic.in aims to become a recognized name in the web development industry, delivering high-performance, scalable, and user-friendly web solutions worldwide.",
                  image: developmentImages[3]
                }
              ].map((step, index) => (
                <div key={index} className="relative opacity-0 animate-fadeInLeft" style={{ animationDelay: `${index * 300}ms`, animationFillMode: 'forwards' }}>
                  <div className="absolute -left-12 top-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs">
                    {index + 1}
                  </div>
                  <div className={`grid grid-cols-1 md:grid-cols-5 gap-8 items-center ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                    <div className={`md:col-span-2 order-2 ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                      <div className="aspect-video rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                        <img 
                          src={step.image} 
                          alt={step.title} 
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        />
                      </div>
                    </div>
                    <div className={`md:col-span-3 order-1 ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                      <div className="inline-block px-3 py-1 mb-2 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary">
                        {step.year}
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Mission & Values */}
        <section className="py-16 bg-muted/30 reveal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
                  Our Mission
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  Why We Do What We Do
                </h2>
                <p className="text-muted-foreground mb-6">
                  At SkillLogic, our mission is to empower businesses with exceptional digital solutions that drive growth, enhance customer experiences, and create lasting value. We believe that every business, regardless of size, deserves access to high-quality web development services that can transform their online presence.
                </p>
                <div className="space-y-4">
                  {[
                    "Creating digital experiences that connect with users",
                    "Driving measurable results through effective web solutions",
                    "Empowering businesses to succeed in the digital landscape",
                    "Building long-term relationships based on trust and results"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mt-1 mr-3 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <CheckCircle size={14} />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
                  Our Values
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  Principles That Guide Us
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    {
                      icon: <Users className="w-6 h-6" />,
                      title: "Client-Centric",
                      description: "We put our clients' needs first, focusing on delivering solutions that address their specific challenges and objectives."
                    },
                    {
                      icon: <Award className="w-6 h-6" />,
                      title: "Excellence",
                      description: "We strive for excellence in everything we do, maintaining high standards in our code, design, and client communications."
                    },
                    {
                      icon: <Lightbulb className="w-6 h-6" />,
                      title: "Innovation",
                      description: "We embrace new technologies and methodologies, continuously learning and evolving to deliver cutting-edge solutions."
                    },
                    {
                      icon: <Target className="w-6 h-6" />,
                      title: "Results-Driven",
                      description: "We focus on achieving measurable outcomes that directly contribute to our clients' business success."
                    }
                  ].map((value, index) => (
                    <div 
                      key={index} 
                      className="p-5 rounded-lg bg-background border border-border hover-card transform transition-all hover:scale-105 hover:shadow-md opacity-0 animate-fadeIn"
                      style={{ animationDelay: `${(index + 10) * 150}ms`, animationFillMode: 'forwards' }}
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                        {value.icon}
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-20 reveal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
                Our Team
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet the Experts Behind SkillLogic
              </h2>
              <p className="text-muted-foreground">
                Our talented team combines technical expertise with creative passion to deliver exceptional results for our clients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div 
                  key={index} 
                  className="rounded-xl overflow-hidden bg-background border border-border hover-card opacity-0 animate-fadeIn transform transition-all hover:scale-105 hover:shadow-lg"
                  style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <div className="text-primary text-sm mb-4">{member.position}</div>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-skilllogic-teal text-primary-foreground reveal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  icon: <TrendingUp className="w-8 h-8" />,
                  number: "18+",
                  label: "Projects Completed"
                },
                { 
                  icon: <Users className="w-8 h-8" />,
                  number: "100%",
                  label: "Client Satisfaction"
                },
                { 
                  icon: <BarChart className="w-8 h-8" />,
                  number: "Innovation",
                  label: "Our Core Value"
                },
                { 
                  icon: <Award className="w-8 h-8" />,
                  number: "Quality",
                  label: "In Everything We Do"
                }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center transform transition-all hover:scale-110 opacity-0 animate-fadeIn"
                  style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-primary-foreground/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 reveal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Digital Journey?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Partner with SkillLogic and transform your online presence with our expert web development services.
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center group">
                Get in Touch Today
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
