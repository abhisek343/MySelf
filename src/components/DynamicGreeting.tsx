import React from 'react';
import { motion } from 'framer-motion';

const DynamicGreeting: React.FC = () => {
  const greetingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    transition: { delay: 0.2 }
  };

  return (
    <div className="text-center relative">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary-dark/10 dark:to-accent-dark/10 rounded-3xl blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.h1
        className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4 relative"
        variants={greetingVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.5 }}
      >
        Hello
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl text-text-main dark:text-text-main-dark relative"
        variants={subtitleVariants}
        initial="hidden"
        animate="visible"
      >
        Welcome to my portfolio
      </motion.p>
    </div>
  );
};

export default DynamicGreeting; 