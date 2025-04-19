import { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";

import SettleWrapper from "./style";
import { getSings, get24HourAnchor } from "@/apis";
import type { SingType, AnchorType } from "@/types";

interface IProps {
  children?: ReactNode;
}

const Settle: FC<IProps> = () => {
  const [sings, setSings] = useState<SingType[]>([]);
  const [anchors, setAnchors] = useState<AnchorType[]>([]);

  useEffect(() => {
    getSings(5).then(({ artists }) => {
      setSings(artists);
    });

    get24HourAnchor(5).then(({ data: { list } }) => {
      setAnchors(list);
      // debugger;
    });
  }, []);

  return (
    <SettleWrapper>
      <div className="mt-5 position-relative">
        <div className="title flex justify-between mb-6">
          <span className="text-xs font-bold text-[#333]">入驻歌手</span>
          <span className="text-xs cursor-pointer text-[#666]">查看全部 &gt;</span>
        </div>
        {sings.map((item) => {
          return (
            <div
              key={item.id}
              className="flex  mb-3 bg-[#fafafa] border-[#d3d3d3] border-solid border-width-[0.5px]"
            >
              <img className="w-[62px] h-[62px]" src={item.picUrl} />
              <div className="info flex-1 pl-[14px]">
                <div className="text-[14px] text-[#333] mt2 font-bold">{item.name}</div>
                {item.alias.length > 0 &&
                  item.alias.map((ele) => {
                    return (
                      <span className="text-xs text-[#666]" key={ele}>
                        {ele}
                      </span>
                    );
                  })}
              </div>
            </div>
          );
        })}

        <div
          className="flex-center rounded text-[#333] border-[#dedede] border-solid border-width-[0.5px] py-1 text-sm 
          bg-gradient-to-t from-[#f8f8f8] to-white hover:bg-white transition-colors duration-300 cursor-pointer"
        >
          申请成为网易音乐人
        </div>

        <div className="title flex justify-between mb-5 mt-4">
          <span className="text-xs font-bold text-[#333]">热门主播</span>
        </div>
        {anchors.map((item) => {
          return (
            <div key={item.id} className="flex mb-3">
              <img
                className="w-[40px] cursor-pointer"
                src={item.avatarUrl}
                alt={item.nickName}
              />
              <div className="flex-1 ml-2 text-xs text-[#333] cursor-pointer">
                {item.nickName}
              </div>
            </div>
          );
        })}
      </div>
    </SettleWrapper>
  );
};

export default memo(Settle);
