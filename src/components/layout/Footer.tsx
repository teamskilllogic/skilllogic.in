
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight, MessageCircle } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link to="/" className="text-xl font-bold text-gradient mb-4 inline-block">
              SkillLogic.in
            </Link>
            <p className="text-muted-foreground mb-6">
              Crafting websites that drive success. We build digital experiences that engage, convert, and grow your business.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://www.instagram.com/skilllogic.in?igsh=aml3dDNza2thZ2Q5"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/skilllogic-technologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
            <div className="mt-6">
              <a
                href="https://wa.me/918318943040"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition-colors"
              >
                <MessageCircle size={18} className="mr-2" /> Get in touch on WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-muted-foreground hover:text-foreground flex items-center">
                <ArrowRight size={14} className="mr-2" />
                Home
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-foreground flex items-center">
                <ArrowRight size={14} className="mr-2" />
                About Us
              </Link>
              <Link to="/services" className="text-muted-foreground hover:text-foreground flex items-center">
                <ArrowRight size={14} className="mr-2" />
                Services
              </Link>
              <Link to="/portfolio" className="text-muted-foreground hover:text-foreground flex items-center">
                <ArrowRight size={14} className="mr-2" />
                Portfolio
              </Link>
              <Link to="/blog" className="text-muted-foreground hover:text-foreground flex items-center">
                <ArrowRight size={14} className="mr-2" />
                Blog
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground flex items-center">
                <ArrowRight size={14} className="mr-2" />
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <nav className="flex flex-col space-y-3">
              <Link to="/services" className="text-muted-foreground hover:text-foreground flex items-center">
                <ArrowRight size={14} className="mr-2" />
                Website Development
              </Link>
              <Link to="/services" className="text-muted-foreground hover:text-foreground flex items-center">
                <ArrowRight size={14} className="mr-2" />
                Web App Development
              </Link>
              <Link to="/services" className="text-muted-foreground hover:text-foreground flex items-center">
                <ArrowRight size={14} className="mr-2" />
                UI/UX Design
              </Link>
              <Link to="/services" className="text-muted-foreground hover:text-foreground flex items-center">
                <ArrowRight size={14} className="mr-2" />
                SEO Optimization
              </Link>
              <Link to="/services" className="text-muted-foreground hover:text-foreground flex items-center">
                <ArrowRight size={14} className="mr-2" />
                Website Maintenance
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="mt-1 mr-3 text-primary" size={18} />
                <p className="text-muted-foreground">Civil Lines Power House Road Bhadohi -221401, Uttar Pradesh India</p>
              </div>
              <div className="flex items-start">
                <Phone className="mt-1 mr-3 text-primary" size={18} />
                <div className="flex flex-col">
                  <a href="tel:+918318943040" className="text-muted-foreground hover:text-foreground">
                    +91 8318943040
                  </a>
                  <a href="tel:+919125138209" className="text-muted-foreground hover:text-foreground">
                    +91 9125138209
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="mr-3 text-primary" size={18} />
                <a href="mailto:info@skilllogic.in" className="text-muted-foreground hover:text-foreground">
                  info@skilllogic.in
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © {currentYear} SkillLogic.in. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
