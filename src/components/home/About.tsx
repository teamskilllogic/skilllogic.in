
import React from "react";
import { Link } from "react-router-dom";
import { Check, Users, Target, BarChart3, Clock, ChevronRight } from "lucide-react";

const AboutSection: React.FC = () => {
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
                  year: "2013",
                  title: "Our Beginning",
                  description: "SkillLogic was founded with a mission to provide exceptional web development services to businesses of all sizes."
                },
                {
                  year: "2016",
                  title: "Expanding Services",
                  description: "We expanded our service offerings to include UI/UX design and began working with clients across multiple industries."
                },
                {
                  year: "2018",
                  title: "Growing Team",
                  description: "Our team grew to include specialists in various technologies, allowing us to tackle more complex projects."
                },
                {
                  year: "2020",
                  title: "Digital Transformation",
                  description: "We helped numerous businesses pivot to digital during challenging times, enhancing our remote collaboration capabilities."
                },
                {
                  year: "Today",
                  title: "Industry Leaders",
                  description: "We've established ourselves as industry leaders, recognized for our expertise, innovation, and customer satisfaction."
                },
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
              
              <div className="space-y-4 animate-fadeIn animate-delay-900 animate-fill-both">
                <h3 className="text-xl font-semibold">Why Choose Us?</h3>
                <ul className="space-y-3">
                  {[
                    "10+ years of industry experience",
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
