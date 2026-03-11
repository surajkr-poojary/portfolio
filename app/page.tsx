"use client";

import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
