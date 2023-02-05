import React from "react";
import Image from "next/legacy/image";
import MyPicLogos from "./MyPicLogos";
import myPic from "@/images/me.png";
import reactLogo from "@/images/logos/react.png";
import javascriptLogo from "@/images/logos/javascript.png";
import figmaLogo from "@/images/logos/figma.png";
const MyPic = () => {
  const logosData = [
    { id: 0, alt: "react", src: reactLogo },
    { id: 1, alt: "javascript", src: javascriptLogo },
    { id: 2, alt: "figma", src: figmaLogo },
  ];
  return (
    <div className="mypic">
      <h1 className="mypic__title">
        Sadegh
        <br />
        Ghasemnejad
      </h1>
      <div className="mypic__image">
        <Image src={myPic} alt="my pic" layout="intrinsic" />
      </div>
      <div className="mypic__logos">
        {logosData.map((logo) => (
          <MyPicLogos key={logo.id} {...logo} />
        ))}
      </div>
    </div>
  );
};
export default MyPic;
