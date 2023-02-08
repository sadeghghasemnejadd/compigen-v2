import Icon from "@/components/UI/Icon";
import MainHeading from "@/components/UI/MainHeading";
import React from "react";
interface IFeatureCartProps {
  title: string;
  items: { id: number; name: string }[];
  projectCount: number;
  color: string;
}
const FeatureCart = ({
  title,
  color,
  items,
  projectCount,
}: IFeatureCartProps) => {
  return (
    <div className={`feature-cart--${color}`}>
      <div className={`feature-cart--${color}__title`}>
        <MainHeading text={title} color={color} />
      </div>
      <ul className={`feature-cart--${color}__lists`}>
        {items.map((item) => (
          <li key={item.id} className={`feature-cart--${color}__lists__list`}>
            <Icon
              icon="checkmark3"
              size={26}
              className={`feature-cart--${color}__lists__list--icon`}
            />
            <p className={`feature-cart--${color}__lists__list--text`}>
              {item.name}
            </p>
          </li>
        ))}
      </ul>
      <div className={`feature-cart--${color}__projects`}>
        <MainHeading text={`${projectCount}+ Projects`} color={color} />
      </div>
    </div>
  );
};

export default FeatureCart;
