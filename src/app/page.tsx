// "use client";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ShowReelSection from "@/components/ShowReelSection";
import FeaturedWorks from "@/components/FeaturedWorks";
// import { useState } from "react";
// import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
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
      {/* Background layer */}

      <Navigation />
      <HeroSection />
      <ShowReelSection />
      <FeaturedWorks />
      {/* </motion.div> */}
    </>
  );
}
