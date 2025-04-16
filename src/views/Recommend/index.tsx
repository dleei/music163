import { memo } from "react";
import type { FC, ReactNode } from "react";
import { RecommendWrapper, Left, Right } from "./style";
import { Carousel, Image } from "@arco-design/web-react";

import { bannerUrl } from "@/data/images";
import Icon from "@/components/Icon";

interface IProps {
  children?: ReactNode;
}

const Recommend: FC<IProps> = () => {
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
          }}
        >
          {bannerUrl.map((src, index) => (
            <div key={index}>
              <img
                src={src}
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
          <div className="text flex-center bg-blue rounded-sm mx-4 mb-2 cursor-pointer ">
            <Icon name="download" />
            <i className="text-[20px] text-white ml-2 h-[56px] lh-[56px]">下载客户端</i>
          </div>
          <div className="tips mb-3">PC 安卓 iPhone WP iPad Mac 六大客户端</div>
        </div>
      </div>
      <div className="common-width flex">
        <Left>
          <div className="p-5 w-[840px]"></div>
        </Left>
        <Right>
          <div className="flex-1">
            <div className="vip">
              <Image src="@/assets/imgs/dis_vip_card.png"></Image>
            </div>
          </div>
        </Right>
      </div>
    </RecommendWrapper>
  );
};

export default memo(Recommend);
