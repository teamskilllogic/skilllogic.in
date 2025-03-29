
import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";
import { Globe, Code, Layers, Search, Settings, ShoppingCart, Check, ArrowRight } from "lucide-react";

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: "website-development",
      title: "Website Development",
      description: "Custom website solutions tailored to your business needs with modern design and seamless functionality.",
      icon: <Globe className="w-12 h-12" />,
      features: [
        "Responsive Design for All Devices",
        "Custom Web Development",
        "Content Management System (CMS) Integration",
        "Performance Optimization",
        "Web Hosting & Domain Management",
        "Website Maintenance & Updates"
      ],
      projects: ["ArtFolio Creative Agency", "TechHub Innovations", "HealthCare Solutions"],
      bgColor: "bg-[url('/images/web.jpeg')] bg-cover bg-no-repeat bg-center",
    },
  
    {
      id: "web-app-development",
      title: "Web App Development",
      description: "Powerful web applications that solve complex problems with intuitive interfaces and robust functionality.",
      icon: <Code className="w-12 h-12" />,
      features: [
        "Full-Stack Web Application Development",
        "Progressive Web Apps (PWAs)",
        "Custom API Development & Integration",
        "Database Design & Management",
        "Real-time Applications",
        "Cloud-based Solutions"
      ],
      projects: ["EcoTech Dashboard", "MediConnect Platform", "FoodFast Delivery"],
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20"
    },
    {
      id: "ui-ux-design",
      title: "UI/UX Design",
      description: "User-centered design that combines aesthetics with functionality to create engaging digital experiences.",
      icon: <Layers className="w-12 h-12" />,
      features: [
        "User Experience (UX) Research & Strategy",
        "User Interface (UI) Design",
        "Wireframing & Prototyping",
        "Usability Testing",
        "Information Architecture",
        "Interactive Design Elements"
      ],
      projects: ["TravelWise UI/UX", "FinTech Dashboard", "E-learning Platform"],
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    },
    {
      id: "seo-optimization",
      title: "SEO Optimization",
      description: "Enhance your online visibility with data-driven strategies to improve search engine rankings.",
      icon: <Search className="w-12 h-12" />,
      features: [
        "Keyword Research & Analysis",
        "On-Page SEO Optimization",
        "Technical SEO Improvements",
        "Content Strategy & Optimization",
        "Local SEO for Businesses",
        "Performance Tracking & Reporting"
      ],
      projects: ["Local Business Directory", "E-commerce Marketplace", "Legal Services Firm"],
      bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    {
      id: "website-maintenance",
      title: "Website Maintenance & Support",
      description: "Keep your website secure, updated, and performing at its best with our maintenance services.",
      icon: <Settings className="w-12 h-12" />,
      features: [
        "Regular Security Updates",
        "Website Backup & Recovery",
        "Performance Monitoring & Optimization",
        "Content Updates & Management",
        "Bug Fixes & Troubleshooting",
        "24/7 Technical Support"
      ],
      projects: ["Corporate Portals", "News & Media Websites", "Education Platforms"],
      bgColor: "bg-amber-50 dark:bg-amber-900/20"
    },
    {
      id: "ecommerce-solutions",
      title: "E-commerce Solutions",
      description: "Build and optimize online stores that drive sales with seamless shopping experiences.",
      icon: <ShoppingCart className="w-12 h-12" />,
      features: [
        "Custom E-commerce Development",
        "Shopping Cart & Checkout Optimization",
        "Payment Gateway Integration",
        "Product Catalog Management",
        "Inventory & Order Management",
        "Mobile Commerce Solutions"
      ],
      projects: ["LuxeGear E-commerce", "Artisanal Products Marketplace", "Digital Products Store"],
      bgColor: "bg-red-50 dark:bg-red-900/20"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Header */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-block px-3 py-1 mb-6 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
                Our Services
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Web Solutions That <span className="text-gradient">Drive Results</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                From custom website development to comprehensive digital solutions, we deliver quality services tailored to meet your business objectives.
              </p>
            </div>
          </div>
        </section>
        
        {/* Services */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  What We Offer
                </h2>
                <p className="text-muted-foreground mb-6">
                  We provide a comprehensive range of web development and digital services to help businesses establish a strong online presence and achieve their goals.
                </p>
                <ul className="space-y-3">
                  {services.map((service) => (
                    <li key={service.id} className="flex items-center">
                      <div className="mr-3 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Check size={14} />
                      </div>
                      <a 
                        href={`#${service.id}`} 
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {service.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="bg-muted/30 rounded-2xl p-6 border border-border">
                  <h3 className="text-xl font-bold mb-4">Our Approach</h3>
                  <p className="text-muted-foreground mb-6">
                    We follow a strategic process to deliver solutions that are tailored to your specific needs, ensuring optimal results.
                  </p>
                  <div className="space-y-6">
                    {[
                      {
                        number: "01",
                        title: "Discovery & Planning",
                        desc: "We start by understanding your business, goals, and requirements."
                      },
                      {
                        number: "02",
                        title: "Design & Development",
                        desc: "Our team creates the solution based on the approved strategy and designs."
                      },
                      {
                        number: "03",
                        title: "Testing & Launch",
                        desc: "We thoroughly test everything before launching to ensure quality."
                      },
                      {
                        number: "04",
                        title: "Maintenance & Growth",
                        desc: "We provide ongoing support and continuous improvements to drive growth."
                      }
                    ].map((step, index) => (
                      <div key={index} className="flex">
                        <div className="mr-4 flex-shrink-0">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">
                            {step.number}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-1">{step.title}</h4>
                          <p className="text-muted-foreground text-sm">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Detailed Services */}
            <div className="space-y-24">
              {services.map((service, index) => (
                <div 
                  key={service.id} 
                  id={service.id} 
                  className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                  <div className={`order-2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className={`rounded-2xl p-8 ${service.bgColor}`}>
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                        {service.icon}
                      </div>
                      <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                      <p className="text-muted-foreground mb-8">{service.description}</p>
                      
                      <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <div className="mt-1 mr-3 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                              <Check size={12} />
                            </div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4">Recent Projects</h3>
                        <div className="flex flex-wrap gap-2">
                          {service.projects.map((project, i) => (
                            <div key={i} className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm">
                              {project}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <Link 
                        to="/contact" 
                        className="btn-primary inline-flex items-center"
                      >
                        Get Started
                        <ArrowRight size={18} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                  <div className={`order-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="aspect-video rounded-2xl overflow-hidden bg-muted/50 flex items-center justify-center shadow-md">
                      <img 
                        src={`https://placehold.co/800x450/1E3A8A/FFFFFF?text=${service.title.replace(/ /g, '+')}`} 
                        alt={service.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16 mt-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Next Digital Project?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Contact us today for a free consultation and let's discuss how we can help you achieve your goals.
              </p>
              <Link to="/contact" className="px-8 py-3 rounded-full bg-white text-primary font-medium transition-all hover:bg-white/90 hover:shadow-lg inline-flex items-center">
                Request a Free Consultation
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

export default ServicesPage;
