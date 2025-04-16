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
      color={color}
      onClick={onClick} // 新增：绑定点击事件
      role={onClick ? "button" : undefined} // 可选：提升可访问性
      tabIndex={onClick ? 0 : undefined} // 可选：支持键盘聚焦
    >
      <use xlinkHref={`#icon-${name}`} />
    </IconWrapper>
  );
};

export default Icon;
