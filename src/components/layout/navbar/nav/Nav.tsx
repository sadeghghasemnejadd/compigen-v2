import React from "react";
import Link from "next/link";
import { Inav } from "@/models/navInterface";
const Nav = () => {
  const navData: Inav[] = [
    { id: 0, title: "About me", active: true },
    { id: 1, title: "Projects" },
    { id: 2, title: "Contact" },
  ];
  return (
    <ul className="nav__list">
      {navData.map((nav) => (
        <li
          key={nav.id}
          className={`nav__list__item ${
            nav.active && "nav__list__item--active"
          }`}
        >
          <Link href="/" className="nav__list__item--link">
            {nav.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default Nav;
