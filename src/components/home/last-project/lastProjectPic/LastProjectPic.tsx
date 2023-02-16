import React from "react";
import Image from "next/legacy/image";
import styled from "styled-components";
import IPictureData from "@/models/PictureData";

const LastProjectPic = ({ src, alt, color, logos }: IPictureData) => {
  const ImageBoxShadow = styled.div`
    position: absolute;
    width: 100%;
    height: 3rem;
    background-color: #${color};
    border-radius: 50%;
    transform: rotate(-3deg) translateY(-50%);
    opacity: 0.6;
    filter: blur(1rem);
  `;
  return (
    <div className="last-project-pic">
      <div className="last-project-pic__image" data-color={color}>
        <Image src={src} alt={alt} layout="responsive" objectFit="contain" />
        <ImageBoxShadow />
      </div>
      <div className="last-project-pic__logos">
        {logos.map((logo) => (
          <div key={logo.id} className="last-project-pic__logos__image">
            <Image src={logo.src} alt={logo.alt} layout="intrinsic" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default LastProjectPic;
