import MainHeading from "@/components/UI/MainHeading";
import React from "react";
import ContactInput from "./contact-input";
import emailValidation from "@/helper/email-validation";
import Button from "@/components/UI/Button";
import Icon from "@/components/UI/Icon";
import ContactInfo from "./contact-info";
const Contact = () => {
  const inputData = [
    {
      id: 0,
      text: "Email",
      placeHolder: "example@gmail.com",
      type: "email",
      validation: emailValidation,
    },
    {
      id: 1,
      text: "Name",
      placeHolder: "Sadegh Ghasemnejad",
      type: "text",
    },
    {
      id: 2,
      text: "Message",
      placeHolder: "This is your message",
      type: "textarea",
    },
  ];
  return (
    <section className="section__padding contact">
      <MainHeading text="Let's Talk" />
      <div className="contact__details">
        <form className="contact__details__form">
          {inputData.map((input) => (
            <ContactInput
              text={input.text}
              type={input.type}
              placeHolder={input.placeHolder}
              validation={input.validation}
            />
          ))}

          <Button className="contact__details__form__button">
            Send <Icon icon="compass2" size={15} />
          </Button>
        </form>
        <ContactInfo />
      </div>
    </section>
  );
};

export default Contact;
