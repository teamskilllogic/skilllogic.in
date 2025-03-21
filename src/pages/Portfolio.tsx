
import React, { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Eye } from "lucide-react";

const categories = [
  { id: "all", name: "All Projects" },
  { id: "websites", name: "Websites" },
  { id: "webapps", name: "Web Apps" },
  { id: "ecommerce", name: "E-commerce" },
  { id: "ui-ux", name: "UI/UX Design" }
];

const projects = [
  {
    id: 1,
    title: "ArtFolio Creative Agency",
    category: "websites",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "A modern website for a creative design agency with portfolio showcase and service listings.",
    client: "ArtFolio Inc.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://example.com/artfolio"
  },
  {
    id: 2,
    title: "EcoTech Dashboard",
    category: "webapps",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "An advanced analytics dashboard for monitoring environmental metrics and sustainability goals.",
    client: "EcoTech Solutions",
    technologies: ["Vue.js", "D3.js", "Firebase"],
    link: "https://example.com/ecotech"
  },
  {
    id: 3,
    title: "LuxeGear E-commerce",
    category: "ecommerce",
    image: "https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "A premium online store for luxury products with advanced filtering and payment integrations.",
    client: "LuxeGear",
    technologies: ["Next.js", "Stripe", "MongoDB"],
    link: "https://example.com/luxegear"
  },
  {
    id: 4,
    title: "MediConnect Platform",
    category: "webapps",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "A healthcare platform connecting patients with specialists and managing appointments.",
    client: "MediConnect",
    technologies: ["React", "Node.js", "PostgreSQL"],
    link: "https://example.com/mediconnect"
  },
  {
    id: 5,
    title: "TravelWise UI/UX",
    category: "ui-ux",
    image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Comprehensive UI/UX design for a travel booking application with a focus on user experience.",
    client: "TravelWise",
    technologies: ["Figma", "Adobe XD", "Prototyping"],
    link: "https://example.com/travelwise"
  },
  {
    id: 6,
    title: "FoodFast Delivery",
    category: "webapps",
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "A food delivery platform with real-time tracking and multiple restaurant integrations.",
    client: "FoodFast Inc.",
    technologies: ["React Native", "Firebase", "Google Maps API"],
    link: "https://example.com/foodfast"
  },
  {
    id: 7,
    title: "TechHub Corporate Site",
    category: "websites",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "A corporate website for a technology company featuring product showcases and investor relations.",
    client: "TechHub Innovations",
    technologies: ["WordPress", "JavaScript", "PHP"],
    link: "https://example.com/techhub"
  },
  {
    id: 8,
    title: "EdLearn E-learning Platform",
    category: "webapps",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "An interactive e-learning platform with course management, quizzes, and progress tracking.",
    client: "EdLearn Academy",
    technologies: ["Angular", "Node.js", "MongoDB"],
    link: "https://example.com/edlearn"
  },
  {
    id: 9,
    title: "StyleShop Marketplace",
    category: "ecommerce",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "A fashion marketplace connecting boutiques and independent designers with customers worldwide.",
    client: "StyleShop International",
    technologies: ["Shopify", "React", "GraphQL"],
    link: "https://example.com/styleshop"
  }
];

const PortfolioPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    
    window.addEventListener("keydown", handleEsc);
    
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Header */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-block px-3 py-1 mb-6 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
                Our Portfolio
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Showcasing Our <span className="text-gradient">Best Work</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Explore our diverse portfolio of projects spanning various industries and technologies.
                Each project represents our commitment to quality, innovation, and client success.
              </p>
            </div>
          </div>
        </section>
        
        {/* Portfolio Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-muted hover:bg-muted/80 text-foreground"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.id}
                  className="group relative rounded-xl overflow-hidden border border-border bg-background hover-card opacity-0 animate-fadeIn"
                  style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button 
                        onClick={() => openModal(project)}
                        className="rounded-full bg-white/20 backdrop-blur-sm text-white p-3 transform scale-90 hover:scale-100 transition-transform"
                        aria-label={`View details of ${project.title}`}
                      >
                        <Eye size={24} />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold line-clamp-1">{project.title}</h3>
                      <div className="inline-block px-2 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary">
                        {categories.find(c => c.id === project.category)?.name}
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{project.description}</p>
                    <button
                      onClick={() => openModal(project)}
                      className="text-primary hover:text-primary/80 font-medium text-sm flex items-center"
                    >
                      View Project Details <ArrowRight size={14} className="ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No projects found</h3>
                <p className="text-muted-foreground">
                  We don't have any projects in this category yet. Please check back later.
                </p>
              </div>
            )}
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
                Contact us today to discuss your project and learn how we can help you achieve your digital goals.
              </p>
              <Link to="/contact" className="px-8 py-3 rounded-full bg-white text-primary font-medium transition-all hover:bg-white/90 hover:shadow-lg inline-flex items-center">
                Let's Work Together
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      {/* Project Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-fadeIn" onClick={closeModal}>
          <div 
            className="bg-background rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto animate-scale"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative aspect-video">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
                  {categories.find(c => c.id === selectedProject.category)?.name}
                </div>
              </div>
              
              <p className="text-muted-foreground mb-8">{selectedProject.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-lg font-semibold mb-3">Project Details</h4>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm text-muted-foreground">Client:</span>
                      <div className="font-medium">{selectedProject.client}</div>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Category:</span>
                      <div className="font-medium">{categories.find(c => c.id === selectedProject.category)?.name}</div>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Project URL:</span>
                      <div>
                        <a 
                          href={selectedProject.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="font-medium text-primary hover:text-primary/80 inline-flex items-center"
                        >
                          Visit Website <ExternalLink size={14} className="ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <div 
                        key={index} 
                        className="px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center"
                >
                  Visit Live Project
                  <ExternalLink size={18} className="ml-2" />
                </a>
                
                <Link to="/contact" className="px-6 py-3 rounded-full bg-background border border-border text-foreground font-medium transition-all hover:bg-muted inline-flex items-center">
                  Start Similar Project
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default PortfolioPage;
