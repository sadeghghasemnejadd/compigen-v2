interface IContactProps {
  text: string;
  type: string;
  placeHolder: string;
}
const ContactInput = ({ text, type, placeHolder }: IContactProps) => {
  return (
    <div className="contact-input">
      <label className="contact-input__label">{text}</label>
      {type === "textarea" ? (
        <textarea
          placeholder={placeHolder}
          className="contact-input__input--text-area"
        />
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
