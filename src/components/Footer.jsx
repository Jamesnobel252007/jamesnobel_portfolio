import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-text/10 bg-rich-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-gray-text text-sm">
          &copy; {new Date().getFullYear()} James Nobel. All rights reserved.
        </div>
        <div className="flex gap-6 text-sm text-gray-text">
          <a href="#" className="hover:text-neon-red transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-neon-red transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
