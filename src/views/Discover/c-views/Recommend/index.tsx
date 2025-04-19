import { memo } from "react";
import type { FC, ReactNode } from "react";
import { RecommendWrapper, Left, Right } from "./style";

import HotRecommend from "./components/HotRecommend";
import NewAlbum from "./components/NewAlbum";
import TopList from "./components/TopList";
import Banner from "./components/Banner";

interface IProps {
  children?: ReactNode;
}

const Recommend: FC<IProps> = () => {
  return (
    <RecommendWrapper>
      <div className="recommend common-width">
        <Banner></Banner>
      </div>
      <div className="common-width flex justify-between">
        {/* 左侧区域 */}
        <Left className="flex-1 py-5">
          <div className="px-5">
            {/* 热门推荐 */}
            <HotRecommend></HotRecommend>
            {/* 新碟上架 */}
            <NewAlbum></NewAlbum>
            {/* 榜单 */}
            <TopList></TopList>
          </div>
        </Left>
        {/* 右侧区域 */}
        <Right>
          <div className="w-[250px]">
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
          </div>
        </Right>
      </div>
    </RecommendWrapper>
  );
};

export default memo(Recommend);
