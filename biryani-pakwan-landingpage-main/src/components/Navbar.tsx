import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, UtensilsCrossed } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'Menu', to: 'menu' },
  { name: 'Reviews', to: 'reviews' },
  { name: 'Gallery', to: 'gallery' },
  { name: 'Contact', to: 'contact' },
];

export default function Navbar() {
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
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        scrolled ? 'bg-background/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          to="home"
          smooth={true}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="bg-primary p-2 rounded-lg group-hover:rotate-12 transition-transform">
            <UtensilsCrossed className="text-white w-6 h-6" />
          </div>
          <span className="font-display text-xl md:text-2xl font-bold tracking-tight">
            Haroon <span className="text-secondary">Biryani</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              spy={true}
              activeClass="text-secondary font-semibold"
              className="text-gray-300 hover:text-white cursor-pointer transition-colors text-sm uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="contact"
            smooth={true}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 cursor-pointer"
          >
            Order Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-surface border-t border-white/10 p-6 md:hidden flex flex-col gap-6 shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-secondary text-lg font-medium"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="contact"
              smooth={true}
              onClick={() => setIsOpen(false)}
              className="bg-primary text-white text-center py-3 rounded-xl font-bold"
            >
              Order Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
