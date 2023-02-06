import React from "react";
interface IMainHeadingProps {
  text: string;
  color?: string;
}
const MainHeading = ({ text, color = "primary" }: IMainHeadingProps) => {
  return (
    <h1 className={`main-heading main-heading--color-${color}`}>{text}</h1>
  );
};
export default MainHeading;
