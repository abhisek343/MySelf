import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface CursorState {
  isHovering: boolean;
  isClicking: boolean;
}

const CustomCursor: React.FC = () => {
  const [cursorState, setCursorState] = useState<CursorState>({
    isHovering: false,
    isClicking: false,
  });

  // Create motion values for cursor position
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Smooth spring animation for cursor movement
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseDown = () => {
      setCursorState(prev => ({ ...prev, isClicking: true }));
    };

    const handleMouseUp = () => {
      setCursorState(prev => ({ ...prev, isClicking: false }));
    };

    // Add event listeners
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Add hover listeners to interactive elements
    const handleMouseEnter = () => {
      setCursorState(prev => ({ ...prev, isHovering: true }));
    };

    const handleMouseLeave = () => {
      setCursorState(prev => ({ ...prev, isHovering: false }));
    };

    // Add hover listeners to all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, select, input, textarea');
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [cursorX, cursorY]);

  const getScale = () => {
    if (cursorState.isClicking) return 0.8;
    if (cursorState.isHovering) return 1.5;
    return 1;
  };

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-blue-600 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: getScale(),
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* Cursor ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-blue-600 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: getScale(),
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
        }}
      />
    </>
  );
};

export default CustomCursor; 