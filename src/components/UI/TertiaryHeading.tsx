import React from "react";
interface ITertiaryHeadingProps {
  text: string;
}
const TertiaryHeading = ({ text }: ITertiaryHeadingProps) => {
  return (
    <div className="tertiary-heading">
      <h5 className="tertiary-heading__title">{text}</h5>
      <div className="tertiary-heading__line"></div>
    </div>
  );
};
export default TertiaryHeading;
