import Icon from "@/components/UI/Icon";

const ContactInfo = () => {
  const contactData = [
    { id: 0, title: "Phone Number", value: "+989912330923", icon: "phone3" },
    {
      id: 1,
      title: "Email Address",
      value: "ghasemnejad.sadegh@gmail.com",
      icon: "envelop2",
    },
  ];
  return (
    <div className="contact-info">
      <div className="contact-info__details">
        {contactData.map((cdata) => (
          <div className="contact-info__details__item">
            <Icon
              icon={cdata.icon}
              size={30}
              className="contact-info__details__item--icon"
            />
            <h3 className="contact-info__details__item--title">
              {cdata.title}
            </h3>
            <p className="contact-info__details__item--value">{cdata.value}</p>
          </div>
        ))}
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default ContactInfo;
