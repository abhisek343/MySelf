import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-700 text-white text-center p-4 mt-8">
      <p>&copy; {currentYear} Abhisek. All rights reserved.</p>
      {/* Optional: Add links to social media */}
    </footer>
  );
};

export default Footer; 