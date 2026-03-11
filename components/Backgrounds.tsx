"use client";

import React, { useEffect, useState, useMemo } from "react";
import { motion, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";

const Particle = ({ delay }: { delay: number }) => {
  const randomX = useMemo(() => Math.random() * 100, []);
  const randomY = useMemo(() => Math.random() * 100, []);
  const duration = useMemo(() => 15 + Math.random() * 20, []);

  return (
    <motion.div
      initial={{ opacity: 0, left: `${randomX}%`, top: `${randomY}%` }}
      animate={{
        y: [0, -30, 0],
        opacity: [0, 0.2, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
      className="absolute w-1 h-1 bg-blue-400 rounded-full blur-[1px] will-change-transform"
    />
  );
};

export const SpotlightBackground = () => {
  const [mounted, setMounted] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 300 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const background = useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, rgba(59, 130, 246, 0.1), transparent 80%)`;

  useEffect(() => {
    setMounted(true);
    // Detect touch device to disable heavy mouse tracking
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);

    const handleMouseMove = (e: MouseEvent) => {
      if (isTouch) return;
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, isTouch]);

  if (!mounted) return <div className="fixed inset-0 -z-10 bg-white dark:bg-[#020617]" />;

  return (
    <div className="fixed inset-0 -z-10 bg-white dark:bg-[#020617] overflow-hidden pointer-events-none">
      {/* Mesh Gradient Blobs - Static on touch to save GPU */}
      <div className={`absolute inset-0 overflow-hidden ${isTouch ? 'opacity-20' : 'opacity-30'}`}>
        <motion.div
           animate={isTouch ? {} : {
            x: [0, 80, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] rounded-full bg-blue-500/20 blur-[100px] will-change-transform"
        />
        <motion.div
          animate={isTouch ? {} : {
            x: [0, -80, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] w-[80%] h-[80%] rounded-full bg-purple-500/20 blur-[120px] will-change-transform"
        />
      </div>

      {/* Interactive Mouse Spotlight - Disabled on touch */}
      {!isTouch && (
        <motion.div
          className="absolute inset-0 z-10 opacity-30 mix-blend-soft-light will-change-[background]"
          style={{ background }}
        />
      )}
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-slate-900/[0.03] dark:bg-grid-white/[0.01] bg-[size:50px_50px]" />
    </div>
  );
};

export const RevealOnScroll = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
