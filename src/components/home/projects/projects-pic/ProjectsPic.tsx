import MainHeading from "@/components/UI/MainHeading";
import React, { useEffect, useState } from "react";
import Image from "next/legacy/image";
import IProjectsPicData from "@/models/ProjectsPic";
import naturePic from "@/images/projects/p-first.png";
import compigenPic from "@/images/projects/p-second.png";
import p724Pic from "@/images/projects/p-third.png";
import bamboPic from "@/images/projects/p-forth.png";
import htmlPic from "@/images/logos/html.png";
import cssPic from "@/images/logos/css.png";
import sassPic from "@/images/logos/sass.png";
import reactPic from "@/images/logos/react.png";
import javascriptPic from "@/images/logos/javascript.png";
import typescriptPic from "@/images/logos/typescript.png";
import nextPic from "@/images/logos/next.png";
interface IprojectPicProps {
  activeTab: "frontend" | "graphic";
}
const ProjectsPic = ({ activeTab }: IprojectPicProps) => {
  const [current, setCurrent] = useState(0);

  const projectPicData: IProjectsPicData = {
    frontend: [
      {
        id: 0,
        img: naturePic,
        logos: [
          { id: 0, img: htmlPic, alt: "html logo" },
          { id: 1, img: cssPic, alt: "css logo" },
          { id: 2, img: sassPic, alt: "sass logo" },
        ],
        title: "Nature",
      },
      {
        id: 1,
        img: compigenPic,
        logos: [
          { id: 0, img: htmlPic, alt: "html logo" },
          { id: 1, img: sassPic, alt: "sass logo" },
          { id: 2, img: reactPic, alt: "react logo" },
          { id: 3, img: nextPic, alt: "next logo" },
          { id: 4, img: javascriptPic, alt: "javascript logo" },
          { id: 5, img: typescriptPic, alt: "typescript logo" },
        ],
        title: "Compigen",
      },
      {
        id: 2,
        img: p724Pic,
        logos: [
          { id: 0, img: htmlPic, alt: "html logo" },
          { id: 1, img: cssPic, alt: "css logo" },
          { id: 2, img: sassPic, alt: "sass logo" },
          { id: 3, img: reactPic, alt: "react logo" },
          { id: 4, img: javascriptPic, alt: "javascript logo" },
          { id: 5, img: typescriptPic, alt: "tpescript logo" },
        ],
        title: "pardakht724",
      },
      {
        id: 3,
        img: bamboPic,
        logos: [
          { id: 0, img: htmlPic, alt: "html logo" },
          { id: 1, img: cssPic, alt: "css logo" },
          { id: 2, img: sassPic, alt: "sass logo" },
          { id: 3, img: reactPic, alt: "react logo" },
          { id: 4, img: javascriptPic, alt: "javascript logo" },
        ],
        title: "Bambo",
      },
    ],
    graphic: [],
  };

  const changePaginationHandler = (id: number) => setCurrent(id);

  useEffect(() => {
    const interval = setInterval(() => {
      if (current === 3) setCurrent(0);
      else setCurrent(current + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="project-pic">
      <div className={`project-pic__items transform_x_minus__${current}`}>
        {projectPicData[activeTab].map((project) => (
          <div
            className={`project-pic__items__item ${
              project.id === current && "project-pic__items__item-active"
            }`}
            key={project.id}
          >
            <MainHeading
              color="secondary-light"
              text={project.title}
              className="project-pic__items__item__header"
            />
            <div className="project-pic__items__item__image">
              <Image src={project.img} alt={project.title} layout="intrinsic" />
            </div>
            <div className="project-pic__items__item__logos">
              {project.logos.map((logo) => (
                <div
                  className="project-pic__items__item__logos--logo"
                  key={logo.id}
                >
                  <Image src={logo.img} alt={logo.alt} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="project-pic__pagination">
        {projectPicData[activeTab].map((project) => (
          <div
            key={project.id}
            className={`project-pic__pagination--item ${
              project.id === current && "project-pic__pagination--item-active"
            }`}
            onClick={changePaginationHandler.bind(null, project.id)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPic;
