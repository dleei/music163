import { memo, FC } from "react";
import { useNavigate } from "react-router-dom";

import { TitleWrapper } from "./style";
import Icon from "@/components/Icon";
import type { TitleProps as TitleType } from "@/types";

interface TitleProps {
  title: string;
  morePath: string;
  subTitle?: TitleType[];
}

export const Title: FC<TitleProps> = ({ title, subTitle,morePath }) => {
  
  const navigate = useNavigate();
  
  return (
    <TitleWrapper>
      <div className="left pl-3 flex items-center">
        <div className="w-[14px] h-[14px] rounded-full flex-center bg-#C10D0C">
          <div className="w-[7px] h-[7px] rounded-full  bg-#fff"></div>
        </div>
        <div className="text-[20px] text-#333 ml-3 mr-4 cursor-pointer">{title}</div>
        {subTitle?.slice(0, 5).map((item, index, arr) => (
          <span key={item.name} className="text-xs text-#666 cursor-pointer">
            {item.name}
            {index < arr.length - 1 && <span className="mx-2 text-[#ccc]">|</span>}
          </span>
        ))}
      </div>
      <div className="flex items-center text-xs" onClick={()=> {navigate(morePath)}}>
        <span className="mr-3 cursor-pointer">更多</span>
        <Icon name="right-1"></Icon>
      </div>
    </TitleWrapper>
  );
};

export default memo(Title);
