"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Web Developer",
    company: "PharmEasy",
    period: "2024 - Present",
    description: "Developing web features and building scalable frontend systems using modern technologies like Next.js and React.",
    achievements: [
      "Building scalable and performant frontend systems",
      "Implementing responsive and optimized UI components",
      "Collaborating on modern frontend architecture",
    ],
  },
  {
    role: "iOS Developer (Part-time)",
    company: "Mobile Product Development",
    period: "Present",
    description: "Developing iOS features and contributing to mobile product development.",
    achievements: [
      "Contributing to mobile product development",
      "Collaborating with remote teams",
      "Implementing iOS specific features using SwiftUI",
    ],
  },
  {
    role: "Freelance Developer (Part-time)",
    company: "Various Clients",
    period: "Present",
    description: "Providing custom web and mobile solutions for diverse client projects.",
    achievements: [
      "Building tailored web applications",
      "Consulting on mobile app architecture",
      "Delivering high-quality software for startups",
    ],
  },
  {
    role: "Flutter Developer",
    company: "First Company",
    period: "2023",
    description: "Developed cross-platform mobile applications and integrated APIs.",
    achievements: [
      "Developed cross-platform mobile applications using Flutter",
      "Built UI components and integrated APIs",
      "Worked on performance optimization",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Vertical line - adjusts position based on screen size */}
          <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-200 dark:bg-gray-800" />

          <div className="space-y-12 sm:space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot on the timeline */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 z-10 border-4 border-white dark:border-[#020617] shadow-sm" />

                <div className="w-full md:w-5/12 pl-16 md:pl-0">
                  <div className={`p-6 sm:p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 hover:border-blue-500/30 transition-all ${
                    index % 2 === 0 ? "md:ml-4" : "md:mr-4"
                  }`}>
                    <span className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-wider block mb-2">
                      {exp.period}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {exp.role}
                    </h3>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-400 mb-4">
                      {exp.company}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 italic leading-relaxed">
                      {exp.description}
                    </p>
                    <ul className="space-y-2 sm:space-y-3">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="flex items-start space-x-3 text-gray-700 dark:text-gray-300">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                          <span className="text-xs sm:text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Empty spacer for desktop */}
                <div className="hidden md:block md:w-2/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
