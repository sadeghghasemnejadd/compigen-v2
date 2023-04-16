import React from "react";
import FooterLogo from "./footer-logo";
import Subscribe from "./subscribe";
import Link from "next/link";
import FooterButton from "./footer-bottom";
import IMenuData from "@/models/FooterMenuData";
const Footer = () => {
  const menuData: IMenuData[] = [
    { id: 0, name: "About me", to: "about" },
    { id: 1, name: "Projects", to: "projects" },
    { id: 2, name: "Contact", to: "contact" },
  ];
  const scrollHandler = (e: any, id: string) => {
    e.preventDefault();
    document.querySelector(`#${id}`)?.scrollIntoView({
      behavior: "smooth",
    });
  };
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
              <Link
                href={`#${menu.to}`}
                className="footer-menu__list__item--link"
                onClick={(e) => scrollHandler(e, menu.to)}
                aria-label={menu.name}
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <FooterButton />
    </>
  );
};

export default Footer;
