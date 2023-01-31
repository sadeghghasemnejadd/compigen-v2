import React, { useState } from "react";
import Icon from "@/components/UI/Icon";
import { ILang } from "@/models/languageInterFace";
const Lang = () => {
  const languages: ILang[] = [
    { id: 0, name: "En", default: true },
    { id: 1, name: "Fa" },
  ];
  const [language, setLanguage] = useState<string>(languages[0].name);

  const changeLanguageHandler = () =>
    setLanguage(languages.find((lang) => lang.name !== language)!.name);
  return (
    <div className="lang">
      <p className="lang__text">{language}</p>
      <p className="lang__text__another" onClick={changeLanguageHandler}>
        {languages.find((lang) => lang.name !== language)!.name}
      </p>
      <Icon size={10} icon="arrow-down3" className="lang__icon" />
    </div>
  );
};
export default Lang;
