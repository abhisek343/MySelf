import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <motion.header
      className="bg-gray-800 text-white p-4 sticky top-0 z-10"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Abhisek</div>
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:text-gray-300">Home</a></li>
          <li><a href="#about" className="hover:text-gray-300">About</a></li>
          <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header; 