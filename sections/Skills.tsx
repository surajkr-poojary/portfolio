"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaGithub, FaFigma, FaNodeJs 
} from "react-icons/fa";
import { 
  SiNextdotjs, SiTypescript, SiTailwindcss, SiFlutter, SiDart, SiApple, SiPostman, SiVercel, SiSwift
} from "react-icons/si";

const allSkills = [
  { name: "React", icon: <FaReact />, color: "text-blue-400" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "text-white bg-black dark:bg-transparent" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-500" },
  { name: "Flutter", icon: <SiFlutter />, color: "text-blue-400" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-400" },
  { name: "iOS", icon: <SiApple />, color: "text-gray-900 dark:text-gray-100" },
  { name: "Dart", icon: <SiDart />, color: "text-blue-600" },
  { name: "Swift", icon: <SiSwift />, color: "text-orange-500" },
  { name: "Figma", icon: <FaFigma />, color: "text-purple-500" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-gray-50 dark:bg-[#020617] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            Tech <span className="text-blue-600">Arsenal</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Mastering the modern web and mobile primitives to build high-performance digital products.
          </p>
        </motion.div>

        {/* Infinite Marquee */}
        <div className="relative flex overflow-hidden py-6 sm:py-10 -mx-6 sm:mx-0">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
            className="flex whitespace-nowrap gap-8 sm:gap-12"
          >
            {[...allSkills, ...allSkills].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-3 sm:gap-4 px-6 py-3 sm:px-8 sm:py-4 bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm"
              >
                <div className={`text-2xl sm:text-4xl ${skill.color}`}>
                  {skill.icon}
                </div>
                <span className="text-base sm:text-xl font-bold text-gray-800 dark:text-gray-200">
                  {skill.name}
                </span>
              </div>
            ))}
          </motion.div>
          
          <div className="absolute inset-y-0 left-0 w-20 sm:w-40 bg-gradient-to-r from-gray-50 dark:from-[#020617] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 sm:w-40 bg-gradient-to-l from-gray-50 dark:from-[#020617] to-transparent z-10" />
        </div>

        {/* Bento Grid layout for core expertise */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-16 sm:mt-24">
          {[
            {
              title: "Frontend Architecture",
              desc: "Building scalable, performant web applications using React and Next.js at PharmEasy.",
              icon: <SiNextdotjs />,
              color: "from-blue-500 to-cyan-500",
            },
            {
              title: "Cross-platform Mobile",
              desc: "Crafting beautiful mobile experiences for both iOS and Android using Flutter and Dart.",
              icon: <SiFlutter />,
              color: "from-purple-500 to-pink-500",
            },
            {
              title: "Native iOS",
              desc: "Diving deep into native iOS development with Swift and SwiftUI for pixel-perfect apps.",
              icon: <SiApple />,
              color: "from-gray-700 to-gray-900",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`p-6 sm:p-8 rounded-[1.5rem] sm:rounded-3xl bg-gradient-to-br ${item.color} text-white shadow-2xl relative overflow-hidden group ${
                i === 2 ? "sm:col-span-2 md:col-span-1" : ""
              }`}
            >
              <div className="absolute -right-4 -bottom-4 text-white/10 text-7xl sm:text-9xl group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <div className="text-3xl sm:text-4xl mb-4 sm:mb-6 bg-white/20 p-3 sm:p-4 rounded-xl sm:rounded-2xl w-fit">
                {item.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4">{item.title}</h3>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
