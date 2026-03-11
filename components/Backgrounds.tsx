"use client";

import React, { useEffect, useState, useMemo } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const Particle = ({ delay }: { delay: number }) => {
  const randomX = useMemo(() => Math.random() * 100, []);
  const randomY = useMemo(() => Math.random() * 100, []);
  const duration = useMemo(() => 10 + Math.random() * 20, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: `${randomX}%`, y: `${randomY}%` }}
      animate={{
        y: [`${randomY}%`, `${randomY - 10}%`, `${randomY}%`],
        opacity: [0.1, 0.3, 0.1],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
      className="absolute w-1 h-1 bg-blue-400 rounded-full blur-[1px]"
    />
  );
};

export const SpotlightBackground = () => {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const [styleX, setStyleX] = useState(0);
  const [styleY, setStyleY] = useState(0);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const unsubscribeX = springX.on("change", (v) => setStyleX(v));
    const unsubscribeY = springY.on("change", (v) => setStyleY(v));

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      unsubscribeX();
      unsubscribeY();
    };
  }, [mouseX, mouseY, springX, springY]);

  if (!mounted) return <div className="fixed inset-0 -z-10 bg-white dark:bg-[#020617]" />;

  return (
    <div className="fixed inset-0 -z-10 bg-white dark:bg-[#020617] overflow-hidden pointer-events-none">
      {/* Premium Mesh Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden opacity-50 dark:opacity-30">
        <motion.div
          animate={{
            x: [0, 150, 0],
            y: [0, 100, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] rounded-full bg-blue-500/30 dark:bg-blue-600/20 blur-[130px]"
        />
        <motion.div
          animate={{
            x: [0, -180, 0],
            y: [0, -120, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] w-[80%] h-[80%] rounded-full bg-purple-500/30 dark:bg-purple-600/20 blur-[150px]"
        />
        <motion.div
          animate={{
            x: [0, 200, 0],
            y: [0, -150, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -left-[15%] w-[60%] h-[60%] rounded-full bg-cyan-400/20 dark:bg-cyan-500/10 blur-[110px]"
        />
      </div>

      {/* Floating Particles Layer */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <Particle key={i} delay={i * 0.5} />
        ))}
      </div>

      {/* Interactive Mouse Spotlight with dynamic scale */}
      <div
        className="absolute inset-0 z-10 opacity-40 dark:opacity-30 mix-blend-soft-light"
        style={{
          background: `radial-gradient(800px circle at ${styleX}px ${styleY}px, rgba(59, 130, 246, 0.2), transparent 80%)`,
        }}
      />
      
      {/* Grid Pattern with subtle pulse */}
      <motion.div 
        animate={{ opacity: [0.03, 0.05, 0.03] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-white/[0.02] bg-[size:50px_50px]" 
      />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export const RevealOnScroll = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
