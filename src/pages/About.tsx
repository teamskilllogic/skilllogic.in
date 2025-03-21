
import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Users, Lightbulb, BarChart, Target, Award, TrendingUp } from "lucide-react";

const AboutPage: React.FC = () => {
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

  return (
    <div className="min-h-screen">
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
                  <Link to="/services" className="btn-primary inline-flex items-center">
                    Our Services
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                  <Link to="/contact" className="px-8 py-3 rounded-full bg-background border border-border text-foreground font-medium transition-all hover:bg-muted inline-flex items-center">
                    Contact Us
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </div>
              <div>
                <div className="aspect-square rounded-2xl overflow-hidden relative shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
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
        
        {/* Our Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How SkillLogic Began
              </h2>
              <p className="text-muted-foreground">
                Our journey from a small startup to an established web development company focused on creating digital excellence.
              </p>
            </div>
            
            <div className="relative pl-8 border-l border-primary/30 space-y-16 max-w-4xl mx-auto">
              {[
                {
                  year: "2013",
                  title: "The Beginning",
                  description: "SkillLogic was founded with a simple mission: to help businesses leverage the power of the web to grow and succeed. Starting with just two developers, we focused on creating custom websites for local businesses.",
                  image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                },
                {
                  year: "2016",
                  title: "Expanding Our Expertise",
                  description: "As our client base grew, so did our team and capabilities. We expanded our services to include UI/UX design, web application development, and e-commerce solutions. This period marked significant growth as we took on larger and more complex projects.",
                  image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                },
                {
                  year: "2018",
                  title: "Embracing Innovation",
                  description: "Recognizing the rapidly evolving digital landscape, we invested in new technologies and methodologies. Our team began specializing in progressive web apps, responsive design, and advanced web technologies to deliver cutting-edge solutions.",
                  image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                },
                {
                  year: "2020",
                  title: "Navigating Challenges",
                  description: "During the global pandemic, we helped numerous businesses pivot to digital, enabling them to continue operating despite physical restrictions. This period reinforced our commitment to being not just service providers, but strategic partners to our clients.",
                  image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                },
                {
                  year: "Today",
                  title: "Looking to the Future",
                  description: "Today, SkillLogic stands as a dynamic digital agency with a global client base. We continue to push boundaries, stay ahead of trends, and deliver exceptional digital experiences that drive tangible results for our clients.",
                  image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                }
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-12 top-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs">
                    {index + 1}
                  </div>
                  <div className={`grid grid-cols-1 md:grid-cols-5 gap-8 items-center ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                    <div className={`md:col-span-2 order-2 ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                      <div className="aspect-video rounded-xl overflow-hidden shadow-md">
                        <img 
                          src={step.image} 
                          alt={step.title} 
                          className="w-full h-full object-cover"
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
        <section className="py-16 bg-muted/30">
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
                    <div key={index} className="p-5 rounded-lg bg-background border border-border hover-card">
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
        <section className="py-20">
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
                  className="rounded-xl overflow-hidden bg-background border border-border hover-card opacity-0 animate-fadeIn"
                  style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
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
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  icon: <TrendingUp className="w-8 h-8" />,
                  number: "100+",
                  label: "Projects Completed"
                },
                { 
                  icon: <Users className="w-8 h-8" />,
                  number: "50+",
                  label: "Happy Clients"
                },
                { 
                  icon: <BarChart className="w-8 h-8" />,
                  number: "10+",
                  label: "Years of Experience"
                },
                { 
                  icon: <Award className="w-8 h-8" />,
                  number: "15+",
                  label: "Industry Awards"
                }
              ].map((stat, index) => (
                <div key={index} className="text-center">
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
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Digital Journey?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Partner with SkillLogic and transform your online presence with our expert web development services.
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center">
                Get in Touch Today
                <ArrowRight size={18} className="ml-2" />
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
