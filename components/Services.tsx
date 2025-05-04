import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import Laptop from '@/public/system-removebg-preview.png'
import Robot from '@/public/robot-removebg-preview.png'
import Digital from '@/public/computer-with-keyboard-mouse-cartoon-style-isolated.png'
import Image from 'next/image';


const Services = () => {
  const services = [
    {
      title: "Electronic Health Record Systems",
      description: "Streamline patient data management with our secure, compliant EHR systems, designed to integrate seamlessly and enhance workflow efficiency.",
      features: ["Effortless Data Management", "HIPAA-Compliant Security", "Intuitive Interface"],
      illustration: Digital,
      gradient: "from-blue-300 to-blue-500 md:-translate-x-4",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
    },
    {
      title: "AI-Assisted Diagnostic Tools",
      description: "Empower clinicians with AI-driven diagnostic tools that deliver real-time insights and predictive analytics for faster, more accurate decisions.",
      features: ["Real-Time Decision Support", "Advanced Predictive Analytics", "Reduced Diagnostic Errors"],
      illustration: Robot,
      gradient: "from-purple-300 to-purple-500 md:translate-x-8",
      buttonColor: "bg-purple-500 hover:bg-purple-600",
    },
    {
      title: "Custom Software Solutions",
      description: "Transform your healthcare operations with bespoke software tailored to your unique needs, backed by seamless integration and ongoing support.",
      features: ["Custom-Built for You", "Effortless Integration", "Dedicated Support"],
      illustration: Laptop,
      gradient: "from-green-300 to-green-500 md:-translate-x-2",
      buttonColor: "bg-green-500 hover:bg-green-600",
    },
  ];

  // Animation variants for hover effect
  const cardVariants = {
    rest: {
      scale: 1,
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
      background: "rgba(255, 255, 255, 0.8)",
      transition: { duration: 0.3 },
    },
  };

  // Animation variants for page load (diagonal tilt/zigzag)
  const loadVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: 10, // Tilt on X-axis for diagonal effect
      rotateY: -10, // Tilt on Y-axis for diagonal effect
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.2, // Stagger each card by 0.2s
        duration: 0.6,
      },
    }),
  };

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover innovative solutions crafted to elevate healthcare delivery, streamline operations, and improve patient outcomes.
          </p>
        </div>

        <div className="space-y-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`w-full bg-gradient-to-r ${service.gradient} rounded-3xl p-8 shadow-sm flex flex-col md:flex-row items-center gap-8 relative`}
              variants={{ ...cardVariants, ...loadVariants }} // Merge both variant sets
              initial="hidden" // Start with load animation
              animate="visible" // Animate to visible state
              whileHover="hover" // Apply hover effect
              custom={index} // Pass index for staggered animation
              viewport={{ once: true }} // Animate only once when in view
              aria-labelledby={`service-title-${index}`}
            >
              <div className="flex-1">
                <h3 id={`service-title-${index}`} className="text-2xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 text-base">{service.description}</p>
                <div className="mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center mb-3">
                      <div className="h-2 w-2 rounded-full bg-gray-800 mr-3"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Illustration positioned at bottom right */}
              <div className="absolute bottom-4 right-8">
                <Image
                src ={service.illustration}
                alt="illustration"
                width={150}
                height={150}
                />
                
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;