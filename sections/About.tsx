"use client";

import React from "react";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/TextAnimations";

const About = () => {
  const journeys = [
    {
      year: "2023",
      title: "Flutter Mobile App Developer",
      description: "Started career building mobile applications using Flutter and Dart.",
    },
    {
      year: "Transition",
      title: "Web Development",
      description: "Moved into web development using Next.js and React, focusing on scalable platforms.",
    },
    {
      year: "2024 - Present",
      title: "Web Developer — PharmEasy",
      description: "Developing scalable and performant frontend systems for a major health-tech platform.",
    },
    {
      year: "Current",
      title: "iOS & Freelance (Part-time)",
      description: "Contributing to mobile product development and delivering high-quality client solutions.",
    },
  ];

  return (
    <section id="about" className="py-32 bg-white dark:bg-[#020617] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="flex justify-center mb-4">
            <TextReveal text="About Me" className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white" />
          </div>
          <div className="w-20 h-2 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-6 sm:mb-8">
              A <span className="text-blue-600">Visionary</span> Developer based in <span className="text-blue-600">India</span>
            </h3>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-10 leading-relaxed font-medium">
              I specialize in bridging the gap between design and technology. My approach is centered around building deep tech solutions that are as beautiful as they are functional.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10">
              {[
                "Modern Frontend Stacks",
                "Mobile Product Strategy",
                "Scalable System Design",
                "Pixel-Perfect UI/UX",
              ].map((strength, index) => (
                <div key={index} className="flex items-center space-x-4 bg-gray-50 dark:bg-gray-900 p-5 sm:p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm transition-transform hover:scale-105">
                  <div className="w-3 h-3 rounded-full bg-blue-600 shadow-lg shadow-blue-600/50 flex-shrink-0" />
                  <span className="text-gray-800 dark:text-gray-200 font-bold text-sm sm:text-base">{strength}</span>
                </div>
              ))}
            </div>
            <div className="p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-blue-600 text-white shadow-2xl shadow-blue-600/40">
              <p className="text-base sm:text-lg font-bold italic opacity-90">
                &quot;Currently working as a Web Developer at PharmEasy, while contributing to iOS development and Freelance projects on a part-time basis.&quot;
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10 mt-10 lg:mt-0"
          >
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-6">
              Professional Journey
            </h3>
            <div className="space-y-8 relative">
              <div className="absolute left-[23px] sm:left-[27px] top-6 bottom-6 w-0.5 bg-gray-200 dark:bg-gray-800" />
              {journeys.map((item, index) => (
                <motion.div 
                  key={index} 
                  whileHover={{ x: 10 }}
                  className="flex gap-4 sm:gap-8 group"
                >
                  <div className="relative z-10 mt-1 ring-8 ring-white dark:ring-[#020617] bg-white dark:bg-[#020617]">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center font-black text-xs sm:text-base text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs font-black text-blue-600 uppercase tracking-[0.2em]">
                      {item.year}
                    </span>
                    <h4 className="text-lg sm:text-2xl font-black text-gray-900 dark:text-white mt-0.5 sm:mt-1 mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed font-medium max-w-md">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
