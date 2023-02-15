import React from "react";

interface ISecondHeadingProps {
  text: string;
}

const SecondHeading = ({ text }: ISecondHeadingProps) => {
  return <h2 className="second-heading">{text}</h2>;
};

export default SecondHeading;
