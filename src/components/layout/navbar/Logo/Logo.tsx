import React from "react";
import LogoIcon from "./../../../../images/svg/logo.svg";
const Logo: React.FunctionComponent = () => {
  return (
    <div className="logo">
      <div className="logo__image">
        <LogoIcon />
      </div>
      <p className="logo__text">
        Compi<span className="logo__text--special">gen</span>
      </p>
    </div>
  );
};
export default Logo;
