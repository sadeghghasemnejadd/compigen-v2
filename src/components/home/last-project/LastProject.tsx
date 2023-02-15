import React from "react";
import Image from "next/legacy/image";
import shapes from "@/images/last-project/bg-1.png";
import SecondHeading from "@/components/UI/SecondHeading";
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
      <main className="section__padding">
        <SecondHeading text="Last Project" />
      </main>
    </section>
  );
};
export default LastProject;
