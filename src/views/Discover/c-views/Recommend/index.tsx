import { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import { RecommendWrapper, Left, Right } from "./style";
import { Carousel } from "@arco-design/web-react";

import { getBanner } from "@/apis/modules/banner";
import { getHotList } from "@/apis/modules/songs";
import type { Banner } from "@/types";
import Title from "./components/Title";

interface IProps {
  children?: ReactNode;
}

const Recommend: FC<IProps> = () => {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [subTitle, setSubTile] = useState([]);

  useEffect(() => {
    getBanner().then(({ banners }) => {
      setBanners(banners);
    });

    getHotList().then(({ tags }) => {
      // debugger
      setSubTile(tags);
    });
  }, [banners, subTitle]);

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
        <Left className="flex-1 px-5 py-5">
          <Title title="热门推荐" subTitle={subTitle} />
        </Left>
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
