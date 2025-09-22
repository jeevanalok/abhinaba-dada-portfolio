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
    href: "https://www.behance.net/gallery/235110361/Bestosys-Saas-For-Dentists",
    description: "Redesigning the end-to-end healthcare management experience",
    backgroundImage: "/projects/bestosys-bg.jpg",
    displayImage: "/projects/bestosys-front.jpg",
  },
  {
    name: "UniNet",
    href: "https://www.behance.net/gallery/231095521/UniNet-Connecting-College-Students",
    description:
      "Addresses college communication gaps and improves student access to peer and senior guidance.",
    backgroundImage: proj1.src,
    displayImage: proj1Disp.src,
  },
  {
    name: "Uninet Research",
    href: "https://www.behance.net/gallery/229571017/College-UX-Whats-Missing",
    description:
      "A UX study examining college students' communication challenges and opportunities to improve campus connections.",
    backgroundImage: "/projects/uninet-research-bg.jpg",
    displayImage: "/projects/uninet-research-front.jpg",
  },
  {
    name: "Nesties",
    href: "https://www.behance.net/gallery/235078275/Nesties-Finding-Roomates",
    description:
      "Nesties connects people relocating to unfamiliar cities with roommates who could become their besties.",
    backgroundImage: "/projects/nesties-bg.jpg",
    displayImage: "/projects/nesties-front.jpg",
  },
];
