
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO, InnovateTech",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    content: "SkillLogic completely transformed our online presence. Their team not only designed a beautiful website but also helped us implement strategies that significantly increased our conversion rates. The ROI has been incredible!"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Marketing Director, GrowthFocus",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    content: "Working with SkillLogic was a game-changer for our business. Their attention to detail and understanding of our target audience resulted in a website that perfectly represents our brand and connects with our customers."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Founder, ArtisanCraft",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    content: "As a small business owner with limited technical knowledge, I appreciated how SkillLogic guided me through the entire process. They translated my vision into a stunning website that has helped my business grow beyond expectations."
  },
  {
    id: 4,
    name: "David Kim",
    position: "CTO, NextLevel Solutions",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    content: "The web application SkillLogic developed for us has streamlined our operations significantly. Their technical expertise combined with their business acumen delivered a solution that addressed all our pain points."
  },
  {
    id: 5,
    name: "Olivia Thompson",
    position: "E-commerce Manager, StyleHub",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    content: "Our e-commerce sales increased by 150% after SkillLogic redesigned our online store. Their focus on user experience and conversion optimization made a huge difference. I highly recommend their services!"
  }
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayRef = useRef<number | null>(null);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const startAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    
    autoplayRef.current = window.setInterval(() => {
      nextTestimonial();
    }, 6000);
  };

  useEffect(() => {
    if (autoplay) {
      startAutoplay();
    }
    
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplay, activeIndex]);

  const handleMouseEnter = () => {
    setAutoplay(false);
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  const handleMouseLeave = () => {
    setAutoplay(true);
    startAutoplay();
  };
  
  return (
    <section 
      id="testimonials" 
      className="py-20 bg-primary text-primary-foreground"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-white/20 border border-white/30 text-sm font-medium text-white">
            Client Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            What Our Clients Say
          </h2>
          <p className="text-primary-foreground/80">
            Don't just take our word for it. Hear from businesses we've helped succeed.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
                    <div className="flex items-start mb-6">
                      <div className="mr-4">
                        <div className="relative">
                          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-secondary">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-2 -right-2 bg-secondary text-white p-1 rounded-full">
                            <Quote size={14} />
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                        <p className="text-primary-foreground/70 text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                    <blockquote className="text-lg font-medium text-primary-foreground/90 italic">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="flex mt-6 space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white border border-white/30 -ml-5 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white border border-white/30 -mr-5 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index 
                    ? "bg-white scale-125" 
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
