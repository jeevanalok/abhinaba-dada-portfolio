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
    subtitle: "Connecting College Students",
    description:
      "A platform that addresses college communication gaps and improves student access to peer and senior guidance, fostering meaningful connections and knowledge sharing across campus communities.",
    image: "/projects/uninet-front.jpg",
    url: "https://www.behance.net/gallery/231095521/UniNet-Connecting-College-Students",
    featured: true,
  },
  {
    id: 3,
    title: "UniNet Research",
    tag: "UX Research",
    subtitle: "College UX: What's Missing?",
    description:
      "A comprehensive UX study examining college students' communication challenges and opportunities to improve campus connections, revealing insights that drive better educational experiences.",
    image: "/projects/uninet-research-front.jpg",
    url: "https://www.behance.net/gallery/229571017/College-UX-Whats-Missing",
    featured: false,
  },
  {
    id: 4,
    title: "Nesties",
    tag: "Social Connection",
    subtitle: "Finding Roommates Who Become Besties",
    description:
      "Nesties connects people relocating to unfamiliar cities with compatible roommates, transforming the daunting process of finding housing into an opportunity to build lasting friendships.",
    image: "/projects/nesties-front.jpg",
    url: "https://www.behance.net/gallery/235078275/Nesties-Finding-Roomates",
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
