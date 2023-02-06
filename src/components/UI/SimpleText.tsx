import React from "react";

interface ISimpleTextProps {
  text: string;
  color?: string;
}
const SimpleText = ({ text, color = "primary" }: ISimpleTextProps) => {
  return <p className={`simple-text simple-text--color-${color}`}>{text}</p>;
};
export default SimpleText;
