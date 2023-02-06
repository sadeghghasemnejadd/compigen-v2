import React from "react";
import Link from "next/link";
interface ILinkButtonProps {
  children: React.ReactNode;
  color?: string;
}
const LinkButton = ({ children, color = "primary" }: ILinkButtonProps) => {
  return (
    <Link href="#" className={`link-button link-button-${color}`}>
      {children}
    </Link>
  );
};
export default LinkButton;
