"use client"
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowUp, ChevronDown, CheckCircle, Shield, Clock, User, ChartBar, Heart, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'
import Blog from '@/components/Newsletter'
import AboutUs from '@/components/About'
import ContactUs from '@/components/Contact'
import Services from '@/components/Services'
import MobileApp from '@/components/MobileApp'
import Chatbot from '@/components/Chatbot'
// Animation variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
}

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navbar at the top */}

{/* Hero Section with Key Information and Side Image */}
    <Navbar />


   {/* About Us */}
      <AboutUs/>
      <Services/>

      <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Products</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Innovative Digital Healthcare Solutions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Enhancing efficiency, accessibility, and decision-making for healthcare providers and patients
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Product 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all">
                  <div className="h-3 bg-blue-500"></div>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                    <CardTitle>Medical Health Records System</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">A secure, cloud-based platform that allows healthcare providers to collect, store, manage, and access patient health information seamlessly.</p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-600">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Real-time data access
                      </li>
                      <li className="flex items-center text-gray-600">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Automated workflows
                      </li>
                      <li className="flex items-center text-gray-600">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Industry-standard security
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Product 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all">
                  <div className="h-3 bg-purple-500"></div>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <CardTitle>AI Doctor</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">AI-powered diagnostic assistant that helps healthcare professionals make timely and data-driven clinical decisions.</p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-600">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Predictive analytics
                      </li>
                      <li className="flex items-center text-gray-600">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Early disease detection
                      </li>
                      <li className="flex items-center text-gray-600">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Personalized treatment recommendations
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Product 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all">
                  <div className="h-3 bg-green-500"></div>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <CardTitle>Patient App</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Mobile application that empowers patients to access their health records, schedule appointments, and communicate with healthcare providers.</p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-600">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Secure patient portal
                      </li>
                      <li className="flex items-center text-gray-600">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Appointment scheduling
                      </li>
                      <li className="flex items-center text-gray-600">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Telemedicine integration
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>


    

     
     
      
  

      {/* Newsletter */}
      <Blog/>

      <ContactUs/>
      <MobileApp/>
      <Chatbot/>
      
      
      {/* Footer */}
      <Footer/>
    </main>
  )
}