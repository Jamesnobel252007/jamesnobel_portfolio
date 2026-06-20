import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-rich-black/80 backdrop-blur-md border-b border-secondary-black py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#home" className="font-heading font-bold text-2xl text-white-text flex items-center gap-2">
              <span className="text-neon-red">S J</span>Nobel<span className="text-neon-red">.</span>
            </a>
          </div>
           
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-text hover:text-neon-red transition-colors duration-300 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="px-5 py-2 rounded-full border border-neon-red text-neon-red hover:bg-neon-red hover:text-white-text transition-all duration-300 text-sm font-medium neon-glow-hover">
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-text hover:text-white-text focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

     {/* Mobile Drawer Overlay Context */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full md:hidden bg-[#0A0A0A]/95 backdrop-blur-lg border-b border-red-950/60 overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
          >
            <div className="px-5 pt-3 pb-8 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-3 py-3 text-xs tracking-widest text-neutral-400 hover:text-white hover:bg-red-950/20 border border-transparent hover:border-red-950/40 rounded transition-all duration-300"
                >
                  <span className="text-red-600 text-[9px] font-sans">{link.index}</span>
                  <span>{link.name}</span>
                </a>
              ))}
             
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
