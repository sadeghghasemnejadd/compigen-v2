import LinkButton from "@/components/UI/LinkButton";
import React, { useState } from "react";
import ProjectsNav from "./nav";
import ProjectsPic from "./projects-pic";
const Projects = () => {
  const [activeTab, setActiveTab] = useState<"frontend" | "graphic">(
    "frontend"
  );
  return (
    <section className="section__padding projects" id="projects">
      <div className="projects__info">
        <ProjectsNav />
        <ProjectsPic activeTab={activeTab} />
      </div>
      <div className="projects__link">
        {/* <LinkButton color="secondary">Read More</LinkButton> */}
      </div>
    </section>
  );
};

export default Projects;
