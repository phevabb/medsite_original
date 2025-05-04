import React from 'react'
import { Button } from './ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Smartphone, ChevronRight, Check } from 'lucide-react'

const CTA = () => {
  return (
    <section className="py-20 bg-blue-900 text-white overflow-hidden relative m-6 rounded-lg">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute h-96 w-96 rounded-full bg-white/30 blur-3xl top-20 -left-20"></div>
        <div className="absolute h-64 w-64 rounded-full bg-white/30 blur-3xl -bottom-10 right-10"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side content */}
          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Healthcare Facility?</h2>
            <p className="text-lg mb-8">Join the growing number of healthcare providers in Ghana who trust Medirevs to power their digital transformation</p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                  Contact Sales <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right side with 3D mobile mockup */}
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center items-center py-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* 3D Phone Mockup Container */}
            <div className="relative w-72 h-[500px] perspective-1000">
              {/* 3D Phone - using CSS transforms for 3D effect */}
              <motion.div 
                className="preserve-3d relative w-full h-full"
                initial={{ rotateY: -20, rotateX: 10 }}
                animate={{ 
                  rotateY: ["-20deg", "20deg", "-20deg"],
                  rotateX: ["10deg", "5deg", "10deg"]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 8, 
                  ease: "easeInOut"
                }}
              >
                {/* Phone main body - front face */}
                <div className="absolute inset-0 bg-gray-900 rounded-3xl border-8 border-gray-800 shadow-2xl backface-hidden">
                  {/* Screen */}
                  <div className="absolute inset-0 m-3 bg-white rounded-2xl overflow-hidden">
                    {/* App Header */}
                    <div className="bg-blue-900 text-white p-4">
                      <div className="flex items-center">
                        <span className="text-lg font-bold">Medirevs</span>
                        <div className="ml-auto bg-blue-800 rounded-full p-1">
                          <Smartphone size={16} />
                        </div>
                      </div>
                    </div>
                    
                    {/* App Content */}
                    <div className="p-4">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                          <span className="text-blue-900 font-bold">DR</span>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">Dr. Richard Mensah</p>
                          <p className="text-xs text-gray-500">Cardiologist</p>
                        </div>
                      </div>
                      
                      {/* Dashboard elements */}
                      <div className="mb-4">
                        <p className="text-xs font-medium text-gray-500 mb-2">TODAY'S APPOINTMENTS</p>
                        <div className="bg-gray-50 rounded-lg p-3 mb-3 border border-gray-200">
                          <div className="flex justify-between">
                            <div>
                              <p className="text-sm font-bold text-gray-900">Ama Serwaa</p>
                              <p className="text-xs text-gray-600">Follow-up consultation</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-medium text-blue-600">2:00 PM</p>
                              <p className="text-xs text-gray-500">30 min</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                          <div className="flex justify-between">
                            <div>
                              <p className="text-sm font-bold text-gray-900">Kofi Mensah</p>
                              <p className="text-xs text-gray-600">Initial assessment</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-medium text-blue-600">3:15 PM</p>
                              <p className="text-xs text-gray-500">45 min</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Patient stats */}
                      <div>
                        <p className="text-xs font-medium text-gray-500 mb-2">PATIENT VITALS - AMA SERWAA</p>
                        <div className="bg-white shadow rounded-lg p-3 border border-gray-200">
                          <div className="grid grid-cols-2 gap-3">
                            <div className="p-2">
                              <p className="text-xs text-gray-500">Blood Pressure</p>
                              <p className="text-sm font-bold text-gray-900">142/90 mmHg</p>
                            </div>
                            <div className="p-2">
                              <p className="text-xs text-gray-500">Heart Rate</p>
                              <p className="text-sm font-bold text-gray-900">78 bpm</p>
                            </div>
                            <div className="p-2">
                              <p className="text-xs text-gray-500">Temperature</p>
                              <p className="text-sm font-bold text-gray-900">37.2°C</p>
                            </div>
                            <div className="p-2">
                              <p className="text-xs text-gray-500">Blood Glucose</p>
                              <p className="text-sm font-bold text-gray-900">6.8 mmol/L</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Phone notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-xl"></div>
                </div>
                
                {/* Phone side edge - left */}
                <div className="absolute left-0 top-0 w-8 h-full transform -translate-x-4 rotateY-90 bg-gray-800 origin-left"></div>
                
                {/* Phone side edge - right */}
                <div className="absolute right-0 top-0 w-8 h-full transform translate-x-4 rotateY-90 bg-gray-800 origin-right">
                  {/* Volume buttons */}
                  <div className="absolute left-0 top-32 w-1 h-8 bg-gray-700 rounded-r"></div>
                  <div className="absolute left-0 top-44 w-1 h-8 bg-gray-700 rounded-r"></div>
                </div>
                
                {/* Phone edge - top */}
                <div className="absolute top-0 left-0 w-full h-8 transform -translate-y-4 rotateX-90 bg-gray-800 origin-top"></div>
                
                {/* Phone edge - bottom */}
                <div className="absolute bottom-0 left-0 w-full h-8 transform translate-y-4 rotateX-90 bg-gray-800 origin-bottom">
                  {/* Charging port */}
                  <div className="absolute left-1/2 top-2 w-10 h-2 transform -translate-x-1/2 bg-gray-700 rounded"></div>
                </div>
              </motion.div>
              
              {/* Reflection/shadow effect under the phone */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-8 bg-blue-500/30 blur-lg rounded-full"></div>
              
              {/* Floating UI Elements */}
              <motion.div 
                className="absolute -right-16 top-24 bg-white rounded-lg shadow-lg p-3 z-20 w-48"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-2">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-900">AI Diagnosis</p>
                    <p className="text-xs text-gray-600">Report generated</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -left-14 bottom-32 bg-white rounded-lg shadow-lg p-3 z-20 w-36"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3, duration: 0.6 }}
              >
                <p className="text-xs font-medium text-gray-900 mb-1">BP History</p>
                <div className="h-10 flex items-end space-x-1">
                  <div className="bg-blue-500 w-2 h-5 rounded-t"></div>
                  <div className="bg-blue-500 w-2 h-4 rounded-t"></div>
                  <div className="bg-blue-500 w-2 h-6 rounded-t"></div>
                  <div className="bg-blue-500 w-2 h-5 rounded-t"></div>
                  <div className="bg-red-500 w-2 h-8 rounded-t"></div>
                  <div className="bg-red-500 w-2 h-7 rounded-t"></div>
                  <div className="bg-red-500 w-2 h-10 rounded-t"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Add some custom styles for 3D transforms */}
      <style jsx>{`
        .preserve-3d {
          transform-style: preserve-3d;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .rotateY-90 {
          transform: rotateY(90deg);
        }
        
        .rotateX-90 {
          transform: rotateX(90deg);
        }
        
        .origin-left {
          transform-origin: left;
        }
        
        .origin-right {
          transform-origin: right;
        }
        
        .origin-top {
          transform-origin: top;
        }
        
        .origin-bottom {
          transform-origin: bottom;
        }
      `}</style>
    </section>
  )
}

export default CTA