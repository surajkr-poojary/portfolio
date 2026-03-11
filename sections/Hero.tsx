"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaFileDownload } from "react-icons/fa";
import Link from "next/link";
import { TextReveal, Typewriter } from "@/components/TextAnimations";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-20"
    >


      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8 relative">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-200 dark:border-blue-900/50 bg-blue-50/50 dark:bg-blue-900/20 md:backdrop-blur-sm"
          >
            <span className="text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-bold tracking-wider uppercase">
              Building the future, one pixel at a time
            </span>
          </motion.div>

          <div className="flex justify-center mb-6">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black leading-[1.1] tracking-tight bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 dark:from-white dark:via-blue-400 dark:to-white bg-clip-text text-transparent">
              Hi, I&apos;m Suraj K R
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-xl sm:text-2xl md:text-4xl font-medium text-gray-700 dark:text-gray-300 mb-8 sm:mb-10 flex flex-col md:flex-row items-center justify-center gap-x-3 gap-y-2"
          >
            <span>Expert in</span>
            <Typewriter />
            <span>Development</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed font-light px-4"
          >
            Web Developer at <span className="text-gray-900 dark:text-white font-semibold">PharmEasy</span>. 
            Blending high-performance architecture with stunning UI for web and mobile.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4"
          >
            <a href="#projects" className="w-full sm:w-auto">
              <span className="block text-center px-10 py-5 bg-blue-600 text-white rounded-2xl font-black shadow-2xl shadow-blue-600/40 hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all cursor-pointer text-sm sm:text-base">
                MY PROJECTS
              </span>
            </a>
            <a href="#contact" className="w-full sm:w-auto">
              <span className="block text-center px-10 py-5 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-2xl font-black border-2 border-gray-100 dark:border-gray-800 shadow-xl hover:bg-gray-50 dark:hover:bg-gray-800 hover:scale-105 active:scale-95 transition-all cursor-pointer text-sm sm:text-base">
               CONTACT
              </span>
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-12 sm:mt-16 flex items-center justify-center gap-6 sm:gap-8"
          >

            <a href="https://www.linkedin.com/in/suraj-poojary-567426190/" target="_blank" rel="noreferrer" className="p-3 sm:p-4 rounded-2xl bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-all hover:-translate-y-2">
              <FaLinkedin size={24} />
            </a>
            <a href="https://drive.google.com/file/d/1syudLzkcYdutUzAqll8lE7Qzhsec6jYc/view?usp=sharing" target="_blank" className="p-3 sm:p-4 rounded-2xl bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-all hover:-translate-y-2">
              <FaFileDownload size={24} />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <div className="w-6 h-12 rounded-full border-2 border-gray-300 dark:border-gray-700 p-1 flex justify-center">
          <div className="w-1 h-3 bg-blue-600 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
