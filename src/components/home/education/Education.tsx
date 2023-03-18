import SecondHeading from "@/components/UI/SecondHeading";
import React from "react";
import EducationTable from "./table";

const Education = () => {
  return (
    <section className="education section__padding" id="education">
      <SecondHeading text="Education" />
      <div className="education__table">
        <EducationTable />
      </div>
    </section>
  );
};

export default Education;
