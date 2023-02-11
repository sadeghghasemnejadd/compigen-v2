import React from "react";
import SocialMedia from "./social-media";
import MyPic from "./my-pic";
import HeroInformation from "./information";
const Hero = () => {
  return (
    <section className="hero section__padding">
      <div className="hero__bg"></div>
      <SocialMedia />
      <MyPic />
      <HeroInformation />
    </section>
  );
};
export default Hero;
