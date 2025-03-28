import React from 'react';
import { motion } from 'framer-motion';

interface CircleAnimation {
  y: number[];
  scale: number[];
  opacity: number[];
  duration: number;
}

const BackgroundElements: React.FC = () => {
  // Define safe animation values
  const circle1Animation: CircleAnimation = {
    y: [0, 20, 0],
    scale: [1, 1.1, 1],
    opacity: [0.3, 0.5, 0.3],
    duration: 8,
  };

  const circle2Animation: CircleAnimation = {
    y: [0, -30, 0],
    scale: [1, 1.2, 1],
    opacity: [0.2, 0.4, 0.2],
    duration: 12,
  };

  const circle3Animation: CircleAnimation = {
    y: [0, 15, 0],
    scale: [1, 1.15, 1],
    opacity: [0.25, 0.45, 0.25],
    duration: 10,
  };

  // Define safe transition values
  const getTransition = (duration: number) => ({
    duration,
    repeat: Infinity,
    repeatType: 'reverse' as const,
    ease: 'easeInOut',
  });

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Floating circles */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-primary/5 dark:bg-primary-dark/5"
        style={{ top: '10%', left: '5%' }}
        animate={{
          y: circle1Animation.y,
          scale: circle1Animation.scale,
          opacity: circle1Animation.opacity,
        }}
        transition={getTransition(circle1Animation.duration)}
      />
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-accent/5 dark:bg-accent-dark/5"
        style={{ top: '60%', right: '10%' }}
        animate={{
          y: circle2Animation.y,
          scale: circle2Animation.scale,
          opacity: circle2Animation.opacity,
        }}
        transition={getTransition(circle2Animation.duration)}
      />
      <motion.div
        className="absolute w-48 h-48 rounded-full bg-secondary/5 dark:bg-secondary-dark/5"
        style={{ bottom: '20%', left: '20%' }}
        animate={{
          y: circle3Animation.y,
          scale: circle3Animation.scale,
          opacity: circle3Animation.opacity,
        }}
        transition={getTransition(circle3Animation.duration)}
      />
    </div>
  );
};

export default BackgroundElements; 