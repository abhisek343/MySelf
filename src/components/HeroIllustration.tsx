import React from 'react';
import { motion } from 'framer-motion';

const HeroIllustration: React.FC = () => {
  // Define safe animation variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Define safe transition values
  const containerTransition = { duration: 0.5 };
  const itemTransition = (delay: number) => ({ delay });

  return (
    <div className="relative w-full max-w-md mx-auto mt-12">
      <motion.div
        className="relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={containerTransition}
      >
        {/* Code window frame */}
        <div className="bg-surface dark:bg-surface-dark rounded-lg shadow-xl overflow-hidden">
          {/* Window header */}
          <div className="flex items-center px-4 py-2 bg-neutral dark:bg-neutral-dark border-b border-neutral/10 dark:border-neutral-dark/10">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
          </div>
          
          {/* Code content */}
          <div className="p-6 font-mono text-sm">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={itemTransition(0.2)}
            >
              <span className="text-primary dark:text-primary-light">const</span>{' '}
              <span className="text-accent dark:text-accent-light">developer</span>{' '}
              = {'{'}
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={itemTransition(0.3)}
              className="ml-4"
            >
              <span className="text-secondary dark:text-secondary-light">name</span>:{' '}
              <span className="text-text-main dark:text-text-main-dark">'Abhisek'</span>,
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={itemTransition(0.4)}
              className="ml-4"
            >
              <span className="text-secondary dark:text-secondary-light">role</span>:{' '}
              <span className="text-text-main dark:text-text-main-dark">'Full Stack Developer'</span>,
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={itemTransition(0.5)}
              className="ml-4"
            >
              <span className="text-secondary dark:text-secondary-light">passion</span>:{' '}
              <span className="text-text-main dark:text-text-main-dark">'Creating amazing web experiences'</span>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={itemTransition(0.6)}
            >
              {'}'}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroIllustration; 