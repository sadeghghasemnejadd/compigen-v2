import React from "react";
import TertiaryHeading from "@/components/UI/TertiaryHeading";
import MainHeading from "@/components/UI/MainHeading";
import SimpleText from "@/components/UI/SimpleText";
import Button from "@/components/UI/Button";
import LinkButton from "@/components/UI/LinkButton";
import Icon from "@/components/UI/Icon";
const HeroInformation = () => {
  return (
    <div className="hero-information">
      <div>
        <TertiaryHeading text="Frontend developer" />
        <MainHeading text="Based in Iran," />
        <MainHeading text="I'm developer and UI/UX designer." />
        <SimpleText text="If you’re looking for designer to build your brand and grow your bussiness, let’s shake hands with me." />
      </div>
      <div>
        <Button>Let's Talk</Button>
        <LinkButton color="secondary">
          <p>Download Portfolio</p>
          <Icon icon="download5" size={16} color="#3c8c93" />
        </LinkButton>
      </div>
    </div>
  );
};
export default HeroInformation;
