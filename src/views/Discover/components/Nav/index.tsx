import { memo } from "react";
import type { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";

import { NavWrapper } from "./style";

interface IProps {
  children?: ReactNode;
}

const Nav: FC<IProps> = () => {
  const links = [
    {
      name: "推荐",
      path: "/discover/recommend",
      end: true, // 设置为 true，表示精确匹配
    },
    {
      name: "排行榜",
      path: "/discover/ranking",
      end: true,
    },
    {
      name: "歌单",
      path: "/discover/order",
      end: true,
    },
    {
      name: "主播电台",
      path: "/discover/anchor",
      end: true,
    },
    {
      name: "歌手",
      path: "/discover/singer",
      end: true,
    },
    {
      name: "新碟上架",
      path: "/discover/album",
      end: true,
    },
  ];

  return (
    <NavWrapper className="common-width m-center">
      {links.map((link, index) => (
        <NavLink
          key={index}
          to={link.path}
          className={({ isActive }) => `link ${isActive ? "active" : ""}`}
          end={link.end}
        >
          {link.name}
        </NavLink>
      ))}
    </NavWrapper>
  );
};

export default memo(Nav);
