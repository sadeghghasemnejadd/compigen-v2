import MainHeading from "@/components/UI/MainHeading";
import React, { ChangeEvent, useState, FormEvent } from "react";
import ContactInput from "./contact-input";
import emailValidationFunc from "@/helper/email-validation";
import Button from "@/components/UI/Button";
import Icon from "@/components/UI/Icon";
import ContactInfo from "./contact-info";
const Contact = () => {
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
  const formSubmitHandler = (e: FormEvent) => {
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
  };
  return (
    <section className="section__padding contact">
      <MainHeading text="Let's Talk" />
      <div className="contact__details">
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
        <ContactInfo />
      </div>
    </section>
  );
};

export default Contact;
