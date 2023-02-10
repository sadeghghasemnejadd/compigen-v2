import React from "react";
import FeatureCart from "./feature-cart";
import IFeatureCartDataProps from "@/models/FeatureCart";
const Feature = () => {
  const featureCartData: IFeatureCartDataProps[] = [
    {
      id: 0,
      title: "UI/UX & Graphic Design",
      items: [
        { id: 0, name: "Figma" },
        { id: 1, name: "Adobe XD" },
        { id: 2, name: "Adobe Photoshop" },
        { id: 3, name: "Adobe Indesign" },
        { id: 4, name: "Adobe Illustrator" },
      ],
      projectCount: 50,
      color: "secondary",
    },
    {
      id: 1,
      title: "FrontEnd Developer",
      items: [
        { id: 0, name: "HTML" },
        { id: 1, name: "CSS" },
        { id: 2, name: "Sass" },
        { id: 3, name: "Javascript" },
        { id: 4, name: "Reactjs" },
        { id: 5, name: "Nextjs" },
        { id: 6, name: "Typescript" },
        { id: 7, name: "Git" },
      ],
      projectCount: 30,
      color: "primary",
    },
  ];

  return (
    <section className="feature">
      <div className="feature__bg">
        <p>Figma</p>
        <p>Html</p>
        <p>AI</p>
        <p>Css</p>
        <p>Git</p>
        <p>Adobe Xd</p>
        <p>TypeScript</p>
        <p>Adobe Indesign</p>
        <p>react</p>
        <p>sass</p>
        <p>Adobe Photoshop</p>
        <p>Next</p>
        <p>webpack</p>
        <p>Adobe Illustrator</p>
        <p>python</p>
      </div>
      <div className="feature__bg">
        <p>AI</p>
        <p>Adobe Xd</p>
        <p>Css</p>
        <p>Next</p>
        <p>webpack</p>
        <p>Adobe Indesign</p>
        <p>react</p>
        <p>Adobe Illustrator</p>
        <p>Figma</p>
        <p>Html</p>
        <p>Adobe Photoshop</p>
        <p>Git</p>
        <p>TypeScript</p>
        <p>sass</p>
        <p>python</p>
      </div>
      <div className="feature__bg">
        <p>Adobe Indesign</p>
        <p>Adobe Photoshop</p>
        <p>Next</p>
        <p>Css</p>
        <p>webpack</p>
        <p>Html</p>
        <p>Adobe Xd</p>
        <p>AI</p>
        <p>Git</p>
        <p>react</p>
        <p>Adobe Illustrator</p>
        <p>python</p>
        <p>Figma</p>
        <p>TypeScript</p>
        <p>sass</p>
      </div>
      <div className="feature__carts">
        {featureCartData.map((cart) => (
          <FeatureCart
            title={cart.title}
            items={cart.items}
            projectCount={cart.projectCount}
            key={cart.id}
            color={cart.color}
          />
        ))}
      </div>
      <p>BackEnd Developer soon...😉</p>
    </section>
  );
};

export default Feature;
