"use client";
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

import { projects } from "@/lib/project-data";
import Image from "next/image";

function FeaturedWorks({
  setCursorState,
}: {
  setCursorState?: React.Dispatch<
    React.SetStateAction<"default" | "showreel" | "project" | "footer">
  >;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  } as const;

  const handleProjectClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl mb-12 font-englisch tracking-wide text-primary"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.9 }}
        >
          Featured Work
        </motion.h1>

        {/* <-- use ref + inView to control when animations start */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {/* Featured Project */}
          <motion.div
            variants={itemVariants}
            onClick={() => handleProjectClick(projects[0].url)}
            onMouseEnter={() => setCursorState && setCursorState("project")}
            onMouseLeave={() => setCursorState && setCursorState("default")}
            className="bg-white rounded-lg md:rounded-xl overflow-hidden shadow-sm border border-primary/20 hover:cursor-pointer"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Added explicit height for mobile so image doesn't collapse */}
              <div className="overflow-hidden relative h-64 sm:h-80 md:h-auto">
                <Image
                  src={projects[0].image}
                  alt={projects[0].title}
                  fill
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-end gap-3 md:mb-3 my-1 justify-between">
                  <h2 className="text-3xl font-englisch tracking-wider text-black font-semibold">
                    {projects[0].title}
                  </h2>
                  <span className="px-3 py-2 text-xs border border-primary/20 text-[#504e3c] leading-none font-bold bg-accent/30 rounded-full tracking-wide">
                    {projects[0].tag}
                  </span>
                </div>
                <h3 className="md:text-lg text-base font-medium md:text-neutral-800 text-neutral-600 mb-5 leading-tight">
                  {projects[0].subtitle}
                </h3>
                <p className="text-neutral-700 leading-relaxed xl:block hidden tracking-wider ">
                  {projects[0].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Grid Projects */}
          {/* Changed grid cols to handle tablet (sm) better before hitting desktop (lg) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(1).map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                onClick={() => handleProjectClick(project.url)}
                onMouseEnter={() => setCursorState && setCursorState("project")}
                onMouseLeave={() => setCursorState && setCursorState("default")}
                className="bg-white border border-primary/20 rounded-lg md:rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 hover:cursor-pointer"
              >
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-end justify-between gap-2 md:mb-1 my-1">
                    <h3 className="text-2xl lg:text-3xl font-englisch tracking-wider text-black font-semibold ">
                      {project.title}
                    </h3>
                    <span className="px-3 py-2 text-xs border border-primary/20 text-[#504e3c] leading-none font-bold bg-accent/30 rounded-full tracking-wide">
                      {project.tag}
                    </span>
                  </div>
                  <h4 className="md:text-sm text-base font-medium md:text-neutral-800 text-neutral-600 mb-3 leading-tight">
                    {project.subtitle}
                  </h4>
                  <p className="text-sm text-neutral-700 leading-relaxed xl:block hidden tracking-wider">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Explore All Button */}
          <motion.a
            href="https://www.behance.net/abhinabdash1"
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            className="text-center pt-8 flex flex-row justify-center gap-2 hover:gap-3 transition-all duration-300 font-bold text-primary "
          >
            <p>{"{"}</p>
            <p>EXPLORE ALL PROJECTS</p>
            <p>{"}"}</p>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

export default FeaturedWorks;
