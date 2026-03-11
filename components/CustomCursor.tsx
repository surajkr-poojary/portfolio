"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Smooth springs for the outer ring
  const mouseX = useSpring(0, { damping: 20, stiffness: 150 });
  const mouseY = useSpring(0, { damping: 20, stiffness: 150 });

  // Faster springs for the inner dot
  const dotX = useSpring(0, { damping: 30, stiffness: 800 });
  const dotY = useSpring(0, { damping: 30, stiffness: 800 });

  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, [role="button"], .cursor-pointer, input, textarea');
      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleElementHover);

    // Hide default cursor
    document.documentElement.style.cursor = "none";
    const allElements = document.querySelectorAll("*");
    allElements.forEach((el) => {
      if ((el as HTMLElement).style) {
        (el as HTMLElement).style.cursor = "none";
      }
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleElementHover);
      document.documentElement.style.cursor = "auto";
    };
  }, [mouseX, mouseY, dotX, dotY]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block overflow-hidden">
      {/* Dynamic Glow Trail */}
      <motion.div
        className="absolute w-[400px] h-[400px] -ml-[200px] -mt-[200px] rounded-full"
        style={{
          x: mouseX,
          y: mouseY,
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)",
        }}
      />

      {/* Outer Ring */}
      <motion.div
        className="absolute border border-blue-500 rounded-full"
        animate={{
          width: isHovered ? 80 : 40,
          height: isHovered ? 80 : 40,
          opacity: 1,
          scale: isMouseDown ? 0.8 : 1,
        }}
        style={{
          x: mouseX,
          y: mouseY,
          left: -20,
          top: -20,
          transform: "translate(-50%, -50%)", // Keep centered
          marginLeft: isHovered ? -20 : 0, 
          marginTop: isHovered ? -20 : 0,
          backgroundColor: isHovered ? "rgba(59, 130, 246, 0.1)" : "transparent",
        }}
      />

      {/* Inner Dot */}
      <motion.div
        className="absolute w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"
        animate={{
          scale: isHovered ? 0 : isMouseDown ? 1.5 : 1,
        }}
        style={{
          x: dotX,
          y: dotY,
          left: -4,
          top: -4,
        }}
      />

      {/* Interaction Ripple (appears on click) */}
      <motion.div
        className="absolute border-2 border-blue-400 rounded-full"
        initial={{ opacity: 0, scale: 0 }}
        animate={isMouseDown ? { opacity: 0.5, scale: 2 } : { opacity: 0, scale: 0 }}
        style={{
          x: dotX, 
          y: dotY,
          left: -20,
          top: -20,
          width: 40,
          height: 40,
        }}
      />
    </div>
  );
};
