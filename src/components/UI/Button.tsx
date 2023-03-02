import React from "react";
interface IButtonProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
}
const Button = ({ children, color = "primary", className }: IButtonProps) => {
  return (
    <button className={`btn btn-${color} ${className && className}`}>
      {children}
    </button>
  );
};
export default Button;
