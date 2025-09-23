const Navigation = () => {
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
      <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
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
    </>
  );
};

export default Navigation;
