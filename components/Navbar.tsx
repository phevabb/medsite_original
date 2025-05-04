import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const lineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: '8rem',
      opacity: 1,
      transition: { duration: 1, ease: 'easeInOut' },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6 },
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      transition: { duration: 0.3 },
    },
  };

  return (
    <header className="relative min-h-screen flex flex-col bg-white pb-6">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className={`py-4 transition-all duration-300 ${
          scrolled
            ? 'shadow-lg'
            : ' backdrop-blur-lg'
        }`}
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">
                Medi<span className="text-green-400">revs</span>
              </h1>
            </motion.div>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Services', 'Products', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ y: -3 }}
                  className="font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300"
                >
                  {item}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="focus:outline-none text-blue-600"
                aria-label="Toggle mobile menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </motion.button>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <motion.a
                href="#"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300 shadow-sm hover:bg-blue-700"
                aria-label="Contact us"
              >
                Contact Us
              </motion.a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-20 flex-1 flex items-center pt-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center h-full">
            {/* Left Side - Hero Content */}
            <motion.div
              className="md:w-1/2 text-left pr-8"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.h2
                variants={itemVariants}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight"
              >
                Revolutionizing Healthcare with Cutting-Edge AI Solutions
              </motion.h2>

              <motion.div
                variants={lineVariants}
                className="h-1 bg-green-400 mb-8"
              ></motion.div>

              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg"
              >
                Transform patient care with our innovative AI technology, designed to boost accessibility, efficiency, and outcomes across Ghana’s healthcare system.
              </motion.p>

              <motion.div
                variants={containerVariants}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.a
                  href="#"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-500 hover:bg-green-600 text-white font-medium px-8 py-4 rounded-xl shadow-lg transition duration-300 text-center text-lg"
                  aria-label="Explore our solutions"
                >
                  Explore Our Solutions
                </motion.a>

                <motion.a
                  href="#"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-xl shadow-lg transition duration-300 text-center text-lg"
                  aria-label="Learn about us"
                >
                  Learn About Us
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Side - Image */}
            <div className="md:w-1/2 absolute top-0 right-0 h-full pr-6">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2 }}
                className="relative w-full h-full rounded-3xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10 rounded-3xl"></div>
                <Image
                  src="https://images.pexels.com/photos/19131215/pexels-photo-19131215/free-photo-of-smiling-doctor-showing-thumb-up.jpeg"
                  alt="Healthcare professional using technology"
                  fill
                  className="object-cover rounded-3xl"
                  priority
                  quality={85}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;