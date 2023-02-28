import Icon from "@/components/UI/Icon";
import { ChangeEvent, useState } from "react";

interface IContactProps {
  text: string;
  type: string;
  placeHolder: string;
  validation?: (value: string) => boolean;
}

const ErrorMessage = ({ message }: { message: string }) => {
  return <div className="contact-input__text__error">{message}</div>;
};

const ContactInput = ({
  text,
  type,
  placeHolder,
  validation,
}: IContactProps) => {
  const [count, setCount] = useState<number>(0);
  const [textArea, setTextArea] = useState<string>("");

  const [emailValidation, setEmailValidation] = useState({
    status: false,
    message: "",
  });
  const [emailInput, setEmailInput] = useState("");
  const [emailBlured, setEmailBlured] = useState(false);

  const [textValidation, setTextValidation] = useState({
    status: false,
    message: "",
  });
  const [textInput, setTextInput] = useState("");
  const [textBlured, setTextBlured] = useState(false);

  const handleEmailChange = (e: ChangeEvent) => {
    const elementValue = (e.target as HTMLInputElement).value;
    setEmailBlured(true);
    setEmailInput(elementValue);
    if (!elementValue) {
      setEmailValidation({
        status: false,
        message: "email shouldn`t be empty.",
      });
      return;
    }
    if (!validation?.(elementValue)) {
      setEmailValidation({ status: false, message: "email is invalid" });
      return;
    } else {
      setEmailValidation({ status: true, message: "" });
    }
  };

  const handleTextChange = (e: ChangeEvent) => {
    const elementValue = (e.target as HTMLInputElement).value;
    setTextBlured(true);
    setTextInput(elementValue);
    if (!elementValue) {
      setTextValidation({
        status: false,
        message: "name shouldn`t be empty.",
      });
      return;
    }
    if (elementValue.length > 100) {
      setTextValidation({
        status: false,
        message: "The name shouldn`t be more than 100 characters.",
      });
      return;
    } else {
      setTextValidation({ status: true, message: "" });
    }
  };

  const textAreaChangeHandler = (e: any) => {
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
            className={`contact-input__input__text-area__input ${
              count > 1000 && "contact-input__input__text-area__input-error"
            }`}
            value={textArea}
            onChange={textAreaChangeHandler}
          />
          <div
            className={`contact-input__input__text-area__count ${
              count > 999 && "contact-input__input__text-area__count-error"
            }`}
          >
            {count}/1000
          </div>
        </div>
      ) : type === "email" ? (
        <div className="contact-input__text">
          {emailBlured && !emailValidation?.status ? (
            <>
              <ErrorMessage message={emailValidation?.message} />
              <Icon
                size={20}
                icon={"cross"}
                className="contact-input__text--error-icon"
              />
            </>
          ) : (
            emailBlured && (
              <Icon
                size={20}
                icon={"checkmark4"}
                className="contact-input__text--success-icon"
              />
            )
          )}

          <input
            type={type}
            placeholder={placeHolder}
            className={`contact-input__text__input ${
              emailValidation?.status && "contact-input__text__input--success"
            }`}
            value={emailInput}
            onChange={(e) => handleEmailChange(e)}
          />
        </div>
      ) : (
        <div className="contact-input__text">
          {textBlured && !textValidation?.status ? (
            <>
              <ErrorMessage message={textValidation?.message} />
              <Icon
                size={20}
                icon={"cross"}
                className="contact-input__text--error-icon"
              />
            </>
          ) : (
            textBlured && (
              <Icon
                size={20}
                icon={"checkmark4"}
                className="contact-input__text--success-icon"
              />
            )
          )}
          <input
            type={type}
            placeholder={placeHolder}
            className={`contact-input__text__input ${
              textValidation?.status && "contact-input__text__input--success"
            }`}
            value={textInput}
            onChange={(e) => handleTextChange(e)}
          />
        </div>
      )}
    </div>
  );
};

export default ContactInput;
