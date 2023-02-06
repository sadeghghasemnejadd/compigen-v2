import React from "react";
import TertiaryHeading from "@/components/UI/TertiaryHeading";
import MainHeading from "@/components/UI/MainHeading";
import SimpleText from "@/components/UI/SimpleText";
const HeroInformation = () => {
  return (
    <div className="hero-information">
      <TertiaryHeading text="Frontend developer" />
      <MainHeading text="Based in Iran," />
      <MainHeading text="I'm developer and UI/UX designer." />
      <SimpleText text="If you’re looking for designer to build your brand and grow your bussiness, let’s shake hands with me." />
    </div>
  );
};
export default HeroInformation;
