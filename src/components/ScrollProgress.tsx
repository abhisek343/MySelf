import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false); // Keep this visibility logic if needed
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // This effect controls visibility based on scroll, keep it if needed
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100); 
    };
    window.addEventListener('scroll', handleScroll);
    // Start visible if already scrolled past threshold on mount
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Conditionally render based on isVisible state
  if (!isVisible) return null; 

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary dark:bg-primary-light origin-left z-50"
      // Apply the motion value directly via the style prop
      style={{ scaleX }} 
      // Removed initial, animate, and transition props as they are not needed
      // when style is driven directly by a motion value like the useSpring output.
    />
  );
};

export default ScrollProgress;