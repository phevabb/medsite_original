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
              
              <Button className="w-full bg-emerald-500">
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
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-900 mr-4">
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
            <div className="border shadow-sm rounded-3xl p-8">
              <h3 className="text-xl font-bold mb-6">
                Find Us in Accra
              </h3>
              <div className="relative w-full h-64 rounded-2xl overflow-hidden border border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254508.39472635163!2d-0.3909363!3d5.6037168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                  title="Medirevs Location in Accra, Ghana"
                ></iframe>

                {/* Map overlay for futuristic effect */}
                <div className="absolute inset-0 pointer-events-none rounded-2xl"></div>
              </div>

              <div className="mt-4 p-4 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-xl border border-emerald-500/20">
                <p className="text-sm text-gray-400 text-center">
                  <span className="text-emerald-400 font-medium">📍 Located in the heart of Accra</span>
                  <br />
                  Serving healthcare facilities across Ghana
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;