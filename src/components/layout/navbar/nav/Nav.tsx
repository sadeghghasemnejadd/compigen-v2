import React, { useState } from "react";
import Link from "next/link";
import { Inav } from "@/models/navInterface";
const Nav = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const navData: Inav[] = [
    { id: 0, title: "About me", active: true },
    { id: 1, title: "Projects" },
    { id: 2, title: "Contact" },
  ];
  return (
    <>
      <div
        className={`nav__menu nav__menu__${
          !menuOpen ? "primary" : "secondary"
        }`}
      >
        {!menuOpen && (
          <div
            className="nav__menu__icon-open"
            onClick={() => setMenuOpen(true)}
          >
            <div className="nav__menu__icon-open--circle"></div>
            <div className="nav__menu__icon-open--circle"></div>
            <div className="nav__menu__icon-open--circle"></div>
          </div>
        )}
        {menuOpen && (
          <div
            className="nav__menu__icon-close"
            onClick={() => setMenuOpen(false)}
          >
            <div className="nav__menu__icon-close--line"></div>
            <div className="nav__menu__icon-close--line"></div>
          </div>
        )}

        {menuOpen && (
          <ul className="nav__menu__list">
            {navData.map((nav) => (
              <li
                key={nav.id}
                className={`nav__menu__list__item ${
                  nav.active && "nav__menu__list__item--active"
                }`}
              >
                <Link href="/" className="nav__menu__list__item--link">
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
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
    </>
  );
};
export default Nav;
