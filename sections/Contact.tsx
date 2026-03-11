"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { TextReveal } from "@/components/TextAnimations";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 bg-gray-50 dark:bg-[#020617] relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 rounded-[2rem] sm:rounded-[3rem] shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 sm:p-12 lg:p-20 bg-blue-600 text-white flex flex-col justify-center">
              <TextReveal
                text="Let's build"
                className="text-3xl sm:text-5xl md:text-6xl font-black mb-2"
              />
              <TextReveal
                text="something great."
                className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 sm:mb-8 text-blue-200"
              />

              <p className="text-lg sm:text-xl text-blue-100/80 mb-10 font-medium leading-relaxed max-w-md">
                Currently working as a{" "}
                <strong>Web Developer at PharmEasy</strong> and open to
                high-impact part-time roles.
              </p>

              <div className="mt-8 pt-8 border-t border-white/10 flex gap-4 sm:gap-6">
                <a
                  href="https://github.com/surajkr-poojary"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-blue-600 flex items-center justify-center hover:scale-110 active:scale-90 transition-all shadow-xl"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/suraj-poojary-567426190/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-blue-600 flex items-center justify-center hover:scale-110 active:scale-90 transition-all shadow-xl"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>

            <div className="p-8 sm:p-12 lg:p-20 flex flex-col justify-center bg-gray-50/50 dark:bg-black/50 backdrop-blur-sm">
              <div className="space-y-10 sm:space-y-12">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <a
                    href="tel:+918971728399"
                    className="flex items-center space-x-6 p-6 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all cursor-pointer"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <FaPhoneAlt size={24} />
                    </div>
                    <div>
                      <p className="text-gray-400 dark:text-gray-500 text-[10px] sm:text-xs font-black uppercase tracking-widest mb-1">
                        Direct Call
                      </p>
                      <p className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white whitespace-nowrap">
                        +91 8971728399
                      </p>
                    </div>
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="group"
                >
                  <a
                    href="mailto:surajkrpoojary@gmail.com"
                    className="flex items-center space-x-6 p-6 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all cursor-pointer"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FaEnvelope size={24} />
                    </div>
                    <div>
                      <p className="text-gray-400 dark:text-gray-500 text-[10px] sm:text-xs font-black uppercase tracking-widest mb-1">
                        Email Me
                      </p>
                      <p className="text-lg sm:text-xl font-black text-gray-900 dark:text-white break-all sm:break-normal">
                        surajkrpoojary@gmail.com
                      </p>
                    </div>
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="group"
                >
                  <div className="flex items-center space-x-6 p-6 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-purple-500/10 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FaMapMarkerAlt size={24} />
                    </div>
                    <div>
                      <p className="text-gray-400 dark:text-gray-500 text-[10px] sm:text-xs font-black uppercase tracking-widest mb-1">
                        Current Location
                      </p>
                      <p className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white">
                        Bangalore, India
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
