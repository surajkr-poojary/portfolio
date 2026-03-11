"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "E-commerce Web Application",
    description: "A full-featured e-commerce platform with cart, checkout, and product management.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    category: "Web",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1200",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: 2,
    title: "Flutter Mobile Application",
    description: "Cross-platform mobile app for real-time task management and collaboration.",
    tech: ["Flutter", "Dart", "Firebase"],
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: 3,
    title: "Desktop GUI Data Transfer",
    description: "High-performance desktop application for device data synchronization via serial ports.",
    tech: ["Electron", "React", "Node.js", "Plotly.js"],
    category: "Desktop",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: 4,
    title: "iOS Application Demo",
    description: "A sleek iOS application built for native performance and Apple design standards.",
    tech: ["SwiftUI", "Combine", "Swift"],
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?auto=format&fit=crop&q=80&w=1200",
    github: "https://github.com",
    live: "https://example.com",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Web", "Mobile", "Desktop"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-8 sm:mb-10" />
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-6 sm:mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-semibold transition-all ${
                  filter === cat
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                    : "bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                 <motion.div
                  whileHover={{ y: -10, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="bg-white dark:bg-gray-900 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 h-full group flex flex-col"
                >
                <div className="relative h-56 sm:h-72 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6 sm:p-10 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 sm:px-4 py-1 sm:py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] sm:text-xs font-black rounded-full uppercase tracking-widest border border-blue-100 dark:border-blue-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-3 sm:mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 leading-relaxed font-medium">
                    {project.description}
                  </p>

                </div>
              </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
