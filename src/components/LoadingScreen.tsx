"use client";

import { motion } from "motion/react";

interface LoadingScreenProps {
  onAnimationComplete: () => void;
}

const LoadingScreen = ({ onAnimationComplete }: LoadingScreenProps) => {
  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-background">
      {/* Main content positioned below */}

      {/* Loading screen that scales and slides upward */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ scale: 1, y: 0 }}
        animate={{ scale: 20, y: "-100vh" }}
        transition={{
          duration: 1.5,
          delay: 0.8,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
        onAnimationComplete={onAnimationComplete}
        style={{ backgroundColor: "transparent" }}
      >
        <div className="relative flex items-center justify-center w-full h-full">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 400 600"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0"
          >
            <defs>
              <mask id="archMask">
                {/* White fills the entire area */}
                <rect width="400" height="600" fill="white" />
                {/* Black creates the "window" - inner arch cutout */}
                <path
                  d="M200 70 C270 70, 320 120, 320 200 L320 550 L80 550 L80 200 C80 120, 130 70, 200 70 Z"
                  fill="black"
                />
              </mask>
            </defs>

            {/* Background that covers everything except the masked area */}
            <rect
              width="400"
              height="600"
              fill="#E6DFA6"
              mask="url(#archMask)"
            />

            {/* Arch border - outer edge */}
            <path
              d="M200 50 C280 50, 340 110, 340 200 L340 550 L60 550 L60 200 C60 110, 120 50, 200 50 Z"
              fill="none"
              stroke="hsl(var(--arch-border))"
              strokeWidth="3"
            />

            {/* Inner arch border */}
            <path
              d="M200 70 C270 70, 320 120, 320 200 L320 550 L80 550 L80 200 C80 120, 130 70, 200 70 Z"
              fill="none"
              stroke="hsl(var(--arch-bg))"
              strokeWidth="2"
            />
          </svg>

          <motion.div
            className="absolute text-4xl font-bold tracking-widest z-10"
            style={{ color: "hsl(var(--arch-border))" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.2, times: [0, 0.3, 0.6, 1], delay: 0.3 }}
            onAnimationComplete={onAnimationComplete}
          >
            Rangrej <br />
            अभिनव Dash
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
