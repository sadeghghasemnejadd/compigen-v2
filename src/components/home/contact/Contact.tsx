import MainHeading from "@/components/UI/MainHeading";
import React from "react";
import ContactInput from "./contact-input";
const Contact = () => {
  const inputData = [
    { id: 0, text: "Email", placeHolder: "example@gmail.com", type: "email" },
    { id: 1, text: "Name", placeHolder: "Sadegh Ghasemnejad", type: "text" },
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
        <div className="contact__details__inputs">
          {inputData.map((input) => (
            <ContactInput
              text={input.text}
              type={input.type}
              placeHolder={input.placeHolder}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
