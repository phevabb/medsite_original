
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "How AI is Revolutionizing Medical Diagnostics",
      excerpt: "Explore the latest advancements in AI technology and how they're improving diagnostic accuracy in healthcare settings.",
      date: "May 1, 2025",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80"
    },
    {
      title: "The Future of Electronic Health Records",
      excerpt: "Discover how modern EHR systems are evolving to better serve healthcare providers and improve patient outcomes.",
      date: "April 25, 2025",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80"
    },
    {
      title: "Ensuring Data Security in Healthcare Applications",
      excerpt: "Learn about the critical security measures needed to protect sensitive patient information in healthcare software.",
      date: "April 15, 2025",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80"
    }
  ];

  return (
    <section id="blog" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Blog Posts */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <div key={index} className="widget widget-hover flex flex-col h-full">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="text-xs text-muted-foreground mb-2">{post.date}</div>
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">{post.excerpt}</p>
                  <a 
                    href="#" 
                    className="text-mediblue-600 font-medium flex items-center hover:text-mediblue-700"
                  >
                    Read more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button variant="outline" className="border-mediblue-200 text-mediblue-600 hover:bg-mediblue-50">
                View All Articles
              </Button>
            </div>
          </div>
          
          {/* Newsletter */}
          <div className="w-full lg:w-1/3">
            <div className="widget h-full">
              <h2 className="text-2xl font-bold mb-4">Stay Informed</h2>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter to receive the latest updates, insights, and news about healthcare technology.
              </p>
              <div className="space-y-4">
                <Input placeholder="Your Name" className="border-input bg-gray-50" />
                <Input placeholder="Your Email" type="email" className="border-input bg-gray-50" />
                <Button className='w-full bg-gradient-to-r transition-colors duration-200 from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'>
                  Subscribe
                </Button>
              </div>
              <div className="mt-6 pt-6 border-t border-border text-sm text-muted-foreground">
                <p>By subscribing, you agree to receive marketing emails from MEDIREVS. You can unsubscribe at any time.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;