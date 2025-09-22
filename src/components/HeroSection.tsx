"use client";

import profile from "@/assets/DP.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react"; // Changed to framer-motion for compatibility
import { useState } from "react";
import { projects } from "@/lib/project-data";

import pattern from "@/assets/pattern.svg";

function HeroSection() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const mainContentVariants = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    hidden: { opacity: 0, x: 20, transition: { duration: 0.4 } },
  };

  const projectContentVariants = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    hidden: { opacity: 0, x: -20, transition: { duration: 0.4 } },
  };

  const projectDisplayImageContentVariants = {
    visible: {
      width: "100%",
      transition: {
        duration: 1,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
    hidden: {
      width: "0%",
    },
  } as const;

  return (
    // Removed md:flex md:flex-col as we handle layout within the children
    <div>
      {/* Background Image - No changes needed, 'fixed' is inherently responsive */}
      <motion.div
        className="fixed inset-0 z-0 bg-[#1A2F29]"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      >
        {/* Default pattern background */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${pattern.src})`,
          }}
          initial={{ opacity: 1 }}
          animate={{ opacity: hoveredProject ? 0 : 1 }}
          transition={{ duration: 0.75 }}
        />

        {/* Project backgrounds */}
        {projects.map((project) => (
          <motion.div
            key={project.name}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: project.backgroundImage
                ? `url(${project.backgroundImage})`
                : `url(${pattern.src})`,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: hoveredProject === project.name ? 0.6 : 0,
            }}
            transition={{ duration: 0.75 }}
          />
        ))}
      </motion.div>

      {/* CHANGE 1: Left Sidebar - Projects Section
        - On mobile (default), it's a relative block with vertical padding.
        - On desktop (md:), it becomes 'fixed' to the left side as before.
      */}
      <aside className="relative w-full pt-20 pb-10 md:fixed md:left-8 md:top-1/2 md:-translate-y-1/2 md:w-auto md:p-0 z-30">
        {/* CHANGE 2: Centering Nav content on mobile
          - On mobile, content is centered using flexbox.
          - On desktop, it aligns to the start (left) as before.
        */}
        <nav className="flex flex-col items-start md:p-0 px-5">
          <div>
            <h3 className="text-white text-sm font-medium mb-6 tracking-wider">
              Projects
            </h3>
            <ul className="space-y-2">
              {projects.map((project) => (
                <li key={project.name}>
                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.div
                      onHoverStart={() => setHoveredProject(project.name)}
                      onHoverEnd={() => setHoveredProject(null)}
                      className="w-fit"
                    >
                      <Button className="block cursor-pointer hover:bg-white text-[#ccc] hover:text-black px-6 py-2 rounded-[8px] border border-white/30 hover:border-transparent transition-all duration-300 ease-out sm:text-base text-sm font-normal text-left leading-[17.6px]">
                        {project.name}
                      </Button>
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </aside>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-end gap-8 w-full max-w-xl md:w-auto md:max-w-none px-4 pb-8 md:p-0 md:fixed md:bottom-8 md:right-8">
          {/* Text Content with AnimatePresence */}
          <div className="flex-shrink-0 relative">
            <AnimatePresence mode="wait">
              {!hoveredProject ? (
                <motion.div
                  key="main-content"
                  variants={mainContentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="max-w-lg"
                >
                  <h1 className="text-4xl md:text-5xl font-bold text-[#E6DFA6] mb-2 tracking-tight leading-tight text-center md:text-right">
                    Abhinaba Dash
                  </h1>
                  <h2 className="text-base md:text-lg text-white font-semibold mb-4 text-center md:text-right">
                    Interaction Designer
                  </h2>
                  <p className="text-white text-sm leading-relaxed font-normal text-center md:text-right">
                    Hi! I call myself a Rangrez of the modern day, someone who
                    colors human decisions through thoughtful design. I explore
                    how visuals, structure, and storytelling shape the way we
                    perceive and interact.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="project-content"
                  variants={projectContentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="max-w-lg"
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-[#E6DFA6] mb-2 tracking-tight leading-tight text-center md:text-right">
                    {projects.find((p) => p.name === hoveredProject)?.name}
                  </h2>
                  <p className="text-white text-sm leading-relaxed font-normal text-center md:text-right max-w-sm mx-auto md:mx-0">
                    {
                      projects.find((p) => p.name === hoveredProject)
                        ?.description
                    }
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Image/Project Display with AnimatePresence */}
          <AnimatePresence mode="wait">
            {!hoveredProject ? (
              <motion.div className="flex-shrink-0">
                <div className="w-48 md:w-[260px] xl:w-[380px] xl:h-[420px] max-w-xs aspect-[4/5] bg-card rounded-2xl shadow-card overflow-hidden">
                  <div className="w-full h-full">
                    <Image
                      src={profile}
                      alt="Abhinaba Dash - Interaction Designer portrait"
                      className="w-full h-full object-cover object-center"
                      priority
                    />
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="project-content-image" // A more distinct key
                variants={projectDisplayImageContentVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="max-w-lg overflow-hidden"
                style={{ height: "360px" }}
              >
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src={
                      projects.find((p) => p.name === hoveredProject)
                        ?.displayImage || ""
                    }
                    alt={`${
                      projects.find((p) => p.name === hoveredProject)?.name
                    } project display`}
                    width={640}
                    height={360}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

export default HeroSection;
