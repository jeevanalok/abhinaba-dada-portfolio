"use client";

import profile from "@/assets/DP.jpg";
import Image from "next/image";
import { motion } from "motion/react";

import pattern from "@/assets/pattern.svg";

function HeroSection() {
  const mainContentVariants = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    hidden: { opacity: 0, x: 20, transition: { duration: 0.4 } },
  };

  return (
    // Removed md:flex md:flex-col as we handle layout within the children
    <div
      className="min-h-screen bg-center flex items-center justify-center bg-[#1A2F29]"
      style={{ backgroundImage: `url(${pattern.src})` }}
    >
      <div className="flex flex-col-reverse md:flex-row items-center md:items-end gap-8 w-full max-w-xl md:w-auto md:max-w-none px-4 pb-8 md:p-0 md:absolute md:bottom-8 md:right-8">
        <motion.div className="flex-shrink-0">
          <div className="w-48 md:w-[260px] xl:w-[380px] xl:h-[420px] max-w-xs aspect-[4/5] bg-card rounded-2xl shadow-card overflow-hidden">
            <div className="w-full h-full">
              <Image
                src={profile}
                alt="Abhinaba Dash - Interaction Designer Portrait"
                className="w-full h-full object-cover object-center"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Text Content with AnimatePresence */}
        <div className="flex-shrink-0 relative">
          <motion.div
            key="main-content"
            variants={mainContentVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="max-w-lg"
            transition={{ delay: 1.5 }}
          >
            <h1 className="text-4xl md:text-5xl tracking-wide font-englisch font-bold text-accent mb-2 leading-tight text-center md:text-left">
              Abhinaba Dash
            </h1>
            <h2 className="text-base md:text-lg text-white font-semibold mb-4 text-center md:text-left">
              Interaction Designer
            </h2>
            <p className="text-white text-sm leading-relaxed font-normal text-center md:text-left">
              Hi! I call myself a Rangrez of the modern day, someone who colors
              human decisions through thoughtful design. I explore how visuals,
              structure, and storytelling shape the way we perceive and
              interact.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
