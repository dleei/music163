import { memo } from "react";
import type { FC, ReactNode } from "react";

import { SongsOrderWrapper } from "./style";

interface IProps {
  children?: ReactNode;
}

const SingerOrder: FC<IProps> = () => {
  return (
    <SongsOrderWrapper>
      <div className="common-width">歌单</div>
    </SongsOrderWrapper>
  );
};

export default memo(SingerOrder);
