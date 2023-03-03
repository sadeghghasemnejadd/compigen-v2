import Icon from "@/components/UI/Icon";
import { ChangeEvent, useState } from "react";

interface IContactProps {
  text: string;
  type: string;
  placeHolder: string;
  validation?: (value: string) => boolean;
  value: string;
  setValue: Function;
  validationState?: { status: boolean; message: string };
  setValidationState?: Function;
  blured?: boolean;
  setBlured?: Function;
}

const ErrorMessage = ({
  message,
  className,
}: {
  message?: string;
  className: string;
}) => {
  return <div className={className}>{message}</div>;
};

const ContactInput = ({
  text,
  type,
  placeHolder,
  validation,
  value,
  setValue,
  validationState,
  setValidationState,
  blured,
  setBlured,
}: IContactProps) => {
  const [count, setCount] = useState<number>(0);

  const handleEmailChange = (e: ChangeEvent) => {
    const elementValue = (e.target as HTMLInputElement).value;
    setBlured && setBlured(true);
    setValue(elementValue);
    if (!elementValue) {
      setValidationState &&
        setValidationState({
          status: false,
          message: "email shouldn`t be empty.",
        });

      return;
    }
    if (!validation?.(elementValue)) {
      setValidationState &&
        setValidationState({ status: false, message: "email is invalid" });
      return;
    } else {
      setValidationState && setValidationState({ status: true, message: "" });
    }
  };

  const handleTextChange = (e: ChangeEvent) => {
    const elementValue = (e.target as HTMLInputElement).value;
    setBlured && setBlured(true);
    setValue(elementValue);
    if (!elementValue) {
      setValidationState &&
        setValidationState({
          status: false,
          message: "name shouldn`t be empty.",
        });
      return;
    }
    if (elementValue.length > 100) {
      setValidationState &&
        setValidationState({
          status: false,
          message: "The name shouldn`t be more than 100 characters.",
        });
      return;
    } else {
      setValidationState && setValidationState({ status: true, message: "" });
    }
  };

  const textAreaChangeHandler = (e: any) => {
    if (e.target.value.length > 1000) return;
    setValue(e.target.value);
    setCount(e.target.value.length);
    setBlured && setBlured(true);
    if (!e.target.value) {
      setValidationState &&
        setValidationState({
          status: false,
          message: "text area shouldn`t be empty",
        });
      return;
    } else {
      setValidationState && setValidationState({ status: true, message: "" });
    }
  };
  return (
    <div className="contact-input">
      <label className="contact-input__label">{text}</label>
      {type === "textarea" ? (
        <div className="contact-input__input__text-area">
          {blured && !validationState?.status ? (
            <>
              <ErrorMessage
                message={validationState?.message}
                className="contact-input__input__text-area__error"
              />
              <Icon
                size={20}
                icon={"cross"}
                className="contact-input__input__text-area--error-icon"
              />
            </>
          ) : (
            blured && (
              <Icon
                size={20}
                icon={"checkmark4"}
                className="contact-input__input__text-area--success-icon"
              />
            )
          )}
          <textarea
            placeholder={placeHolder}
            className={`contact-input__input__text-area__input ${
              count > 1000 && "contact-input__input__text-area__input-error"
            } ${
              validationState?.status &&
              "contact-input__input__text-area--success"
            }`}
            value={value}
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
          {blured && !validationState?.status ? (
            <>
              <ErrorMessage
                message={validationState?.message}
                className="contact-input__text__error"
              />
              <Icon
                size={20}
                icon={"cross"}
                className="contact-input__text--error-icon"
              />
            </>
          ) : (
            blured && (
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
              validationState?.status && "contact-input__text__input--success"
            }`}
            value={value}
            onChange={(e) => handleEmailChange(e)}
          />
        </div>
      ) : (
        <div className="contact-input__text">
          {blured && !validationState?.status ? (
            <>
              <ErrorMessage
                message={validationState?.message}
                className="contact-input__text__error"
              />
              <Icon
                size={20}
                icon={"cross"}
                className="contact-input__text--error-icon"
              />
            </>
          ) : (
            blured && (
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
              validationState?.status && "contact-input__text__input--success"
            }`}
            value={value}
            onChange={(e) => handleTextChange(e)}
          />
        </div>
      )}
    </div>
  );
};

export default ContactInput;
