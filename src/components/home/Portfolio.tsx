
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";

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
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    description: "A modern website for a creative design agency with portfolio showcase and service listings.",
    link: "/portfolio/1"
  },
  {
    id: 2,
    title: "EcoTech Dashboard",
    category: "webapps",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGFzaGJvYXJkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    description: "An advanced analytics dashboard for monitoring environmental metrics and sustainability goals.",
    link: "/portfolio/2"
  },
  {
    id: 3,
    title: "LuxeGear E-commerce",
    category: "ecommerce",
    image: "https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZWNvbW1lcmNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    description: "A premium online store for luxury products with advanced filtering and payment integrations.",
    link: "/portfolio/3"
  },
  {
    id: 4,
    title: "MediConnect Platform",
    category: "webapps",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGVhbHRoY2FyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    description: "A healthcare platform connecting patients with specialists and managing appointments.",
    link: "/portfolio/4"
  },
  {
    id: 5,
    title: "TravelWise UI/UX",
    category: "ui-ux",
    image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVpJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    description: "Comprehensive UI/UX design for a travel booking application with a focus on user experience.",
    link: "/portfolio/5"
  },
  {
    id: 6,
    title: "FoodFast Delivery",
    category: "webapps",
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZCUyMGRlbGl2ZXJ5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    description: "A food delivery platform with real-time tracking and multiple restaurant integrations.",
    link: "/portfolio/6"
  }
];

const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
            Our Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Showcasing Our Best Work
          </h2>
          <p className="text-muted-foreground">
            Browse through our recent projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>

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
              className="group relative rounded-xl overflow-hidden border border-border bg-background shadow-sm hover:shadow-md transition-all opacity-0 animate-fadeIn"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-6 w-full">
                    <Link 
                      to={project.link} 
                      className="btn-primary py-2 px-4 inline-flex items-center text-sm w-full justify-center"
                    >
                      View Details
                      <ArrowRight size={14} className="ml-2" />
                    </Link>
                  </div>
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
                <Link
                  to={project.link}
                  className="text-primary hover:text-primary/80 font-medium text-sm inline-flex items-center"
                >
                  Learn more <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/portfolio" className="btn-primary inline-flex items-center">
            View All Projects
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
