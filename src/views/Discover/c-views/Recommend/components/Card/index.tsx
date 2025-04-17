import { memo } from "react";
import type { FC, ReactNode } from "react";

import CardWrapper from "./style";
import type { CardType } from "@/types";
import Icon from "@/components/Icon";
import { format } from "@/utils";

interface IProps {
  children?: ReactNode;
  info: CardType;
}

const Card: FC<IProps> = ({ info }) => {
  return (
    <CardWrapper>
      <div className="w-[140px]">
        <div className="position-relative">
          <img className="w-full cursor-pointer" src={info.picUrl} alt="" />
          <div className="mark color-#fff text-xs  h-[27px] items-center w-full flex justify-between">
            <div className="flex items-center">
              <Icon name="headset" />
              <span className="ml-2">{format(info.playCount)}</span>
            </div>
            <Icon name="play" />
          </div>
        </div>
        <div className="text-sm text-#000 mt-2 ellipsis-2 cursor-pointer hover:border-b-black">
          {info.name}
        </div>
      </div>
    </CardWrapper>
  );
};

export default memo(Card);
