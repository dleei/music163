import { memo } from "react";
import type { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";
import Search from "@/components/Search";

interface IProps {
  children?: ReactNode;
}

const Header: FC<IProps> = () => {
  
  const navigate = useNavigate();

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
      path: "/cloud",
    },
    {
      name: "下载客户端",
      path: "/download",
    },
  ];

  return (
    <HeaderWrapper className=" common-width">
      <div className="flex justify-between h-full">
        <HeaderLeft className="flex">
          <a className="logo-link" onClick={() => navigate("/")}>
            <h1 className="logo">网易云音乐</h1>
          </a>
          {links.map((link) => (
            <div
              className="link h-full px-5 flex items-center cursor-pointer"
              onClick={() => navigate(link.path)}
              key={link.name}
            >
              {link.name}
            </div>
          ))}
        </HeaderLeft>
        <HeaderRight className="flex items-center">
          <Search />
          <div className="creator">创作者中心</div>
          <div className="login">登录</div>
        </HeaderRight>
      </div>
    </HeaderWrapper>
  );
};

export default memo(Header);
