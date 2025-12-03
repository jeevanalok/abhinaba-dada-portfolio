"use client";

import React, { useState } from "react";
import { motion } from "motion/react";

import pattern from "@/assets/pattern.svg";
import { Mail, PhoneCall } from "lucide-react";

export default function DesignerFooter({
  setCursorState,
}: {
  setCursorState?: React.Dispatch<
    React.SetStateAction<"default" | "showreel" | "project" | "footer">
  >;
}) {
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

  return (
    <footer
      // Modified padding for better spacing across mobile (px-4) to desktop (py-16)
      className="w-full bg-[#1A2F29] text-accent py-10 px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: `url(${pattern.src})` }}
      onMouseEnter={() => setCursorState && setCursorState("footer")}
      onMouseLeave={() => setCursorState && setCursorState("default")}
    >
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Quirky Message */}
        {/* Added responsive margin bottom */}
        <div className="text-center mb-2">
          {/* Scaled text size: base for mobile, lg for tablet, xl for desktop */}
          <p className="text-base sm:text-lg md:text-xl font-light text-accent italic leading-relaxed">
            {saying}
          </p>
        </div>
        <div className="flex flex-row justify-center gap-5 text-xs sm:text-sm mb-8 text-accent">
          <a
            href="mailto:abhinabadash19@gmail.com"
            className="text-xs sm:text-sm font-medium tracking-wide underline-offset-4 hover:underline transition-all hover:opacity-80"
          >
            ✉ abhinabadash19@gmail.com
          </a>
          <a
            href="tel:+918917513679"
            className="text-xs sm:text-sm font-medium tracking-wide underline-offset-4 hover:underline transition-all hover:opacity-80"
          >
            ☎ +91 891 751 3679
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center">
          {/* Scaled text size: xs for mobile, sm for larger screens */}
          <p className="text-xs sm:text-sm text-accent tracking-wider">
            © {new Date().getFullYear()} · Designed with caffeine and
            overthinking
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
