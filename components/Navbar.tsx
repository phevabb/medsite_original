"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const lineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "8rem",
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  }

  const buttonVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6 },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3 },
    },
  }

  const mobileMenuVariants = {
    closed: { opacity: 0, y: -20, height: 0, display: "none" },
    open: {
      opacity: 1,
      y: 0,
      height: "auto",
      display: "flex",
      transition: { duration: 0.5 },
    },
  }

  return (
    <header className="relative min-h-screen flex flex-col pb-6">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className={`py-4 fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-lg shadow-lg" : "bg-transparent backdrop-blur-lg"
        }`}
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
              <Image
                src="https://utfs.io/f/eqXEbyZmWEZ5lOjgSBG2gjEUo09J4XZinGKBQauTkAFfvIHp"
                alt="logo"
                width={140}
                height={140}
              />
            </motion.div>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-800 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="#services" className="text-gray-800 hover:text-blue-600 transition-colors">
                Services
              </Link>
              <Link href="#contact" className="text-gray-800 hover:text-blue-600 transition-colors">
                Contact
              </Link>
              <Link href="#product" className="text-gray-800 hover:text-blue-600 transition-colors">
                Product
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="focus:outline-none text-blue-900"
                aria-label="Toggle mobile menu"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
                    d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </motion.button>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <motion.a
                href="#contact"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                className="bg-blue-900 text-white px-4 py-2 rounded-lg transition duration-300 shadow-sm hover:bg-blue-700"
                aria-label="Contact us"
              >
                Contact Us
              </motion.a>
            </div>
          </div>

          {/* Mobile Menu */}
          <motion.div
            className="md:hidden flex flex-col space-y-4 mt-4 pb-4"
            initial="closed"
            animate={mobileMenuOpen ? "open" : "closed"}
            variants={mobileMenuVariants}
          >
            <Link href="/" className="text-gray-800 hover:text-blue-600 transition-colors py-2">
              Home
            </Link>
            <Link href="#services" className="text-gray-800 hover:text-blue-600 transition-colors py-2">
              Services
            </Link>
            <Link href="#contact" className="text-gray-800 hover:text-blue-600 transition-colors py-2">
              Contact
            </Link>
            <Link href="#product" className="text-gray-800 hover:text-blue-600 transition-colors py-2">
              Product
            </Link>
            <motion.a
              href="#contact"
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              variants={buttonVariants}
              className="bg-[#65558F] text-white px-4 py-2 rounded-lg transition duration-300 shadow-sm hover:bg-blue-700 text-center"
              aria-label="Contact us"
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-20 flex-1 flex items-center pt-32 md:pt-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left Side - Hero Content */}
            <motion.div
              className="w-full md:w-1/2 text-left md:pr-8 mb-12 md:mb-0"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.h2
                variants={itemVariants}
                className="text-4xl sm:text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight"
              >
                Revolutionizing Healthcare one Innovation at a time
              </motion.h2>

              <motion.div variants={lineVariants} className="h-1 bg-emerald-400 mb-8"></motion.div>

              <motion.p variants={itemVariants} className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
                At Medirevs, we connect and empower the key players in healthcare with tailored digital solutions.
              </motion.p>

              <motion.div variants={containerVariants} className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="#"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-8 py-4 rounded-xl shadow-lg transition duration-300 text-center text-lg"
                  aria-label="Explore our solutions"
                >
                  Explore Our Solutions
                </motion.a>

                <motion.a
                  href="#"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-900 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-xl shadow-lg transition duration-300 text-center text-lg"
                  aria-label="Learn about us"
                >
                  Learn About Us
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
            >
              <div className="relative w-full pt-[75%] md:pt-[100%] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/19957212/pexels-photo-19957212/free-photo-of-smiling-black-doctor-talking-on-video-call-on-cellphone.jpeg"
                  alt="Healthcare professional using technology"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                  quality={85}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
