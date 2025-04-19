import { memo } from "react";
import type { FC, ReactNode } from "react";

import VipCardWrapper from "./style";

interface IProps {
  children?: ReactNode;
}

const VipCard: FC<IProps> = () => {
  return (
    <VipCardWrapper>
      <div className="bg-gradient-to-t from-#e1e1e1 to-#fff pb-4">
        <img
          className="w-[250px] mx-auto"
          src={new URL("@/assets/imgs/dis_vip_card.png", import.meta.url).href}
        />
        <div className="py-4 mx-4 text-xs text-#666">
          登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
        </div>
        <div className="w-[100px] h-[31px] mx-auto bg-#C90C13 color-#fff flex-center hover:bg-#E12128 rounded-sm cursor-pointer">
          用户登录
        </div>
      </div>
    </VipCardWrapper>
  );
};

export default memo(VipCard);
