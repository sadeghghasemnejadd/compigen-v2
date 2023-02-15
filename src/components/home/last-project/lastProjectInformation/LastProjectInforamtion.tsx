import React from "react";
import ILastProjectInformation from "@/models/LastProjectInformation";
import MainHeading from "@/components/UI/MainHeading";
import SimpleText from "@/components/UI/SimpleText";
import LinkButton from "@/components/UI/LinkButton";
const LastProjectInformation = ({
  title,
  description,
  id,
}: ILastProjectInformation) => {
  return (
    <div className="last-project-information">
      <MainHeading text={title} />
      <SimpleText text={description} />
      <LinkButton color="secondary">Read More</LinkButton>
    </div>
  );
};

export default LastProjectInformation;
