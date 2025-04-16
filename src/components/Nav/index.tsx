import { memo } from "react";
import type { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

import { NavWrapper } from "./style";

interface IProps {
  children?: ReactNode;
}

const Nav: FC<IProps> = () => {
  const links = [
    {
      name: "推荐",
      path: "/discover",
    },
    {
      name: "排行榜",
      path: "/discover/ranking",
    },
    {
      name: "歌单",
      path: "/discover/order",
    },
    {
      name: "主播电台",
      path: "/discover/anchor",
    },
    {
      name: "歌手",
      path: "/discover/singer",
    },
    {
      name: "新碟上架",
      path: "/discover/album",
    },
  ];

  return (
    <NavWrapper className="common-width m-center">
      {links.map((link, index) => (
        <Link key={index} className="link" to={link.path}>
          {link.name}
        </Link>
      ))}
    </NavWrapper>
  );
};

export default memo(Nav);
