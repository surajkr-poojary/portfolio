"use client";
// components/Header.tsx

import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
// import { useState } from "react";
import { HomeContextProvider, useHomeContext } from "./home_context";

const Header = () => {
  const { isDarkTheme, setIsDarkTheme } = useHomeContext();

  // Toggle theme function
  const toggleTheme = () => {
    console.log("Current Theme: ", isDarkTheme); // Debugging current theme
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <header className="w-full px-4 sm:px-6 py-4 sm:py-6 fixed top-0 left-0 right-0 bg-gradient-to-r from-indigo-700 to-purple-600 z-30 shadow-lg backdrop-blur-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto relative z-10">
        {/* Logo or Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-wide transition-colors duration-300">
          Suraj K R
        </h1>

        {/* Navigation Links */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          <nav className="hidden sm:block">
            <ul className="flex space-x-4 sm:space-x-8 md:space-x-14">
              <li>
                <a
                  href="#about"
                  className="text-white hover:text-gray-400 transition-colors text-base sm:text-lg md:text-xl"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-white hover:text-gray-400 transition-colors text-base sm:text-lg md:text-xl"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-white hover:text-gray-400 transition-colors text-base sm:text-lg md:text-xl"
                >
                  Projects
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="sm:hidden">
            {/* You can add a mobile menu icon here for hamburger navigation */}
            <button className="text-white text-2xl">
              {/* Mobile menu icon */}
            </button>
          </div>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1vLm1c5_CJlMst3XyXx6TAE1_nNEqpLyE/view?usp=drive_link" // Google Drive link to your resume
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block text-white bg-blue-500 hover:bg-blue-700 transition-colors rounded-full px-4 py-2 text-sm md:text-base shadow-md transform hover:scale-105 z-20"
            title="View or Download Resume"
          >
            Resume
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="rounded-full p-2 transition-colors duration-300 hover:bg-gray-700 dark:hover:bg-gray-900 z-20"
            title={isDarkTheme ? "Switch to Light Theme" : "Switch to Dark Theme"}
          >
            {isDarkTheme ? (
              <SunIcon className="w-6 h-6 sm:w-8 sm:h-8" /> // SunIcon for Light Theme
            ) : (
              <MoonIcon className="w-6 h-6 sm:w-8 sm:h-8" /> // MoonIcon for Dark Theme
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default function HeaderPage() {
  return (
    <HomeContextProvider>
      <Header />
    </HomeContextProvider>
  );
}
