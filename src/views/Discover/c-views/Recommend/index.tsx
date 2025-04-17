import { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import { RecommendWrapper, Left, Right } from "./style";
import { Carousel } from "@arco-design/web-react";

import { getBanner } from "@/apis/modules/banner";
import {
  getHotList,
  getRecommendList,
  getNewAlbum,
  getTopList,
} from "@/apis/modules/songs";
import type { Banner, CardType, AlbumDataType } from "@/types";
import Title from "./components/Title";
import Card from "./components/Card";
import AlbumCard from "./components/AlbumCard";
import TopTable from "./components/TopData";
// import Icon from "@/components/Icon";

interface IProps {
  children?: ReactNode;
}

const Recommend: FC<IProps> = () => {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [subTitle, setSubTile] = useState([]);
  const [cardsInfo, setCardsInfo] = useState<CardType[]>([]);
  const [albums, setAlbums] = useState<AlbumDataType[]>([]);
  const [topList, setTopList] = useState([]);

  useEffect(() => {
    getBanner().then(({ banners }) => {
      setBanners(banners);
    });

    getHotList().then(({ tags }) => {
      setSubTile(tags);
    });

    getRecommendList().then(({ result }) => {
      setCardsInfo(result); // 这里返回的是对象数组为什么下面的类型错误
    });

    getNewAlbum({
      area: "ALL",
      type: "hot",
    }).then(({ weekData }) => {
      // console.log(weekData);

      setAlbums(weekData);

      // debugger;
    });

    getTopList().then(({ list }) => {
      // console.log(list);
      setTopList(list.slice(0,3));
    });
  }, []);

  return (
    <RecommendWrapper>
      <div className="recommend common-width">
        <Carousel
          autoPlay
          showArrow="always"
          indicatorPosition="bottom"
          moveSpeed={100}
          style={{
            width: 850,
            height: 284,
          }}
        >
          {banners.map((item, index) => (
            <div key={index}>
              <img
                src={item.imageUrl}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
          ))}
        </Carousel>
        <div className="download flex-1 flex flex-col justify-end">
          <div className="h-[284px] position-relative">
            <img src={new URL("@/assets/imgs/down_client.png", import.meta.url).href} />
            <div className="tips">PC 安卓 iPhone WP iPad Mac 六大客户端</div>
          </div>
        </div>
      </div>
      <div className="common-width flex justify-between">
        {/* 左侧区域 */}
        <Left className="flex-1 py-5">
          <div className="px-5">
            {/* 热门推荐 */}
            <Title title="热门推荐" subTitle={subTitle} />
            <div className="flex justify-around mt-6 flex-wrap gap-5">
              {cardsInfo.slice(0, 10).map((card: CardType) => (
                <Card key={card.id} info={card}></Card>
              ))}
            </div>
            {/* 新碟上架 */}
            <Title title="新碟上架" />
            <div className="my-6">
              <div className="h-[185px] w-full flex gap-2  bg-#f5f5f5 border-solid border-#d3d3d3 border-width-[0.5px] py-4 box-border">
                <div className="scroll-box m-auto flex gap-3 w-[680px] overflow-hidden">
                  {/* <Icon name="left"></Icon> */}
                  {albums.slice(0, 10).map((item, index) => (
                    <AlbumCard key={index} albums={item}></AlbumCard>
                  ))}
                  {/* <Icon name="right"></Icon> */}
                </div>
              </div>
            </div>

            {/* 榜单 */}
            <Title title="榜单" />
            <TopTable columns={topList}></TopTable>
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
