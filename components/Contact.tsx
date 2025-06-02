// components/ContactUs.tsx (or wherever your component resides)
'use client'; // This directive is required for client-side components in App Router

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from 'lucide-react';
import { toast } from 'sonner'; // Using sonner for this example as per your import

// Import our types and schema
import { ContactFormInputs, ApiResponse } from '@/schemas/contactSchema';

const ContactUs = () => {
  const [formData, setFormData] = useState<ContactFormInputs>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  // FIX: Allow undefined for error values to clear them.
  // Using Partial<ContactFormInputs> ensures keys are valid and values can be string or undefined.
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormInputs, string>>>({}); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id as keyof ContactFormInputs]: value, // Type assertion for 'id' to match ContactFormInputs keys
    }));
    // Clear error for the field being typed into
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id as keyof ContactFormInputs]: undefined, // Set to undefined to clear the error
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({}); // Clear all previous errors at the start of a new submission attempt

    try {
      // Ensure this path matches your API route, e.g., '/api/contact' as previously defined
      const response = await fetch('/api/send-email', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data: ApiResponse = await response.json();

      if (response.ok) {
        toast.success(data.message);
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
      } else {
        toast.error(data.message || 'Failed to send message. Please try again.');
        if (data.errors) {
          // Type assertion here because data.errors might not strictly match Partial<Record<keyof ContactFormInputs, string>>
          // from the API response (e.g., API could return extra keys), but it's safe for our purpose.
          setErrors(data.errors as Partial<Record<keyof ContactFormInputs, string>>); 
        }
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('An unexpected error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    className={`border-input bg-gray-50 ${errors.name ? 'border-red-500' : ''}`}
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    className={`border-input bg-gray-50 ${errors.email ? 'border-red-500' : ''}`}
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input 
                  id="subject" 
                  placeholder="How can we help you?" 
                  className={`border-input bg-gray-50 ${errors.subject ? 'border-red-500' : ''}`}
                  value={formData.subject}
                  onChange={handleChange}
                />
                {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Write your message here..." 
                  className={`min-h-[150px] border-input bg-gray-50 ${errors.message ? 'border-red-500' : ''}`}
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>
              
              <Button type="submit" className="w-full bg-emerald-500" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
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
                    <a href="tel:+233556149159" className="text-muted-foreground hover:text-mediblue-600">
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
                {/* Use a valid Google Maps embed URL. You need to generate this from Google Maps itself. */}
                {/* For example, by searching "Accra" on Google Maps, clicking "Share", then "Embed a map". */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15885.741006520796!2d-0.20309999999999998!3d5.599723999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a7e6b7d2f9d%3A0x6b1f2b6e1b6f1b6!2sAccra!5e0!3m2!1sen!2sgh!4v1700000000000!5m2!1sen!2sgh"
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