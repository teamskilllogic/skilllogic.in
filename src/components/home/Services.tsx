
import React from "react";
import { Link } from "react-router-dom";
import { 
  Globe, 
  Code, 
  Layers, 
  Search, 
  Settings, 
  ChevronRight,
  MonitorSmartphone,
  PenTool,
  LineChart,
  Wrench,
  ShoppingCart
} from "lucide-react";

const ServicesSection: React.FC = () => {
  const services = [
    {
      id: "website-development",
      title: "Website Development",
      description: "Custom website solutions tailored to your business needs with modern design and seamless functionality.",
      icon: <Globe className="w-6 h-6" />,
      link: "/services#website-development",
      features: ["Business Websites", "Personal Portfolios", "Landing Pages"]
      
    },
    {
      id: "web-app-development",
      title: "Web App Development",
      description: "Powerful web applications that solve complex problems with intuitive interfaces and robust functionality.",
      icon: <Code className="w-6 h-6" />,
      link: "/services#web-app-development",
      features: ["SaaS Applications", "Custom Dashboards", "Enterprise Solutions"]
    },
    {
      id: "ui-ux-design",
      title: "UI/UX Design",
      description: "User-centered design that combines aesthetics with functionality to create engaging digital experiences.",
      icon: <Layers className="w-6 h-6" />,
      link: "/services#ui-ux-design",
      features: ["Wireframing", "Prototyping", "User Testing"]
    },
    {
      id: "seo-optimization",
      title: "SEO Optimization",
      description: "Enhance your online visibility with data-driven strategies to improve search engine rankings.",
      icon: <Search className="w-6 h-6" />,
      link: "/services#seo-optimization",
      features: ["Keyword Research", "On-Page SEO", "Performance Optimization"]
    },
    {
      id: "website-maintenance",
      title: "Website Maintenance",
      description: "Keep your website secure, updated, and performing at its best with our maintenance services.",
      icon: <Settings className="w-6 h-6" />,
      link: "/services#website-maintenance",
      features: ["Security Updates", "Performance Monitoring", "Content Management"]
    },
    {
      id: "ecommerce-solutions",
      title: "E-commerce Solutions",
      description: "Build and optimize online stores that drive sales with seamless shopping experiences.",
      icon: <ShoppingCart className="w-6 h-6" />,
      link: "/services#ecommerce-solutions",
      features: ["Custom Shops", "Payment Integration", "Inventory Management"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Web Solutions For Your Business
          </h2>
          <p className="text-muted-foreground">
            We offer a wide range of web development services to help your business succeed online.
            From custom websites to complex web applications, our team delivers excellent results.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="bg-background border border-border rounded-2xl overflow-hidden shadow-sm transition-all hover:shadow-md hover:-translate-y-1 opacity-0 animate-fadeIn"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              <div className="p-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <div className="mr-2 text-primary">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.66675 10.1147L12.7947 3.98599L13.7381 4.92866L6.66675 12L2.42875 7.76199L3.37141 6.81933L6.66675 10.1147Z" fill="currentColor" />
                        </svg>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="border-t border-border p-4">
                <Link
                  to={service.link}
                  className="flex items-center justify-between font-medium text-primary hover:text-primary/80"
                >
                  <span>Learn More</span>
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/services" className="btn-primary inline-flex items-center">
            View All Services
            <ChevronRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
