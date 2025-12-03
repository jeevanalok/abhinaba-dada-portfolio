"use client";
import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { cancelFrame, frame } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ShowReelSection from "@/components/ShowReelSection";
import FeaturedWorks from "@/components/FeaturedWorks";
import Footer from "@/components/Footer";
import {
  CursorProvider,
  Cursor,
  CursorFollow,
} from "@/components/ui/shadcn-io/animated-cursor";
import { AnimatePresence, motion } from "motion/react";
import { Play } from "lucide-react";

// import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  const lenisRef = useRef<LenisRef>(null);
  const [cursorState, setCursorState] = useState<
    "default" | "showreel" | "project" | "footer"
  >("default");

  const iconVariants = {
    initial: { scale: 0.5, opacity: 0, rotate: -45 },
    animate: { scale: 1, opacity: 1, rotate: 0 },
    exit: { scale: 0.5, opacity: 0, rotate: 45 },
  };

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);
  // const [loading, setLoading] = useState(true);
  return (
    <>
      {/* {loading && (
        <LoadingScreen
          onAnimationComplete={() => {
            setLoading(false);
            console.log("Loading complete");
          }}
        />
      )} */}
      <ReactLenis
        root
        options={{ autoRaf: false, smoothWheel: true }}
        ref={lenisRef}
      />
      <CursorProvider>
        <Cursor className="md:block hidden">
          <AnimatePresence mode="wait">
            {/* Default State: Standard Arrow */}
            {(cursorState === "default" || cursorState === "footer") && (
              <motion.div
                key="default-icon"
                variants={iconVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {/* Using SVG directly if you don't have Lucide */}
                <svg
                  className="size-6 text-accent"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40 40"
                >
                  <path
                    fill="currentColor"
                    d="M1.8 4.4 7 36.2c.3 1.8 2.6 2.3 3.6.8l3.9-5.7c1.7-2.5 4.5-4.1 7.5-4.3l6.9-.5c1.8-.1 2.5-2.4 1.1-3.5L5 2.5c-1.4-1.1-3.5 0-3.3 1.9Z"
                  />
                </svg>
              </motion.div>
            )}

            {cursorState === "showreel" && (
              <motion.div
                key="default-icon"
                variants={iconVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {/* Using SVG directly if you don't have Lucide */}
                <svg
                  className="size-6 text-accent"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40 40"
                >
                  <path
                    fill="currentColor"
                    d="M1.8 4.4 7 36.2c.3 1.8 2.6 2.3 3.6.8l3.9-5.7c1.7-2.5 4.5-4.1 7.5-4.3l6.9-.5c1.8-.1 2.5-2.4 1.1-3.5L5 2.5c-1.4-1.1-3.5 0-3.3 1.9Z"
                  />
                </svg>
              </motion.div>
            )}

            {/* Project State: Hand Icon */}
            {cursorState === "project" && (
              <motion.div
                key="default-icon"
                variants={iconVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {/* Using SVG directly if you don't have Lucide */}
                <svg
                  className="size-6 text-[#1A2F29]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40 40"
                >
                  <path
                    fill="currentColor"
                    d="M1.8 4.4 7 36.2c.3 1.8 2.6 2.3 3.6.8l3.9-5.7c1.7-2.5 4.5-4.1 7.5-4.3l6.9-.5c1.8-.1 2.5-2.4 1.1-3.5L5 2.5c-1.4-1.1-3.5 0-3.3 1.9Z"
                  />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </Cursor>

        <AnimatePresence mode="wait">
          <CursorFollow
            key={"default-cursor-follower"}
            className="md:block hidden"
          >
            {/* STATE: DEFAULT */}
            {cursorState === "default" && (
              <motion.div
                key="default"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                className="bg-accent text-[#1A2F29] px-5 py-2 rounded-lg font-bold tracking-wide text-sm shadow-lg whitespace-nowrap"
              >
                Curious Visitor
              </motion.div>
            )}
          </CursorFollow>
          <CursorFollow
            key={"showreel-cursor-follower"}
            align="top-right"
            sideOffset={5}
            className="md:block hidden"
          >
            {/* STATE: PROJECT (Big Circle) */}
            {cursorState === "showreel" && (
              <motion.div
                key="showreel"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                className="px-3 py-2 text-xs border flex flex-row items-center gap-2 justify-center border-primary/20 text-[#504e3c] leading-none font-bold bg-accent rounded-full tracking-wide"
              >
                <Play />
                <span>Play Video</span>
              </motion.div>
            )}
          </CursorFollow>

          {/* STATE: BUTTON (Inverted colors pill) */}
          <CursorFollow
            key={"project-cursor-follower"}
            className="md:block hidden"
          >
            {cursorState === "project" && (
              <motion.div
                key="project"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                className="bg-white text-[#1A2F29] px-4 py-2 rounded-full text-sm font-bold shadow-[0_0_4px_rgba(26,47,41,0.5)]"
              >
                View Project
              </motion.div>
            )}
          </CursorFollow>
          <CursorFollow
            key={"footer-cursor-follower"}
            className="md:block hidden"
          >
            {cursorState === "footer" && (
              <motion.div
                key="default"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                className="bg-accent text-[#1A2F29] px-5 py-2 rounded-lg font-bold tracking-wide text-sm shadow-lg whitespace-nowrap"
              >
                Future Client? Let&apos;s Connect!
              </motion.div>
            )}
          </CursorFollow>
        </AnimatePresence>

        <Navigation />
        <HeroSection />
        <ShowReelSection setCursorState={setCursorState} />
        <FeaturedWorks setCursorState={setCursorState} />
        <Footer setCursorState={setCursorState} />
      </CursorProvider>
    </>
  );
}
