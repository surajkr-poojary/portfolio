"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import Link from "next/link";
import { TextReveal, Typewriter } from "@/components/TextAnimations";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#020617]">
        <div className="absolute top-0 left-0 w-full h-full opacity-30 dark:opacity-20 translate-z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-400 blur-[130px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-20%] w-[60%] h-[60%] rounded-full bg-purple-500 blur-[150px] animate-pulse delay-700" />
          <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-pink-400 blur-[120px] animate-pulse delay-1000" />
        </div>
        <div className="absolute inset-0 bg-grid-slate-100/[0.03] dark:bg-grid-white/[0.02] bg-[center_top_-1px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8 relative">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-200 dark:border-blue-900/50 bg-blue-50/50 dark:bg-blue-900/20 backdrop-blur-sm"
          >
            <span className="text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-bold tracking-wider uppercase">
              Building the future, one pixel at a time
            </span>
          </motion.div>

          <div className="flex justify-center mb-6">
            <TextReveal 
              text="Hi, I'm Suraj K. R" 
              className="text-4xl sm:text-6xl md:text-8xl font-black text-gray-900 dark:text-white leading-[1.1] tracking-tight"
            />
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
            <a href="https://github.com/surajkr-poojary" target="_blank" rel="noreferrer" className="p-3 sm:p-4 rounded-2xl bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-all hover:-translate-y-2">
              <FaGithub size={24} />
            </a>
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
