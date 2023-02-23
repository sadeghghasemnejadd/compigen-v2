import React from "react";
interface IMainHeadingProps {
  text: string;
  color?: string;
  className?: string;
}
const MainHeading = ({
  text,
  color = "primary",
  className,
}: IMainHeadingProps) => {
  return (
    <h1 className={`main-heading main-heading--color-${color} ${className}`}>
      {text}
    </h1>
  );
};
export default MainHeading;
