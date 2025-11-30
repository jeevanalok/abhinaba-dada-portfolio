"use client";

import { useRef, useEffect, useState } from "react";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { X } from "lucide-react";

// Imports from your Shadcn UI setup
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";

function ShowReelSection({
  setCursorState,
}: {
  setCursorState?: React.Dispatch<
    React.SetStateAction<"default" | "showreel" | "project" | "footer">
  >;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Track the element's scroll progress relative to the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Adjusted scale ranges for mobile vs desktop
  const scaleRange = isMobile ? [0.85, 1.1] : [0.4, 1.5];
  const yRange = isMobile ? [12, 0] : [24, 0];

  const adjustedProgress = useTransform(scrollYProgress, [0, 0.7], [0, 0.6]);
  const rawScale = useTransform(adjustedProgress, [0, 1], scaleRange);
  const scale = useSpring(rawScale, {
    stiffness: isMobile ? 100 : 120,
    damping: isMobile ? 20 : 18,
  });

  const rawY = useTransform(scrollYProgress, [0, 1], yRange);
  const y = useSpring(rawY, {
    stiffness: isMobile ? 100 : 120,
    damping: isMobile ? 20 : 18,
  });

  return (
    <section
      ref={ref}
      className="max-w-7xl mx-auto py-4 my-8 md:px-4 md:py-8 flex items-start justify-center "
      aria-labelledby="showreel-title"
    >
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        {/* Trigger Area */}
        <DialogTrigger asChild>
          <motion.div
            style={{ scale, y }}
            className="mx-5 max-w-7xl aspect-video overflow-hidden rounded-lg md:rounded-xl shadow-xl md:shadow-2xl cursor-pointer group relative"
            onMouseEnter={() => setCursorState && setCursorState("showreel")}
            onMouseLeave={() => setCursorState && setCursorState("default")}
            onClick={() => setIsOpen(true)}
          >
            {/* Preview Video: Muted, Autoplay, Loop - Acts as a moving thumbnail */}
            <video
              src="/showreel.mp4"
              className="object-cover w-full h-full"
              playsInline
              autoPlay
              muted
              loop
            />
            {/* Hover overlay hint */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500" />
          </motion.div>
        </DialogTrigger>

        {/* Full Screen Modal Content */}
        <DialogContent
          // Overriding Shadcn default max-width and styling for full screen
          className="md:!max-w-[90%] md:h-[90%] !max-w-full h-full m-0 p-0 border-none bg-black  flex items-center justify-center focus:outline-none z-[100] rounded-lg md:rounded-xl shadow-xl md:shadow-2xl"
          showCloseButton={false}
        >
          <DialogTitle className="sr-only">Showreel Video Player</DialogTitle>
          <DialogDescription className="sr-only">
            Full screen video player for the showreel
          </DialogDescription>

          {/* Custom Close Button - Top Right */}
          <DialogClose className="absolute right-6 top-6 z-50 p-2 rounded-full bg-black/50 hover:bg-white/20 text-white transition-colors cursor-pointer">
            <X className="w-4 h-4" />
            <span className="sr-only">Close Video</span>
          </DialogClose>

          {/* Main Video Player */}
          {/* We condition on 'isOpen' to ensure video resets/stops when closed */}
          {isOpen && (
            <div className="w-full h-full flex items-center justify-center ">
              <video
                src="/showreel.mp4"
                className="w-full h-full md:object-cover rounded-lg md:rounded-xl shadow-xl md:shadow-2xl"
                playsInline
                autoPlay
                controls
                controlsList="nodownload"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

export default ShowReelSection;
