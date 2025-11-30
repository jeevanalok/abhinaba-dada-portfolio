"use client";

import { useRef, useEffect, useState } from "react";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

function ShowReelSection({
  setCursorState,
}: {
  setCursorState?: React.Dispatch<
    React.SetStateAction<"default" | "showreel" | "project" | "footer">
  >;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

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
      <motion.div
        style={{ scale, y }}
        className="mx-5 max-w-7xl aspect-video overflow-hidden rounded-lg md:rounded-xl shadow-xl md:shadow-2xl"
        onMouseEnter={() => setCursorState && setCursorState("showreel")}
        onMouseLeave={() => setCursorState && setCursorState("default")}
      >
        <video
          src="/showreel.mp4"
          className="object-cover"
          playsInline
          autoPlay={true}
          controls={true}
          controlsList={"nodownload noremoteplayback"}
          preload="auto"
          // poster="/showreel-poster.jpg"
        />
      </motion.div>
    </section>
  );
}

export default ShowReelSection;
