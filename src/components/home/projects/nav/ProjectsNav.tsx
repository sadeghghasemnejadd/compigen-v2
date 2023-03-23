import React, { useState } from "react";
import IProjectsNavItem from "@/models/ProjectsNav";
const ProjectsNav = () => {
  const [projectNavData, setProjectsNavData] = useState<IProjectsNavItem[]>([
    {
      id: 0,
      title: "Front End Developer",
      active: true,
    },
    // {
    //   id: 1,
    //   title: "Graphic Design",
    //   active: false,
    // },
  ]);
  return (
    <nav className="projects-nav">
      <ul className="projects-nav__list">
        {projectNavData.map((pr) => (
          <li
            key={pr.id}
            className={`projects-nav__list__item ${
              pr.active && "projects-nav__list__item-active"
            }`}
          >
            {pr.title}
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default ProjectsNav;
