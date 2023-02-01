import React, { useState } from "react";
import Icon from "@/components/UI/Icon";
import { ILang } from "@/models/languageInterFace";
const Lang = () => {
  const [language, setLanguage] = useState<ILang[]>([
    { id: 0, name: "En", default: true },
    { id: 1, name: "Fa" },
  ]);
  const changeLanguageHandler = () => {
    setLanguage((prev) =>
      prev.map((p) =>
        p.default ? { ...p, default: false } : { ...p, default: true }
      )
    );
  };
  return (
    <div className="lang">
      <p className="lang__text">
        {language.find((lang) => lang.default)!.name}
      </p>
      <p className="lang__text__another" onClick={changeLanguageHandler}>
        {language.find((lang) => !lang.default)!.name}
      </p>
      <Icon size={10} icon="arrow-down3" className="lang__icon" />
    </div>
  );
};
export default Lang;
