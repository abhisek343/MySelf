import React from 'react';
import { motion } from 'framer-motion';

const BackgroundElements: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Floating circles */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-primary/5 dark:bg-primary-dark/5"
        style={{ top: '10%', left: '5%' }}
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-accent/5 dark:bg-accent-dark/5"
        style={{ top: '60%', right: '10%' }}
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute w-48 h-48 rounded-full bg-secondary/5 dark:bg-secondary-dark/5"
        style={{ bottom: '20%', left: '20%' }}
        animate={{
          y: [0, 15, 0],
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};

export default BackgroundElements; 