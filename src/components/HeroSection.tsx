import profile from "@/assets/DP.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function HeroSection() {
  const projects = [
    { name: "Bestosys", href: "/projects/bestosys" },
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
            <h3 className="text-white text-sm font-medium mb-6 tracking-wider">
              Projects
            </h3>
            <ul className="space-y-2">
              {projects.map((project, index) => (
                <li key={index}>
                  <Link key={index} href={project.href}>
                    <Button className="block cursor-pointer hover:bg-white text-[#ccc] hover:text-black px-6 py-2 rounded-[8px] border border-white/30 hover:border-transparent transition-all duration-300 ease-out sm:text-base text-sm font-normal text-left leading-[17.6px]">
                      {project.name}
                    </Button>
                  </Link>
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
            <div className="w-48 md:w-[260px] xl:w-[380px] xl:h-[420px] max-w-xs aspect-[4/5] bg-card rounded-2xl shadow-card overflow-hidden">
              <div className="w-full h-full">
                <Image
                  src={profile}
                  alt="Abhinaba Dash - Interaction Designer portrait"
                  className="object-center"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-shrink-0">
            <div className="w-full md:w-[30vw] mb-4 max-w-md text-center md:text-left">
              <h1 className="xl:text-[2.5rem]  md:text-3xl text-2xl  text-[#D2CD99] mb-2 leading-[44px] font-clash">
                Abhinaba Dash
              </h1>
              <h2 className="xl:text-lg text-base -mt-3 text-white font-semibold mb-4 leading-[22px] tracking-wide">
                Interaction Designer
              </h2>
              <p className="text-[#ccc] text-sm leading-[19.6px] font-normal tracking-wide">
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
