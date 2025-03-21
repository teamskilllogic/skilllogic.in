
import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "website-development",
    budget: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Your message has been sent successfully!");
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "website-development",
          budget: "",
          message: ""
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Header */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-block px-3 py-1 mb-6 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
                Get In Touch
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Let's Discuss Your <span className="text-gradient">Project</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                We're excited to learn about your project and how we can help bring your vision to life.
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Form & Info */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="bg-background border border-border rounded-2xl shadow-sm p-6 md:p-8 opacity-0 animate-fadeInLeft" style={{ animationFillMode: 'forwards' }}>
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-4">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                    <p className="text-muted-foreground mb-6">
                      Your message has been sent successfully. We'll get back to you as soon as possible.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="btn-primary"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Your Name*
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all outline-none"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address*
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all outline-none"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all outline-none"
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium mb-2">
                          Service Required*
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all outline-none"
                        >
                          <option value="website-development">Website Development</option>
                          <option value="web-app-development">Web App Development</option>
                          <option value="ui-ux-design">UI/UX Design</option>
                          <option value="seo-optimization">SEO Optimization</option>
                          <option value="website-maintenance">Website Maintenance</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all outline-none"
                      >
                        <option value="">Select a budget range</option>
                        <option value="less-than-5k">Less than $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-20k">$10,000 - $20,000</option>
                        <option value="20k-plus">$20,000+</option>
                        <option value="not-sure">Not sure yet</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Project Details*
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all outline-none resize-none"
                        placeholder="Tell us about your project, goals, and timeline..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary flex items-center justify-center w-full"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={18} className="ml-2" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
              
              {/* Contact Info & Map */}
              <div className="space-y-8 opacity-0 animate-fadeInRight" style={{ animationFillMode: 'forwards' }}>
                <div className="bg-primary text-primary-foreground rounded-2xl shadow-sm p-6 md:p-8">
                  <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <Mail className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Email Us</h3>
                        <a href="mailto:info@skilllogic.in" className="text-primary-foreground/80 hover:text-white transition-colors">
                          info@skilllogic.in
                        </a>
                        <p className="text-primary-foreground/60 text-sm mt-1">
                          For general inquiries and information
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <Phone className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Call Us</h3>
                        <a href="tel:+1234567890" className="text-primary-foreground/80 hover:text-white transition-colors">
                          +1 (234) 567-890
                        </a>
                        <p className="text-primary-foreground/60 text-sm mt-1">
                          Mon-Fri: 9:00 AM - 6:00 PM
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Visit Us</h3>
                        <p className="text-primary-foreground/80">
                          123 Web Avenue, Digital District
                          <br />
                          Tech City, 12345
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-white/20">
                    <h3 className="text-lg font-semibold text-white mb-3">Connect With Us</h3>
                    <div className="flex space-x-3">
                      {[
                        { name: "Facebook", url: "https://facebook.com" },
                        { name: "Twitter", url: "https://twitter.com" },
                        { name: "LinkedIn", url: "https://linkedin.com" },
                        { name: "Instagram", url: "https://instagram.com" }
                      ].map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                          aria-label={social.name}
                        >
                          <span className="text-sm font-medium">{social.name.charAt(0)}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="bg-secondary text-secondary-foreground rounded-2xl shadow-sm p-6 md:p-8">
                  <h3 className="text-xl font-bold mb-4">Working Hours</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-2xl overflow-hidden shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305916!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1619393302769!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Office Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-muted/30 mt-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
                FAQ
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Have questions about our services? Check out our frequently asked questions below,
                or contact us if you need more information.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {[
                  {
                    question: "What is the typical timeline for a website project?",
                    answer: "The timeline for a website project varies depending on complexity and scope. A simple website typically takes 4-6 weeks, while more complex projects can take 8-12 weeks or more. We'll provide a detailed timeline during our initial consultation based on your specific requirements."
                  },
                  {
                    question: "Do you provide website maintenance services?",
                    answer: "Yes, we offer comprehensive website maintenance services to keep your site secure, updated, and performing optimally. Our maintenance packages include regular updates, security monitoring, performance optimization, and content updates as needed."
                  },
                  {
                    question: "How much does a website or web application cost?",
                    answer: "The cost depends on various factors including complexity, features, design requirements, and integration needs. We offer solutions for different budgets and provide detailed quotes after understanding your project requirements. Contact us for a personalized estimate."
                  },
                  {
                    question: "Do you offer e-commerce solutions?",
                    answer: "Yes, we specialize in developing custom e-commerce solutions that meet your specific business needs. Whether you need a simple online store or a complex marketplace with multiple vendors, we can create a solution that drives sales and provides an excellent shopping experience."
                  },
                  {
                    question: "What is your design process like?",
                    answer: "Our design process begins with understanding your brand, goals, and target audience. We then create wireframes and mockups, gather your feedback, and refine until you're satisfied. Once the design is approved, we move to development with a focus on creating responsive, user-friendly interfaces."
                  },
                  {
                    question: "Do you offer SEO services with website development?",
                    answer: "Yes, we build websites with SEO best practices in mind and also offer dedicated SEO services. This includes keyword research, on-page optimization, technical SEO improvements, and strategies to improve your search engine rankings and drive organic traffic."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-background border border-border rounded-lg overflow-hidden">
                    <details className="group">
                      <summary className="flex items-center justify-between p-6 cursor-pointer">
                        <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                        <span className="relative flex-shrink-0 ml-2 w-5 h-5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="absolute transition-transform duration-200 group-open:rotate-180" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </span>
                      </summary>
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </div>
                    </details>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-10">
                <p className="text-muted-foreground mb-4">
                  Still have questions? We're here to help!
                </p>
                <a href="mailto:info@skilllogic.in" className="btn-primary inline-flex items-center">
                  Email Us Your Question
                  <Mail size={18} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
