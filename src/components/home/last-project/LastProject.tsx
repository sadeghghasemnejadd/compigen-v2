import React from "react";
import Image from "next/legacy/image";
import shapes from "@/images/last-project/bg-1.png";
import lastProjectPic from "@/images/last-project/project-pic.png";
import SecondHeading from "@/components/UI/SecondHeading";
import LastProjectInformation from "./lastProjectInformation";
import LastProjectPic from "./lastProjectPic";
import ILastProjectInformation from "@/models/LastProjectInformation";
import IPictureData from "@/models/PictureData";
import htmlPic from "@/images/logos/html.png";
import cssPic from "@/images/logos/css.png";
import sassPic from "@/images/logos/sass.png";
const LastProject = () => {
  const informationData: ILastProjectInformation = {
    id: 0,
    title: "Nature",
    description:
      "In this website I show the nature and services that I can provide for you I use HTML,CSS,SASS for this project",
  };
  const picData: IPictureData = {
    src: lastProjectPic,
    alt: "nature pic",
    color: "70AF75",
    logos: [
      {
        id: 0,
        src: htmlPic,
        alt: "html",
      },
      {
        id: 1,
        src: cssPic,
        alt: "css",
      },
      {
        id: 2,
        src: sassPic,
        alt: "sass",
      },
    ],
  };
  return (
    <section className="last-project">
      <div className="last-project__bg">
        <div className="last-project__bg--shapes">
          <Image src={shapes} alt="circle bg" />
        </div>
        <div className="last-project__bg--shapes">
          <Image src={shapes} alt="circle bg" />
        </div>
      </div>
      <main className="section__padding last-project__main">
        <SecondHeading text="Last Project" />
        <div className="last-project__main__details">
          <LastProjectInformation {...informationData} />
          <LastProjectPic {...picData} />
        </div>
      </main>
    </section>
  );
};
export default LastProject;
