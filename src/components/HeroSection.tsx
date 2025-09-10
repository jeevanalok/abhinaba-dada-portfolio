import profile from "@/assets/profile.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function HeroSection() {
  const projects = [
    { name: "Bestosys", href: "#bestosys" },
    { name: "UniNet", href: "#uninet" },
    { name: "Gulal Packaging", href: "#gulal" },
    { name: "Other Work", href: "#other" },
  ];
  return (
    <div className="md:flex md:flex-col">
      {/* Left Sidebar - Projects Section */}
      <aside className="fixed left-8 top-1/2 -translate-y-1/2 z-30 block">
        <nav>
          <div>
            <h3 className="text-white md:text-lg text-sm font-medium mb-4 tracking-wide">
              Projects
            </h3>
            <ul className="space-y-4">
              {projects.map((project, index) => (
                <li key={index}>
                  <Button className="block cursor-pointer hover:bg-white text-white hover:text-black px-8 py-2 rounded border border-white/30 hover:border-transparent transition-all duration-300 ease-out sm:text-sm text-xs font-normal text-left">
                    {project.name}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </aside>
      <main className="relative min-h-screen flex flex-col justify-end items-center">
        <div className="flex flex-col md:flex-row items-center md:items-end gap-8 w-full max-w-xl md:w-auto md:max-w-none px-4 pb-8 md:p-0 md:fixed md:bottom-8 md:right-8">
          {/* Profile Card */}
          <div className="flex-shrink-0">
            <div className="w-48 md:w-[25vw] xl:w-[20vw] max-w-xs aspect-[4/5] bg-card rounded-3xl shadow-card overflow-hidden">
              <div className="w-full h-full">
                <Image
                  src={profile}
                  alt="Abhinaba Dash - Interaction Designer portrait"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-shrink-0">
            <div className="w-full md:w-[30vw] max-w-md text-center md:text-left">
              <h1 className="xl:text-5xl md:text-3xl text-2xl font-bold text-[#E6DFA6] mb-2 tracking-tight leading-tight">
                Abhinaba Dash
              </h1>
              <h2 className="xl:text-lg text-base text-white font-semibold mb-4">
                Interaction Designer
              </h2>
              <p className="text-white text-sm leading-relaxed font-normal">
                Hi! I call myself a Rangrez of the modern day, someone who
                colors human decisions through thoughtful design. I explore how
                visuals, structure, and storytelling shape the way we perceive
                and interact.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HeroSection;
