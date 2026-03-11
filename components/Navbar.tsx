"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

import { useActiveSection } from "@/hooks/use-active-section";

const navLinks = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Contact", href: "#contact", id: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-black/95 md:backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer"
            >
              Suraj K R
            </motion.div>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href}>
                <span className={`font-medium transition-all duration-300 cursor-pointer relative group ${
                  activeSection === link.id 
                    ? "text-blue-600 dark:text-blue-400" 
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600"
                }`}>
                  {link.name}
                  {activeSection === link.id && (
                    <motion.div 
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400"
                    />
                  )}
                </span>
              </a>
            ))}
            
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300"
            >
              {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 shadow-xl"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href}>
                  <span
                    onClick={() => setIsOpen(false)}
                    className={`font-medium text-lg block transition-colors ${
                      activeSection === link.id 
                        ? "text-blue-600 dark:text-blue-400" 
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {link.name}
                  </span>
                </a>
              ))}
              <div className="flex space-x-4 pt-4 border-t border-gray-100 dark:border-gray-900">

                <a href="https://www.linkedin.com/in/suraj-poojary-567426190/" target="_blank" rel="noreferrer">
                  <FaLinkedin size={24} className="text-gray-600 dark:text-gray-400" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
