import { memo, useState } from "react";
import type { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";
import Search from "@/components/Search";

interface IProps {
  children?: ReactNode;
  onLoginClick?: () => void;
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

  const [showLogin, setShowLogin] = useState(false);

  const onLogin = () => {
    setShowLogin(true);
  };

  return (
    <HeaderWrapper className=" common-width">
      <div className="flex justify-between h-full">
        <HeaderLeft className="flex">
          <a onClick={() => navigate("/")}>
            <div className="logo"></div>
          </a>
          {links.map((link) => (
            <div
              className="text-[#ccc] h-full px-5 flex items-center cursor-pointer hover:bg-[#000] cursor-pointer"
              onClick={() => navigate(link.path)}
              key={link.name}
            >
              {link.name}
            </div>
          ))}
        </HeaderLeft>
        <HeaderRight className="flex items-center">
          <Search />
          <div className=" w-[90px] h-[28px] flex-center px-1 mx-3 text-xs cursor-pointer hover:border-[#fff] text-[#ccc] rounded-[14px] border-width-[1px] border-solid border-[#ccc]">
            创作者中心
          </div>
          <div
            onClick={onLogin}
            className=" text-xs text-[#787878] cursor-pointer hover:text-[#fff]"
          >
            登录
          </div>
        </HeaderRight>
      </div>
    </HeaderWrapper>
  );
};

export default memo(Header);
