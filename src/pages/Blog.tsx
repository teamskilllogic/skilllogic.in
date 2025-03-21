
import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";
import { Calendar, User, Search, Tag, Clock, ArrowRight } from "lucide-react";

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts" },
    { id: "web-development", name: "Web Development" },
    { id: "ui-ux", name: "UI/UX Design" },
    { id: "business", name: "Business" },
    { id: "technology", name: "Technology" }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Why Every Business Needs a Website in 2025",
      excerpt: "In today's digital-first economy, a professional website is no longer optional for businesses. Discover why having an online presence is crucial for growth and customer engagement.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "May 15, 2023",
      author: "Alex Johnson",
      category: "business",
      readTime: "8 min read",
      featured: true
    },
    {
      id: 2,
      title: "Best Web Technologies for Startups",
      excerpt: "Choosing the right technology stack is crucial for startup success. This guide explores the most efficient and cost-effective web technologies that can scale with your business.",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "June 2, 2023",
      author: "Michael Chen",
      category: "technology",
      readTime: "10 min read",
      featured: true
    },
    {
      id: 3,
      title: "How to Optimize a Website for Speed & SEO",
      excerpt: "Website speed is a critical factor in both user experience and search engine rankings. Learn proven strategies to optimize your site for lightning-fast performance and better SEO results.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "June 18, 2023",
      author: "Sarah Williams",
      category: "web-development",
      readTime: "12 min read",
      featured: true
    },
    {
      id: 4,
      title: "The Psychology of Color in Web Design",
      excerpt: "Colors can significantly impact how users perceive and interact with your website. Discover how to use color psychology to create more engaging and effective web designs.",
      image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "July 5, 2023",
      author: "Emily Rodriguez",
      category: "ui-ux",
      readTime: "7 min read",
      featured: false
    },
    {
      id: 5,
      title: "Building Accessible Websites: A Comprehensive Guide",
      excerpt: "Web accessibility is not just a legal requirement but a moral imperative. Learn how to make your websites accessible to all users, including those with disabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "July 22, 2023",
      author: "David Kim",
      category: "web-development",
      readTime: "15 min read",
      featured: false
    },
    {
      id: 6,
      title: "E-commerce Trends That Will Dominate 2025",
      excerpt: "The e-commerce landscape is constantly evolving. Stay ahead of the curve with these emerging trends that are set to transform online shopping experiences in the coming years.",
      image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "August 10, 2023",
      author: "Olivia Thompson",
      category: "business",
      readTime: "9 min read",
      featured: false
    },
    {
      id: 7,
      title: "The Rise of Progressive Web Apps (PWAs)",
      excerpt: "Progressive Web Apps combine the best of web and mobile apps. Discover how PWAs can enhance user engagement, reduce bounce rates, and improve conversion rates for your business.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "August 28, 2023",
      author: "Michael Chen",
      category: "technology",
      readTime: "11 min read",
      featured: false
    },
    {
      id: 8,
      title: "Creating Effective User Personas for Web Projects",
      excerpt: "User personas are essential for user-centered design. Learn how to create detailed and effective personas that will guide your web development process and improve user experience.",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "September 15, 2023",
      author: "Sarah Williams",
      category: "ui-ux",
      readTime: "8 min read",
      featured: false
    }
  ];

  // Filter blog posts based on search query and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Get featured posts
  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Header */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-block px-3 py-1 mb-6 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
                Our Blog
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Insights & <span className="text-gradient">Resources</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Discover the latest trends, tips, and best practices in web development, 
                design, and digital strategy from our team of experts.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-xl mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-5 py-3 pl-12 rounded-full border border-border bg-background focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all outline-none"
                  />
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search size={18} className="text-muted-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuredPosts.map((post, index) => (
                  <div 
                    key={post.id}
                    className="relative bg-background rounded-xl overflow-hidden border border-border hover-card opacity-0 animate-fadeIn"
                    style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <div className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                          Featured
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-xs text-muted-foreground mb-3 space-x-4">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <Link to={`/blog/${post.id}`}>
                        <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">{post.title}</h3>
                      </Link>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2">
                            <User size={14} />
                          </div>
                          <span className="text-sm">{post.author}</span>
                        </div>
                        <Link 
                          to={`/blog/${post.id}`}
                          className="text-primary hover:text-primary/80 font-medium text-sm inline-flex items-center"
                        >
                          Read More <ArrowRight size={14} className="ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Blog Posts */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Content */}
              <div className="lg:w-3/4">
                {/* Category Filters */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        activeCategory === category.id
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "bg-muted hover:bg-muted/80 text-foreground"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
                
                {/* Blog Posts Grid */}
                {filteredPosts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredPosts.map((post, index) => (
                      <div 
                        key={post.id}
                        className="bg-background rounded-xl overflow-hidden border border-border hover-card opacity-0 animate-fadeIn"
                        style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
                      >
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform group-hover:scale-105"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center text-xs text-muted-foreground mb-3 space-x-4">
                            <div className="flex items-center">
                              <Calendar size={14} className="mr-1" />
                              {post.date}
                            </div>
                            <div className="flex items-center">
                              <Tag size={14} className="mr-1" />
                              {categories.find(c => c.id === post.category)?.name}
                            </div>
                          </div>
                          <Link to={`/blog/${post.id}`}>
                            <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">{post.title}</h3>
                          </Link>
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2">
                                <User size={14} />
                              </div>
                              <span className="text-sm">{post.author}</span>
                            </div>
                            <Link 
                              to={`/blog/${post.id}`}
                              className="text-primary hover:text-primary/80 font-medium text-sm inline-flex items-center"
                            >
                              Read More <ArrowRight size={14} className="ml-1" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-12 text-center">
                    <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                    <p className="text-muted-foreground">
                      We couldn't find any articles matching your search criteria.
                      Please try a different search term or category.
                    </p>
                  </div>
                )}
              </div>
              
              {/* Sidebar */}
              <div className="lg:w-1/4">
                <div className="sticky top-32">
                  {/* Categories */}
                  <div className="bg-background rounded-xl border border-border p-6 mb-8">
                    <h3 className="text-lg font-bold mb-4">Categories</h3>
                    <div className="space-y-2">
                      {categories.filter(c => c.id !== "all").map(category => (
                        <button
                          key={category.id}
                          onClick={() => setActiveCategory(category.id)}
                          className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                            activeCategory === category.id
                              ? "bg-primary/10 text-primary font-medium"
                              : "hover:bg-muted"
                          }`}
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Recent Posts */}
                  <div className="bg-background rounded-xl border border-border p-6 mb-8">
                    <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
                    <div className="space-y-4">
                      {blogPosts.slice(0, 4).map(post => (
                        <div key={post.id} className="flex items-start space-x-3">
                          <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <Link to={`/blog/${post.id}`}>
                              <h4 className="font-medium text-sm hover:text-primary transition-colors line-clamp-2">{post.title}</h4>
                            </Link>
                            <div className="text-xs text-muted-foreground mt-1">{post.date}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Subscribe */}
                  <div className="bg-primary text-primary-foreground rounded-xl p-6">
                    <h3 className="text-lg font-bold mb-3">Subscribe to Newsletter</h3>
                    <p className="text-primary-foreground/80 text-sm mb-4">
                      Get the latest articles and resources directly to your inbox.
                    </p>
                    <form className="space-y-3">
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                      />
                      <button
                        type="submit"
                        className="w-full px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-white/90 transition-colors"
                      >
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-muted/30 py-16 mt-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Have a Topic You'd Like Us to Cover?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're always looking for new ideas and topics to explore. Let us know if there's something specific you'd like to learn about.
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center">
                Request a Topic
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

export default BlogPage;
