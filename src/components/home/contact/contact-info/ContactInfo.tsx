import Icon from "@/components/UI/Icon";
import dribblePic from "@/images/logos/dribble.png";
import behancePic from "@/images/logos/behance.png";
import githubPic from "@/images/logos/github.png";
import Link from "next/link";
import Image from "next/legacy/image";

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
  const logoData = [
    {
      id: 0,
      src: dribblePic,
      alt: "dribbble",
      url: "google.com",
    },
    {
      id: 1,
      src: behancePic,
      alt: "behance",
      url: "google.com",
    },
    {
      id: 2,
      src: githubPic,
      alt: "github",
      url: "google.com",
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
      <div className="contact-info__works">
        <h2 className="contact-info__works__title">More work on</h2>
        <div className="contact-info__works__logos">
          {logoData.map((logo) => (
            <div className="contact-info__works__logos--logo">
              <Link
                href={logo.url}
                className="contact-info__works__logos--logo--link"
                key={logo.id}
              >
                <Image src={logo.src} alt={logo.alt} layout="intrinsic" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;