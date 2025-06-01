"use client"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"

const Services = () => {
  const services = [
    {
      title: "For Patients",
      subtitle: "Your health journey, simplified",
      description:
        "Experience healthcare like never before with our patient-centered platform designed to put you in control of your health.",
      features: [
        "Book doctors and pharmacists instantly",
        "Consult online anytime, anywhere",
        "Get your prescriptions filled fast",
        "Access your medical records securely",
      ],
      illustration: "https://images.pexels.com/photos/5355697/pexels-photo-5355697.jpeg",
      buttonText: "Start Your Journey",
      accentColor: "blue",
    },
    {
      title: "For Doctors",
      subtitle: "Practice medicine, we'll handle the rest",
      description:
        "Focus on what matters most - your patients. Our comprehensive platform streamlines your practice management and enhances patient care.",
      features: [
        "Manage appointments with ease",
        "Reach more patients with telemedicine",
        "Securely access patient records",
        "Streamlined billing and documentation",
      ],
      illustration: "https://images.pexels.com/photos/5355851/pexels-photo-5355851.jpeg",
      buttonText: "Join Our Network",
      accentColor: "emerald",
    },
    {
      title: "For Pharmacists",
      subtitle: "Modern pharmacy management",
      description:
        "Transform your pharmacy operations with digital tools that connect you directly with patients and healthcare providers.",
      features: [
        "Receive and manage digital prescriptions",
        "Track orders and inventory effortlessly",
        "Connect directly with patients and doctors",
        "Automated insurance verification",
      ],
      illustration: "https://images.pexels.com/photos/3825457/pexels-photo-3825457.jpeg",
      buttonText: "Modernize Your Pharmacy",
      accentColor: "purple",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  }

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        duration: 1,
      },
    },
  }

  const getAccentColors = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        text: "text-blue-900",
        button: "bg-blue-900 hover:bg-blue-700",
        border: "border-blue-200",
      },
      emerald: {
        bg: "bg-emerald-50",
        text: "text-emerald-600",
        button: "bg-emerald-600 hover:bg-emerald-700",
        border: "border-emerald-200",
      },
      purple: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        button: "bg-purple-600 hover:bg-purple-700",
        border: "border-purple-200",
      },
    }
    return colors[color as keyof typeof colors]
  }

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Healthcare Solutions for
            <span className="text-blue-900"> Everyone</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether you're seeking care, providing treatment, or dispensing medications, our platform is designed to
            simplify and enhance your healthcare experience.
          </p>
        </motion.div>

        {/* Services */}
        <motion.div
          className="space-y-32"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const isEven = index % 2 === 0
            const colors = getAccentColors(service.accentColor)

            return (
              <motion.div key={index} className="relative" variants={itemVariants}>
                <div
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!isEven ? "lg:grid-flow-col-dense" : ""}`}
                >
                  {/* Content */}
                  <div className={`${!isEven ? "lg:col-start-2" : ""} space-y-8`}>
                    <div className="space-y-4">
                      <div
                        className={`inline-flex items-center px-4 py-2 rounded-full ${colors.bg} ${colors.border} border`}
                      >
                        <span className={`text-sm font-semibold ${colors.text}`}>Healthcare Solution</span>
                      </div>

                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{service.title}</h3>

                      <p className={`text-xl font-medium ${colors.text}`}>{service.subtitle}</p>

                      <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>
                    </div>

                    {/* Features */}
                    <div className="space-y-4">
                      {service.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                        >
                          <CheckCircle className={`w-6 h-6 ${colors.text} mt-0.5 flex-shrink-0`} />
                          <span className="text-gray-700 text-lg">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4">
                      <Button
                        size="lg"
                        className={`${colors.button} text-white px-8 py-4 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group`}
                      >
                        {service.buttonText}
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>

                  {/* Image */}
                  <motion.div className={`${!isEven ? "lg:col-start-1" : ""} relative`} variants={imageVariants}>
                    <div className={`relative rounded-2xl overflow-hidden shadow-sm ${colors.bg} p-2`}>
                      <Image
                        src={service.illustration || "/placeholder.svg"}
                        alt={`${service.title} illustration`}
                        width={500}
                        height={400}
                        className="w-full object-cover h-[600px] rounded-xl"
                      />

                      {/* Decorative elements */}
                
                      <div
                        className={`absolute -bottom-4 -left-4 w-16 h-16 ${colors.bg} rounded-full opacity-40`}
                      ></div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
