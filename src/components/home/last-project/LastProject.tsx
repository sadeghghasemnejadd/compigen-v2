import React from "react";
import Image from "next/legacy/image";
import shapes from "@/images/last-project/bg-1.png";
const LastProject = () => {
  return (
    <section className="last-project">
      <div className="last-project__bg">
        <div className="last-project__bg--shapes">
          <Image src={shapes} alt="circle bg" />
        </div>
        <div className="last-project__bg--shapes">
          <Image src={shapes} alt="circle bg" />
        </div>
      </div>
      <main className="section__padding"></main>
    </section>
  );
};
export default LastProject;
