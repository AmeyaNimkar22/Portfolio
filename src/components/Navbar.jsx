import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from '../assets/logo.png';


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out ${
          scrolled ? "py-3 md:py-4" : "py-6 md:py-8"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div 
            className={`relative flex items-center justify-between h-16 px-6 md:px-10 transition-all duration-500 border border-white/10 shadow-2xl rounded-full backdrop-blur-xl ${
              scrolled ? "bg-black/60 border-purple-500/20" : "bg-white/5"
            }`}
          >
            
            {/* BRAND LOGO */}
            <Link to="/" className="flex items-center group">
              <img 
                src={logo} 
                alt="BrightCode Studio" 
                className="h-7 md:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
              />
              
            </Link>

            {/* DESKTOP NAV */}
            <ul className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <HashLink
                    smooth
                    to={link.href}
                    className="text-[11px] font-bold text-gray-400 hover:text-white transition-all duration-300 relative uppercase tracking-[0.2em] group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-fuchsia-500 transition-all duration-300 group-hover:w-full" />
                  </HashLink>
                </li>
              ))}
            </ul>

            {/* DESKTOP CTA */}
            <div className="hidden md:block">
              <a
                href="https://drive.google.com/file/d/1LIOmARUKjVqBCuUPUCKJv42io7A8o6aC/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-white text-black text-[11px] font-bold rounded-full transition-all hover:bg-purple-500 hover:text-white active:scale-95 uppercase tracking-widest"
              >
                View Resume
              </a>

            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full bg-white/5 border border-white/10"
              aria-label="Toggle Menu"
            >
              <div className="w-5 h-4 relative flex flex-col justify-between">
                <span className={`w-full h-[2px] bg-white transition-all duration-300 origin-center ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                <span className={`w-full h-[2px] bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
                <span className={`w-full h-[2px] bg-white transition-all duration-300 origin-center ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE OVERLAY MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[95] md:hidden bg-[#050505] flex flex-col items-center justify-center"
          >
            {/* Background Decorative Element */}
            <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-purple-600/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-fuchsia-600/10 rounded-full blur-[100px]" />
            
            <ul className="relative z-10 flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <HashLink
                    smooth
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-5xl font-bold text-white hover:text-purple-500 transition-colors uppercase tracking-tighter"
                  >
                    {link.name}
                  </HashLink>
                </motion.li>
              ))}
              
              <motion.li
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-8"
              >
                <a
                  href="https://drive.google.com/file/d/1LIOmARUKjVqBCuUPUCKJv42io7A8o6aC/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="px-8 py-3 bg-white text-black text-sm font-bold rounded-full transition-all hover:bg-purple-500 hover:text-white active:scale-95 uppercase tracking-widest"
                >
                  View Resume
                </a>
              </motion.li>

            </ul>
            
            
          </motion.div>
          
        )}
      </AnimatePresence>
    </>
  );
}