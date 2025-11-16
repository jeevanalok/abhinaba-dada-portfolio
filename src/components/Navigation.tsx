"use client";

import { useEffect, useState } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set threshold - header becomes solid after scrolling 50px
      const scrollThreshold = 50;
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Check initial scroll position
    handleScroll();

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const menuItems = [
    {
      name: "Resume",
      href: "https://drive.google.com/drive/folders/17mwB-J3FojRwZC_vRAg8JYu05PP2MS6g?usp=sharing",
    },
    { name: "Contact Me", href: "mailto:abhinabadash19@gmail.com" },
  ];

  return (
    <>
      {/* Top Bar - Exact positioning */}
      <header
        className={`fixed top-0 left-0 right-0 z-48 px-8 py-4 transition-all duration-300 ease-in-out ${
          isScrolled ? "bg-primary/80 backdrop-blur-xs" : "bg-transparent"
        }`}
      >
        <nav className="flex items-center justify-between max-w-[1920px] mx-auto">
          {/* Center: Logo */}
          <div className="">
            <a href={"/"}>
              <h1 className="text-3xl text-white font-gaj">अभिनव</h1>
            </a>
          </div>

          {/* Right: Menu Items with separator */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href={menuItems[0].href}
              target="_blank"
              className="text-white hover:text-accent hover:underline  px-4 py-2 rounded-lg transition-all duration-300 font-medium"
            >
              {menuItems[0].name}
            </a>

            {/* Vertical separator line */}
            <div className="w-px h-4 bg-white-text/30"></div>

            <a
              href={menuItems[1].href}
              className="text-white hover:text-accent hover:underline  px-4 py-2 rounded-lg transition-all duration-300 font-medium"
            >
              {menuItems[1].name}
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
