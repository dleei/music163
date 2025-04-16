import { memo } from "react";
import type { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";
import Search from "@/components/Search";

interface IProps {
  children?: ReactNode;
}

const Header: FC<IProps> = () => {
  const links = [
    {
      name: "发现",
      path: "/discover",
    },
    {
      name: "我的音乐",
      path: "/mine",
    },
    {
      name: "关注",
      path: "/focus",
    },
    {
      name: "商城",
      path: "/mall",
    },
    {
      name: "音乐人",
      path: "/musician",
    },
    {
      name: "云推歌",
      path: "/cloudDiscover",
    },
    {
      name: "下载客户端",
      path: "/download",
    },
  ];

  return (
    <HeaderWrapper className="m-center h-[70px] common-width flex">
      <div className="header">
        <HeaderLeft>
          <a href="/" className="logo"></a>
        </HeaderLeft>
        <HeaderRight>
          {links.map((link, index) => (
            <Link key={index} className="item" to={link.path}>
              {link.name}
            </Link>
          ))}
        </HeaderRight>
        <Search></Search>
        <div className="creator">创作者中心</div>
        <div className="login">登录</div>
      </div>
    </HeaderWrapper>
  );
};

export default memo(Header);
