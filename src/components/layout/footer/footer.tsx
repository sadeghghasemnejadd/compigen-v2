import React from "react";
import FooterLogo from "./footer-logo";
import Subscribe from "./subscribe";
import Link from "next/link";
const Footer = () => {
  const menuData = [
    { id: 0, name: "About me", to: "/" },
    { id: 1, name: "Projects", to: "/" },
    { id: 2, name: "Contact", to: "/" },
  ];
  return (
    <>
      <FooterLogo />
      <div className="seprate-line"></div>
      <Subscribe />
      <div className="seprate-line"></div>
      <section className="footer-menu">
        <ul className="footer-menu__list">
          {menuData.map((menu) => (
            <li key={menu.id} className="footer-menu__list__item">
              <Link href={menu.to} className="footer-menu__list__item--link">
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Footer;
