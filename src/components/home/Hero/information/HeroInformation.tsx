import React from "react";
import TertiaryHeading from "@/components/UI/TertiaryHeading";
import MainHeading from "@/components/UI/MainHeading";
const HeroInformation = () => {
  return (
    <div className="hero-information">
      <TertiaryHeading text="Frontend developer" />
      <MainHeading text="Based in Iran," />
      <MainHeading text="I'm developer and UI/UX designer." />
    </div>
  );
};
export default HeroInformation;
