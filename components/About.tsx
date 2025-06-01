import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';


const AboutUs = () => {
  const text = 'Medirevs is dedicated to transforming healthcare by making it simple, accessible and connected. We bring patients, doctors and pharmacists together through a seamless digital platform convenient appointment booking, telemedicine, and medication services. Our mission is to empower everyone wth the tools to take control of their health, anytime and anywhere.';
  const words = text.split(' ');

  // Animation controls for each word
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  // Word animation variants
  const wordVariants = {
    hidden: { opacity: 0, color: '#00000' }, // Gray color for unfilled words
    visible: (i: number) => ({
      opacity: 1,
      color: '#374151', // Dark gray for filled words
      transition: {
        delay: i * 0.1, // Stagger each word
        duration: 0.3,
      },
    }),
  };

  // Trigger animation when section is in view
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start">
          <p
            ref={ref}
            className="text-3xl md:text-5xl font-semibold leading-relaxed"
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                initial="hidden"
                animate={controls}
                custom={index}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}
          </p>
        </div>
      </div>
        

    </section>
  );
};

export default AboutUs;