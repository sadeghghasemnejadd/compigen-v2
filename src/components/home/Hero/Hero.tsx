import React from "react";
import SocialMedia from "./social-media";
import MyPic from "./my-pic";
import HeroInformation from "./information";
const Hero = () => {
  return (
    <section className="hero">
      <SocialMedia />
      <MyPic />
      <HeroInformation />
    </section>
  );
};
export default Hero;
