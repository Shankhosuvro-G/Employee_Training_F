import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear()} Training Management App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
