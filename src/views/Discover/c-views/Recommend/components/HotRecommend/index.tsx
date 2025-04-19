import { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";

import HotRecommendWrapper from "./style";
import Card from "../Card";
import Title from "../Title";
import { getHotList, getRecommendList } from "@/apis";
import type { CardType } from "@/types";

interface IProps {
  children?: ReactNode;
}

const HotRecommend: FC<IProps> = () => {
  const [subTitle, setSubTile] = useState([]);
  const [cardsInfo, setCardsInfo] = useState<CardType[]>([]);
  // 热门歌单分类
  useEffect(() => {
    getHotList().then(({ tags }) => {
      setSubTile(tags);
    });
    // 推荐歌单
    getRecommendList().then(({ result }) => {
      setCardsInfo(result);
    });
  },[]);

  return (
    <HotRecommendWrapper>
      <Title title="热门推荐" subTitle={subTitle} morePath="/discover/order" />
      <div className="flex justify-around mt-6 flex-wrap gap-5">
        {cardsInfo.slice(0, 10).map((card: CardType) => (
          <Card key={card.id} info={card}></Card>
        ))}
      </div>
    </HotRecommendWrapper>
  );
};

export default memo(HotRecommend);
