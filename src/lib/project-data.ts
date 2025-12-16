export interface Project {
  id: number;
  title: string;
  tag: string;
  subtitle: string;
  description: string;
  image: string;
  featured: boolean;
  url: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Bestosys",
    tag: "Healthcare SaaS",
    subtitle: "Redesigning the end-to-end healthcare management experience",
    description:
      "A comprehensive SaaS platform designed for dentists, transforming how dental practices manage their operations, patient interactions, and clinical workflows through intuitive design and streamlined experiences.",
    image: "/projects/bestosys-front.jpg",
    url: "https://www.behance.net/gallery/235110361/Bestosys-Saas-For-Dentists",
    featured: true,
  },
  {
    id: 2,
    title: "UniNet",
    tag: "Social Platform",
    subtitle: "The Campus Social Hub",
    description:
      "Connecting students for better guidance,networking, and community building on campus.",
    image: "/projects/uninet-front.jpg",
    url: "https://www.behance.net/gallery/231095521/UniNet-Connecting-College-Students",
    featured: true,
  },
  {
    id: 3,
    title: "UniNet Research",
    tag: "UX Research",
    subtitle: "Research Case Study",
    description:
      "Analyzing student communication barriers to identify opportunities for better campus connectivity",
    image: "/projects/uninet-research-front.jpg",
    url: "https://www.behance.net/gallery/229571017/College-UX-Whats-Missing",
    featured: false,
  },
  {
    id: 4,
    title: "Print &  Pixel",
    tag: "Branding",
    subtitle: "Visual & Brand Design",
    description:
      "A versatile collection of high-impact visuals, spanning branding, social media creatives, and print-ready marketing assets.",
    image: "/projects/print-and-pixel.jpg",
    url: "https://www.behance.net/gallery/228521147/Print-Pixel-Graphic-Design",
    featured: false,
  },
  // {
  //   id: 5,
  //   title: "Other Works",
  //   tag: "Portfolio Collection",
  //   subtitle: "Hungry for more? Click to go down the rabbit hole.",
  //   description:
  //     "An exploration of additional projects and design experiments that showcase diverse creative approaches, problem-solving methodologies, and design thinking across various domains.",
  //   image: "/projects/other-work-front.jpg",
  //   url: "https://www.behance.net/abhinabdash1",
  //   featured: false,
  // },
];
