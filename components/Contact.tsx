import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactUs = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Have questions or want to learn more about our healthcare solutions? 
            Reach out to our team and we'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="widget">
            <h3 className="text-xl font-bold mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                  <Input id="name" placeholder="John Doe" className="border-input bg-gray-50" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                  <Input id="email" type="email" placeholder="john@example.com" className="border-input bg-gray-50" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input id="subject" placeholder="How can we help you?" className="border-input bg-gray-50" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Write your message here..." 
                  className="min-h-[150px] border-input bg-gray-50" 
                />
              </div>
              
              <Button className="w-full bg-gradient-to-r transition-colors duration-200 from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <div className="widget flex-1">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:info@medirevs.com" className="text-muted-foreground hover:text-blue-600">
                      info@medirevs.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-mediblue-600">
                      +233 5561 491 59
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-4">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="text-muted-foreground">
                    Ghana, Greater Accra, Accra
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map or Additional Info */}
            <div className="widget flex-1 bg-gradient-to-br from-blue-500 to-blue-500 text-white">
              <h3 className="text-xl font-bold mb-6">Partner With Us</h3>
              <p className="mb-6">
                Interested in becoming a partner or distributor? We're always looking to expand our network 
                of healthcare professionals and technology providers.
              </p>
              <Button variant="secondary" className="w-full">
                Become a Partner
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;