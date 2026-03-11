"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-black/50 border-t border-gray-200 dark:border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center bg-transparent">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Suraj K. R
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-xs">
              Building modern web and mobile applications with focus on performance and user experience.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href=""
                className="text-gray-400 hover:text-blue-600 transition-colors"
                aria-label="Email"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              &copy; {currentYear} Suraj K. R. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
