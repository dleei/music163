import React from "react";
import { IconWrapper } from "./style";

interface IconProps {
  name: string;
  rotate?: boolean;
  size?: string;
  color?: string;
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({
  name,
  rotate = false,
  size = "1.5rem",
  color = "currentColor",
  onClick,
}) => {
  return (
    <IconWrapper
      className={`icon ${rotate ? "rotate" : ""}`}
      style={{ fontSize: size, cursor: "pointer" }}
      size={size} // 传递 size 属性
      color={color}
      onClick={onClick} 
      role={onClick ? "button" : undefined} 
      tabIndex={onClick ? 0 : undefined}
    >
      <use xlinkHref={`#icon-${name}`} />
    </IconWrapper>
  );
};

export default Icon;


