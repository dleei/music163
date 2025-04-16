import { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import { RecommendWrapper, Left, Right } from "./style";
import { Carousel } from "@arco-design/web-react";

import { getBanner } from "@/apis/modules/banner";
import type { Banner } from "@/types";

interface IProps {
  children?: ReactNode;
}

const Recommend: FC<IProps> = () => {
  const [banners, setBanners] = useState<Banner[]>([]);

  useEffect(() => {
    getBanner().then(({ banners }) => {
      setBanners(banners);
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
            width: 880,
            height: 283,
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
          <div className="h-[283px] position-relative">
            <img src={new URL("@/assets/imgs/down_client.png", import.meta.url).href} />
            <div className="tips">PC 安卓 iPhone WP iPad Mac 六大客户端</div>
          </div>
        </div>
      </div>
      <div className="common-width flex justify-between">
        <Left></Left>
        <Right>
          <div className="flex-1">
            <img
              className="w-[254px]"
              src={new URL("@/assets/imgs/dis_vip_card.png", import.meta.url).href}
            />
          </div>
        </Right>
      </div>
    </RecommendWrapper>
  );
};

export default memo(Recommend);
