
import React from "react";
import { Link } from "react-router-dom";
import { Check, Users, Target, BarChart3, Clock, ChevronRight, Code, Laptop } from "lucide-react";

const AboutSection: React.FC = () => {
  // Dev-themed images
  const devImages = [
    "/lovable-uploads/337af8a2-276c-413a-b0f6-aedd47585419.png",
    "/lovable-uploads/1b43a1f0-6e33-4651-9c2a-3e8b15f8860c.png",
    "/lovable-uploads/e518dcbd-d504-46ee-b0ee-f1cdf8a56d29.png"
  ];
  
  const qualities = [
    {
      icon: <Users className="w-5 h-5" />,
      title: "Customer-Focused",
      description: "Your satisfaction is our priority. We work closely with you to understand your needs and deliver solutions that exceed expectations."
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Results-Driven",
      description: "We focus on delivering measurable results that directly impact your business goals and drive growth."
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Quality-Oriented",
      description: "We maintain the highest standards of quality in everything we do, from code to design to project management."
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Time-Efficient",
      description: "We value your time and deliver projects on schedule without compromising on quality or functionality."
    },
  ];

  return (
    <section id="about" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Timeline */}
          <div className="order-2 lg:order-1">
            <div className="relative pl-8 border-l border-primary/30 space-y-12">
              {[
                {
                  year: "2024",
                  title: "The Beginning",
                  description: "SkillLogic.in was founded with a vision to provide cutting-edge web development solutions for businesses of all sizes, focusing on quality, innovation, and customer satisfaction."
                },
                {
                  year: "2025",
                  title: "Expanding Our Reach",
                  description: "We are growing our expertise in UI/UX design, website development, and SEO optimization to help businesses establish a strong digital presence."
                },
                {
                  year: "2026",
                  title: "Scaling Up (Future Vision)",
                  description: "With an expanding client base, we plan to incorporate AI-powered solutions and automation into our web development services to offer smarter, more efficient websites."
                },
                {
                  year: "2027",
                  title: "Industry Innovators (Future Vision)",
                  description: "SkillLogic.in aims to become a recognized name in the web development industry, delivering high-performance, scalable, and user-friendly web solutions worldwide."
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="relative opacity-0 animate-fadeInLeft"
                  style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="absolute -left-10 top-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs">
                    {index + 1}
                  </div>
                  <div className="bg-muted/40 rounded-lg p-5 hover-card">
                    <div className="inline-block px-3 py-1 mb-2 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary">
                      {item.year}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 mb-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary animate-fadeIn animate-fill-both">
                About SkillLogic
              </div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight animate-fadeIn animate-delay-300 animate-fill-both">
                We Create Digital Experiences That <span className="text-gradient">Matter</span>
              </h2>
              <p className="text-muted-foreground animate-fadeIn animate-delay-600 animate-fill-both">
                At SkillLogic, we're more than just a web development company. We're a team of passionate digital craftspeople dedicated to creating exceptional online experiences that help businesses grow.
              </p>
              
              {/* Image Showcase */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                {devImages.map((image, index) => (
                  <div 
                    key={index} 
                    className="rounded-lg overflow-hidden shadow-md hover-card opacity-0 animate-fadeIn"
                    style={{ animationDelay: `${(index + 4) * 150}ms`, animationFillMode: 'forwards' }}
                  >
                    <img 
                      src={image} 
                      alt={`Development process ${index + 1}`} 
                      className="w-full h-auto aspect-video object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                ))}
              </div>
              
              <div className="space-y-4 animate-fadeIn animate-delay-900 animate-fill-both">
                <h3 className="text-xl font-semibold">Why Choose Us?</h3>
                <ul className="space-y-3">
                  {[
                    "Innovative digital solutions",
                    "Team of expert developers and designers",
                    "Custom solutions tailored to your needs",
                    "Focus on results and ROI",
                    "Ongoing support and maintenance"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mt-1 mr-3 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Check size={12} />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link 
                to="/about" 
                className="inline-flex items-center font-medium text-primary hover:text-primary/80 mt-4 animate-fadeIn animate-delay-900 animate-fill-both"
              >
                Learn more about our journey
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
            
            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              {qualities.map((quality, index) => (
                <div 
                  key={index}
                  className="p-5 rounded-lg border border-border bg-background/50 hover-card opacity-0 animate-fadeIn"
                  style={{ animationDelay: `${(index + 8) * 150}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
                    {quality.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{quality.title}</h3>
                  <p className="text-muted-foreground text-sm">{quality.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
