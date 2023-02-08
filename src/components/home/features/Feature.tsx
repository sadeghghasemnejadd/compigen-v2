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
      {featureCartData.map((cart) => (
        <FeatureCart
          title={cart.title}
          items={cart.items}
          projectCount={cart.projectCount}
          key={cart.id}
          color={cart.color}
        />
      ))}
    </section>
  );
};

export default Feature;
