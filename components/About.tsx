import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const AboutUs = () => {
  const text = 'At Medirevs, we are committed to transforming healthcare delivery in Ghana through innovative software solutions. Our mission is to leverage technology to improve healthcare accessibility, efficiency, and quality for all Ghanaians.Founded by energetic and innovative young professionals with expertise in technology from both home and abroad, MAAS is at the forefront of healthcare innovation. We are a leading healthcare software development company, specialising in the creation of sophisticated Electronic Health Record (EHR) systems and AI-assisted diagnostic tools.';
  const words = text.split(' ');

  // Animation controls for each word
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  // Word animation variants
  const wordVariants = {
    hidden: { opacity: 0, color: '#d1d5db' }, // Gray color for unfilled words
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
            className="text-3xl md:text-5xl font-semibold text-gray-700 leading-relaxed"
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