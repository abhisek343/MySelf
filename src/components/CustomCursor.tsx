import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Position {
  x: number;
  y: number;
}

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Check if we're in a browser environment
  const isBrowser = typeof window !== 'undefined';

  useEffect(() => {
    setIsMounted(true);

    // Only add event listeners if we're in a browser environment
    if (!isBrowser) return;

    const updatePosition = (e: MouseEvent) => {
      // Ensure we have valid numbers
      const x = typeof e.clientX === 'number' ? e.clientX : 0;
      const y = typeof e.clientY === 'number' ? e.clientY : 0;
      setPosition({ x, y });
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
      if (document.body) {
        document.body.classList.add('custom-cursor-enabled');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      if (document.body) {
        document.body.classList.remove('custom-cursor-enabled');
      }
    };

    // Add event listeners
    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup function
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (document.body) {
        document.body.classList.remove('custom-cursor-enabled');
      }
    };
  }, [isBrowser]);

  // Don't render anything during SSR or if not mounted
  if (!isMounted || !isBrowser) {
    return null;
  }

  // Ensure we have valid numbers for animation
  const safeX = typeof position.x === 'number' ? position.x - 8 : 0;
  const safeY = typeof position.y === 'number' ? position.y - 8 : 0;
  const safeOpacity = isVisible ? 1 : 0;

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 bg-primary dark:bg-primary-light rounded-full pointer-events-none z-50 mix-blend-difference"
      animate={{
        x: safeX,
        y: safeY,
      }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 28,
      }}
      style={{
        opacity: safeOpacity,
      }}
    />
  );
};

export default CustomCursor; 