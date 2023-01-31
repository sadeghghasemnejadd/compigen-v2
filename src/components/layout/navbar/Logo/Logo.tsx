import React from "react";
import LogoIcon from "./../../../../images/svg/logo.svg";
const Logo = () => {
  return (
    <div className="logo">
      <div className="logo__image">
        <LogoIcon />
      </div>
      <p className="logo__text">
        Compi<span className="logo__text--special">gen</span>
      </p>
      <div className="logo__circles">
        <div className="logo__circles--circle logo__circles--circle-1 logo__circles--circle-active"></div>
        <div className="logo__circles--circle logo__circles--circle-2"></div>
        <div className="logo__circles--circle logo__circles--circle-3"></div>
      </div>
    </div>
  );
};
export default Logo;
