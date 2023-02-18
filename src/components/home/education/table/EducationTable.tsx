import React from "react";
import IEduData from "@/models/EduData";
const EducationTable = () => {
  const eduData: IEduData[] = [
    {
      id: 0,
      year: 2018,
      details: {
        title: "Shiraz University",
        description: "I have been studying there at computer engneering.",
      },
    },
    {
      id: 1,
      year: 2019,
      details: {
        title: "South Industrial Management",
        description:
          "I get C# certificate by 95/100 score. I was top student there.",
      },
    },
    {
      id: 2,
      year: 2020,
      details: {
        title: "Tehran Institute of technology",
        description:
          "I get ICDL certificate by 100/100 score. I was top student there. I learned microsoft office programs plus windows.",
      },
    },
    {
      id: 3,
      year: 2020,
      details: {
        title: "South Industrial Management",
        description:
          "I get A+ and Computer Technitcian certificate by 95/100 score. I was top student there.",
      },
    },
    {
      id: 4,
      year: 2021,
      details: {
        title: "Tehran Institute of technology",
        description:
          "I get Network plus certificate by 93/100 score. I was top student there. I learned network plus.",
      },
    },
    {
      id: 5,
      year: 2022,
      details: {
        title: "Shiraz University",
        description:
          "I get FrontEnd Developer certificate . I was top student there. I make a lot of frontend project by high score. I learnd HTML ,CSS ,JAVASCRIPT ,SASS ,REACT ,BOOTSTRAP.",
      },
    },
    {
      id: 6,
      year: 2023,
      details: {
        title: "Chargoon Institute",
        description:
          "I start my work at chargoon institute as a senior Frontend developer.I use Html,CSS,Javascript,React,Typescript.",
      },
    },
  ];
  return (
    <div className="education-table">
      {eduData.map((edu) => (
        <div key={edu.id} className="education-table__item">
          <div className="education-table__item__details">
            <div className="education-table__item__details__cross-line"></div>
            <h3 className="education-table__item__details__year">{edu.year}</h3>
            <div className="education-table__item__details__info">
              <h3 className="education-table__item__details__info--title">
                {edu.details.title}
              </h3>
              <p className="education-table__item__details__info--text">
                {edu.details.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationTable;
