import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const title = "Welcome";
  const subtitle = "I'm Abhisek, a Full Stack Developer";
  const description = "Creating beautiful and functional web applications";

  const sentence = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.5, staggerChildren: 0.08 },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="home" className="min-h-[calc(100vh-200px)] pt-16 flex flex-col justify-center items-center text-center">
      <motion.h1
        className="text-5xl font-bold mb-6 text-gray-800"
        variants={sentence}
        initial="hidden"
        animate="visible"
      >
        {title.split("").map((char, index) => (
          <motion.span key={char + "-" + index} variants={letter}>
            {char}
          </motion.span>
        ))}
      </motion.h1>
      
      <motion.h2
        className="text-2xl font-semibold mb-4 text-gray-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        {subtitle}
      </motion.h2>

      <motion.p
        className="text-lg text-gray-500 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        {description}
      </motion.p>

      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.a
          href="#projects"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Home; 