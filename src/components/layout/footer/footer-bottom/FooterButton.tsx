import Icon from "@/components/UI/Icon";
import Link from "next/link";
import React from "react";
const FooterButton = () => {
  const logoData = [
    { id: 0, src: "facebook", href: "/" },
    { id: 1, src: "twitter", href: "/" },
    { id: 2, src: "behance", href: "/" },
    {
      id: 3,
      src: "linkedin",
      href: "https://www.linkedin.com/in/sadegh-ghasemnejad-a4882622a",
    },
    { id: 4, src: "instagram", href: "/" },
  ];
  return (
    <section className="footer-buttom">
      <p className="footer-buttom__copyright">
        Copyright by ©
        <Link
          href="https://www.linkedin.com/in/sadegh-ghasemnejad-a4882622a"
          className="footer-buttom__copyright--link"
          target="_blank"
        >
          Sadegh
        </Link>{" "}
        -2022
      </p>
      <ul className="footer-buttom__list">
        {logoData.map((logo) => (
          <li key={logo.id} className="footer-buttom__list__item">
            <Link
              href={logo.href}
              className="footer-buttom__list__item__link"
              target="_blank"
            >
              <Icon
                icon={logo.src}
                size={16}
                className="footer-buttom__list__item__link--icon"
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FooterButton;
