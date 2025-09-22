"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      name: "Resume",
      href: "https://drive.google.com/file/d/19Td9dQnwsZjuHNhvobCKvtzDvcyXpDg-/view?usp=sharing",
    },
    { name: "Contact Me", href: "mailto:abhinabadash19@gmail.com" },
  ];

  return (
    <>
      {/* Top Bar - Exact positioning */}
      <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
        <nav className="flex items-center justify-between max-w-[1920px] mx-auto">
          {/* Left: Hamburger Menu */}
          <Button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-white/80 transition-colors duration-300 lg:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>

          {/* Hamburger for desktop (as specified) */}
          <Link
            href={"https://www.behance.net/abhinabdash1"}
            className="block cursor-pointer"
          >
            <Image
              src={"/icons/behance.svg"}
              alt="Behance"
              width={24}
              height={24}
            />
          </Link>

          {/* Center: Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <a href={"/"}>
              <h1 className="text-3xl text-white font-gaj">अभिनव</h1>
            </a>
          </div>

          {/* Right: Menu Items with separator */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href={menuItems[0].href}
              target="_blank"
              className="text-white hover:bg-secondary hover:underline px-4 py-2 rounded-lg transition-all duration-300 ease-out font-medium"
            >
              {menuItems[0].name}
            </a>

            {/* Vertical separator line */}
            <div className="w-px h-4 bg-white-text/30"></div>

            <a
              href={menuItems[1].href}
              className="text-white hover:bg-secondary hover:underline px-4 py-2 rounded-lg transition-all duration-300 ease-out font-medium"
            >
              {menuItems[1].name}
            </a>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-emerald-bg/95 backdrop-blur-sm">
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-white hover:bg-secondary hover:text-secondary-foreground px-6 py-3 rounded-lg transition-all duration-300 text-xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
