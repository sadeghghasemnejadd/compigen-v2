import React from "react";
import Icon from "@/components/UI/Icon";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "@/helper/config";
import Link from "next/link";
import ISocialMediaData from "@/models/SocialMediaData";
const SocialMedia = () => {
  const socialMediaData: ISocialMediaData[] = [
    { id: 0, icon: "facebook", link: Facebook },
    { id: 1, icon: "instagram", link: Instagram },
    { id: 2, icon: "linkedin", link: Linkedin },
    { id: 3, icon: "github", link: Github },
    { id: 4, icon: "twitter", link: Twitter },
  ];
  return (
    <div className="hero__socialmedia">
      {socialMediaData.map((social) => (
        <Link href={social.link} key={social.id} aria-label={social.icon}>
          <Icon size={30} icon={social.icon} />
        </Link>
      ))}
    </div>
  );
};
export default SocialMedia;
