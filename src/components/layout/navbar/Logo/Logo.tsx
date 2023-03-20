import React, { useState } from "react";
import LogoIcon from "./../../../../images/svg/logo.svg";
const Logo = () => {
  const themesData = [
    { id: 0, name: "yellow" },
    { id: 1, name: "magenta" },
    { id: 2, name: "purple" },
  ];
  const [curTheme, setCurTheme] = useState<string>("yellow");
  const changeThemeHandler = (themeName: string) => {
    setCurTheme(themeName);
    document.documentElement.className = "";
    document.documentElement.classList.add(`theme-${themeName}`);
  };
  return (
    <div className="logo">
      <div className="logo__image">
        <LogoIcon />
      </div>
      <p className="logo__text">
        Compi<span className="logo__text--special">gen</span>
      </p>
      <div className="logo__circles">
        {themesData.map((theme) => (
          <div
            key={theme.id}
            onClick={() => changeThemeHandler(theme.name)}
            className={`logo__circles--circle logo__circles--circle-${
              theme.id + 1
            } ${theme.name === curTheme && "logo__circles--circle-active"}`}
          ></div>
        ))}
      </div>
    </div>
  );
};
export default Logo;
