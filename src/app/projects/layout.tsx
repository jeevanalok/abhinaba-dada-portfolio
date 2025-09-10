import Navigation from "@/components/Navigation";
import React, { ReactNode } from "react";

interface ProjectsLayoutProps {
  children: ReactNode;
}

const ProjectsLayout: React.FC<ProjectsLayoutProps> = ({ children }) => {
  return (
    <main style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <Navigation />
      <section>{children}</section>
    </main>
  );
};

export default ProjectsLayout;
