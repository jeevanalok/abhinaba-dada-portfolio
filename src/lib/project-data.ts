import proj1 from "@/assets/projects/bestosys.jpg";

export interface Project {
  name: string;
  href: string;
  description: string;
  backgroundImage: string;
}

export const projects: Project[] = [
  {
    name: "Bestosys",
    href: "/projects/bestosys",
    description:
      "A modern ERP solution designed to streamline business operations",
    backgroundImage: proj1.src,
  },
  {
    name: "UniNet",
    href: "/projects/uninet",
    description: "A unified platform for educational institutions",
    backgroundImage: "/projects/uninet-bg.jpg",
  },
  {
    name: "Gulal Packaging",
    href: "#gulal",
    description: "Innovative packaging solutions for modern businesses",
    backgroundImage: "/projects/gulal-bg.jpg",
  },
  {
    name: "Other Work",
    href: "#other",
    description: "Explore more of my creative projects and experiments",
    backgroundImage: "/projects/other-bg.jpg",
  },
];
