import proj1 from "@/assets/projects/bestosys_bg.jpg";
import proj1Disp from "@/assets/projects/bestosys_disp.jpg";

export interface Project {
  name: string;
  href: string;
  description: string;
  backgroundImage: string;
  displayImage: string;
}

export const projects: Project[] = [
  {
    name: "Bestosys",
    href: "/projects/bestosys",
    description:
      "A modern ERP solution designed to streamline business operations",
    backgroundImage: proj1.src,
    displayImage: proj1Disp.src,
  },
  {
    name: "UniNet",
    href: "/projects/uninet",
    description: "A unified platform for educational institutions",
    backgroundImage: "/projects/uninet-bg.jpg",
    displayImage: "/projects/uninet-disp.jpg",
  },
  {
    name: "Gulal Packaging",
    href: "#gulal",
    description: "Innovative packaging solutions for modern businesses",
    backgroundImage: "/projects/gulal-bg.jpg",
    displayImage: "/projects/gulal-disp.jpg",
  },
  {
    name: "Other Work",
    href: "#other",
    description: "Explore more of my creative projects and experiments",
    backgroundImage: "/projects/other-bg.jpg",
    displayImage: "/projects/other-disp.jpg",
  },
];
