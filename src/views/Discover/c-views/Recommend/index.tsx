import { memo } from "react";
import type { FC, ReactNode } from "react";
import { RecommendWrapper, Left, Right } from "./style";

import HotRecommend from "./components/HotRecommend";
import NewAlbum from "./components/NewAlbum";
import TopList from "./components/TopList";
import Banner from "./components/Banner";
import Settle from "./components/Settle";
import VipCard from "./components/VipCard";

interface IProps {
  children?: ReactNode;
}

const Recommend: FC<IProps> = () => {
  return (
    <RecommendWrapper >
      <div className="recommend  common-width">
        <Banner></Banner>
      </div>
      <div className="common-width flex justify-between bg-[#fff]">
        {/* 左侧区域 */}
        <Left className="flex-1 py-5 border-l-[#e9e9e9] border-l-1 border-l-solid">
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
        <Right className='border-l-[#e9e9e9] border-l-1 border-l-solid border-r-[#e9e9e9] border-r-1 border-r-solid'>
          <div className="w-[250px]">
            {/* 会员卡片及登录 */}
            <VipCard></VipCard>
            {/* 入驻歌手 */}
            <Settle></Settle>
          </div>
        </Right>
      </div>
    </RecommendWrapper>
  );
};

export default memo(Recommend);
