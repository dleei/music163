import { memo } from "react";
import type { FC, ReactNode } from "react";
import { RankingListWrapper } from "./style";

interface IProps {
  children?: ReactNode;
}

const RankingList: FC<IProps> = () => {
  return (
    <RankingListWrapper>
      <div>排行榜</div>
    </RankingListWrapper>
  );
};

export default memo(RankingList);
