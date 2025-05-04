import React from 'react';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Mockup from '@/public/mockup.jpg';
import { motion } from 'framer-motion';

const MobileApp = () => {
  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Animation variants for features
  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: i * 0.2 }
    })
  };

  // Animation variants for image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.4 } }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-mediblue-50 to-medipurple-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <motion.h2 
              className="text-3xl font-bold mb-6"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              MEDIREVS Mobile App
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground mb-8"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Access our powerful healthcare solutions on the go with our 
              intuitive and feature-rich mobile application. Stay connected 
              with patients, manage records, and make informed decisions from anywhere.
            </motion.p>
            
            <div className="space-y-4 mb-8">
              {[
                {
                  title: "Secure Patient Data Access",
                  description: "View and update patient records securely from your mobile device."
                },
                {
                  title: "Real-time AI Diagnostics",
                  description: "Get AI-powered insights and recommendations in real-time."
                },
                {
                  title: "Seamless Integration",
                  description: "Works perfectly with your existing hospital information systems."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  variants={featureVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                >
                  <div className={`h-6 w-6 rounded-full bg-medi${['green', 'blue', 'purple'][index]}-100 flex items-center justify-center text-medi${['green', 'blue', 'purple'][index]}-600 mr-4`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Button className="bg-black text-white hover:bg-gray-800 flex items-center space-x-2 px-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.5781 12.0096C17.5558 9.3443 19.8254 8.01659 19.9189 7.95818C18.7256 6.21316 16.8942 5.97068 16.2583 5.95171C14.6647 5.78443 13.1201 6.86463 12.3136 6.86463C11.4911 6.86463 10.2415 5.96886 8.91431 5.99706C7.19219 6.02429 5.60323 7.00678 4.72403 8.51751C2.89931 11.5936 4.24657 16.1131 6.00018 18.7318C6.87503 20.0225 7.89456 21.4822 9.23864 21.4329C10.5487 21.3798 11.0338 20.5966 12.6257 20.5966C14.2017 20.5966 14.6647 21.4329 16.0312 21.4013C17.4458 21.3798 18.3241 20.1014 19.1682 18.799C20.1811 17.3055 20.5984 15.8324 20.6183 15.755C20.585 15.7418 17.6033 14.6003 17.5781 12.0096Z M15.0843 4.11077C15.7974 3.23371 16.2732 2.03496 16.1314 0.810547C15.126 0.852348 13.8683 1.51181 13.1221 2.36507C12.4624 3.11765 11.8946 4.36397 12.0534 5.54836C13.1792 5.63868 14.3523 4.98062 15.0843 4.11077Z" />
                </svg>
                <span>App Store</span>
              </Button>
              <Button className="bg-black text-white hover:bg-gray-800 flex items-center space-x-2 px-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.30898 20.2693C3.0083 19.5238 2.83594 18.7018 2.83594 17.8333V7.16667C2.83594 6.2982 3.0083 5.47616 3.30898 4.7307L12.5 12.5L3.30898 20.2693Z M5.82862 21.9237C6.5062 22.2103 7.2593 22.3667 8.0026 22.3667H16.9974C17.7407 22.3667 18.4938 22.2103 19.1714 21.9237L12.5 16.3333L5.82862 21.9237Z M19.1714 3.07633C18.4938 2.78967 17.7407 2.63333 16.9974 2.63333H8.0026C7.2593 2.63333 6.5062 2.78967 5.82862 3.07633L12.5 8.66667L19.1714 3.07633Z M21.691 4.7307C21.9917 5.47616 22.1641 6.2982 22.1641 7.16667V17.8333C22.1641 18.7018 21.9917 19.5238 21.691 20.2693L12.5 12.5L21.691 4.7307Z" />
                </svg>
                <span>Google Play</span>
              </Button>
            </motion.div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center">
            <motion.div 
              className="relative"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-mediblue-300/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-medipurple-300/20 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <Image
                  src={Mockup}
                  alt='phone-mockup'
                  width={300}
                  height={300}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;