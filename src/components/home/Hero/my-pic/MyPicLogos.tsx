import React from "react";
import Image from "next/legacy/image";
interface IMyPicLogosProps {
  id: number;
  src: any;
  alt: string;
}

const MyPicLogos = ({ id, src, alt }: IMyPicLogosProps) => {
  return (
    <div className={`mypic__logos__logo mypic__logos__logo-${id + 1}`}>
      <Image src={src} alt={alt} layout="intrinsic" />
    </div>
  );
};
export default MyPicLogos;
