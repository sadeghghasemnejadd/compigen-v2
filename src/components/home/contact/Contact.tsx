import MainHeading from "@/components/UI/MainHeading";
import React, { useState, FormEvent } from "react";
import { BeatLoader } from "react-spinners";
import ContactInput from "./contact-input";
import emailValidationFunc from "@/helper/email-validation";
import Button from "@/components/UI/Button";
import Icon from "@/components/UI/Icon";
import ContactInfo from "./contact-info";
const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [spinner, setSpinner] = useState(true);
  const [tick, setTick] = useState(true);
  const [cross, setCross] = useState(true);
  const [textArea, setTextArea] = useState<string>("");
  const [textAreaValidation, setTextAreaValiation] = useState({
    status: false,
    message: "text area shouldn`t be empty",
  });
  const [textAreaBlured, setTextAreaBlured] = useState(false);
  const [emailInput, setEmailInput] = useState<string>("");
  const [textInput, setTextInput] = useState<string>("");
  const [emailValidation, setEmailValidation] = useState({
    status: false,
    message: "email shouldn`t be empty",
  });
  const [emailBlured, setEmailBlured] = useState(false);

  const [textValidation, setTextValidation] = useState({
    status: false,
    message: "name shouldn`t be empty",
  });
  const [textBlured, setTextBlured] = useState(false);
  const inputData = [
    {
      id: 0,
      text: "Email",
      placeHolder: "example@gmail.com",
      type: "email",
      validation: emailValidationFunc,
      value: emailInput,
      setValue: setEmailInput,
      validationState: emailValidation,
      setValidationState: setEmailValidation,
      blured: emailBlured,
      setBlured: setEmailBlured,
    },
    {
      id: 1,
      text: "Name",
      placeHolder: "Sadegh Ghasemnejad",
      type: "text",
      value: textInput,
      setValue: setTextInput,
      validationState: textValidation,
      setValidationState: setTextValidation,
      blured: textBlured,
      setBlured: setTextBlured,
    },
    {
      id: 2,
      text: "Message",
      placeHolder: "This is your message",
      type: "textarea",
      value: textArea,
      setValue: setTextArea,
      validationState: textAreaValidation,
      setValidationState: setTextAreaValiation,
      blured: textAreaBlured,
      setBlured: setTextAreaBlured,
    },
  ];
  const formSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    setEmailBlured(true);
    setTextBlured(true);
    setTextAreaBlured(true);
    if (
      !emailValidation.status ||
      !textAreaValidation.status ||
      !textValidation.status
    )
      return;
    setLoading(true);
    setSpinner(true);
    setTick(false);
    setCross(false);
    const data = { email: emailInput, name: textInput, message: textArea };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
        setSpinner(false);
        setTick(true);
        setEmailInput("");
        setTextInput("");
        setTextArea("");
        setEmailBlured(false);
        setTextBlured(false);
        setTextAreaBlured(false);
      }
    } catch (err) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      setSpinner(false);
      setCross(true);
      throw err;
    }
  };
  return (
    <section className="section__padding contact">
      <MainHeading text="Let's Talk" />
      <div className="contact__details">
        {loading ? (
          <div className="contact__details__loader">
            {spinner && <BeatLoader color="#64eaf5" />}
            {tick && (
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 130.2 130.2"
                className="contact__details__loader__svg"
              >
                <circle
                  className="contact__details__loader__svg--path contact__details__loader__svg--circle"
                  fill="none"
                  stroke="#40c057"
                  stroke-width="6"
                  stroke-miterlimit="10"
                  cx="65.1"
                  cy="65.1"
                  r="62.1"
                />
                <polyline
                  className="contact__details__loader__svg--path contact__details__loader__svg--check"
                  fill="none"
                  stroke="#40c057"
                  stroke-width="6"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  points="100.2,40.2 51.5,88.8 29.8,67.5 "
                />
              </svg>
            )}
            {cross && (
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 130.2 130.2"
                className="contact__details__loader__svg"
              >
                <circle
                  className="contact__details__loader__svg--path contact__details__loader__svg--circle"
                  fill="none"
                  stroke="#fa5252"
                  stroke-width="6"
                  stroke-miterlimit="10"
                  cx="65.1"
                  cy="65.1"
                  r="62.1"
                />
                <line
                  className="contact__details__loader__svg--path contact__details__loader__svg--line"
                  fill="none"
                  stroke="#fa5252"
                  stroke-width="6"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  x1="34.4"
                  y1="37.9"
                  x2="95.8"
                  y2="92.3"
                />
                <line
                  className="path line"
                  fill="none"
                  stroke="#fa5252"
                  stroke-width="6"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  x1="95.8"
                  y1="38"
                  x2="34.4"
                  y2="92.2"
                />
              </svg>
            )}
          </div>
        ) : (
          <form className="contact__details__form" onSubmit={formSubmitHandler}>
            {inputData.map((input) => (
              <ContactInput key={input.id} {...input} />
            ))}

            <Button
              className={`contact__details__form__button ${
                (!emailValidation.status ||
                  !textValidation.status ||
                  !textAreaValidation.status) &&
                "contact__details__form__button--disabled"
              }`}
            >
              Send <Icon icon="compass2" size={15} />
            </Button>
          </form>
        )}

        <ContactInfo />
      </div>
    </section>
  );
};

export default Contact;
