import React from "react";
interface IButtonProps {
  children: React.ReactNode;
  color?: string;
}
const Button = ({ children, color = "primary" }: IButtonProps) => {
  return <button className={`btn btn-${color}`}>{children}</button>;
};
export default Button;
