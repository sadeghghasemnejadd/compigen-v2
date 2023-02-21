import LinkButton from "@/components/UI/LinkButton";
import React from "react";
import ProjectsNav from "./nav";
const Projects = () => {
  return (
    <section className="section__padding projects">
      <ProjectsNav />
      <div></div>
      <div className="projects__link">
        <LinkButton color="secondary">Read More</LinkButton>
      </div>
    </section>
  );
};

export default Projects;
