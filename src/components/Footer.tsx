"use client";

import React, { useState } from "react";
import { motion } from "motion/react";

import pattern from "@/assets/pattern.svg";

export default function DesignerFooter() {
  const quirkySayings = [
    "If something isn't centered, please tilt your head to the left.",
    "If you see a pixel out of place, no you didn't",
    "I didn't miss a detail, I just prioritized 'white space'.",
    "Optimized for my laptop specifically; good luck on yours.",
    "This site is best viewed with a cup of coffee in hand.",
    "All designs are 100% organic and gluten-free.",
  ];

  const [saying] = useState(
    quirkySayings[Math.floor(Math.random() * quirkySayings.length)]
  );

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <footer
      className="w-full bg-[#1A2F29] text-accent py-12 px-6"
      style={{ backgroundImage: `url(${pattern.src})` }}
    >
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Quirky Message */}
        <div className="text-center mb-4">
          <p className="text-lg md:text-xl font-light text-accent italic">
            {saying}
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-accent tracking-wider">
            © {new Date().getFullYear()} · Designed with caffeine and
            overthinking
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
