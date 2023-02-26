import { useState } from "react";

interface IContactProps {
  text: string;
  type: string;
  placeHolder: string;
}
const ContactInput = ({ text, type, placeHolder }: IContactProps) => {
  const [count, setCount] = useState<number>(0);
  const [textArea, setTextArea] = useState<string>("");
  const textChangeHandler = (e: any) => {
    if (e.target.value.length > 1000) return;
    setTextArea(e.target.value);
    setCount(e.target.value.length);
  };
  return (
    <div className="contact-input">
      <label className="contact-input__label">{text}</label>
      {type === "textarea" ? (
        <div className="contact-input__input__text-area">
          <textarea
            placeholder={placeHolder}
            className="contact-input__input__text-area__input"
            value={textArea}
            onChange={textChangeHandler}
          />
          <div className="contact-input__input__text-area__count">
            {count}/1000
          </div>
        </div>
      ) : (
        <input
          type={type}
          placeholder={placeHolder}
          className="contact-input__input"
        />
      )}
    </div>
  );
};

export default ContactInput;
