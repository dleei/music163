import { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import { Carousel } from "@arco-design/web-react";

import BannerWrapper from "./style";
import type { Banner } from "@/types";
import { getBanner } from "@/apis";

interface IProps {
  children?: ReactNode;
}

const Banner: FC<IProps> = () => {
  const [banners, setBanners] = useState<Banner[]>([]);

  useEffect(() => {
    getBanner().then(({ banners }) => {
      setBanners(banners);
    });
  }, []);

  return (
    <BannerWrapper>
      <div className="recommend">
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
    </BannerWrapper>
  );
};

export default memo(Banner);
