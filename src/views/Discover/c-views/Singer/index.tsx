import { memo } from "react";
import type { FC, ReactNode } from "react";
import { SingerWrapper } from "./style";

interface IProps {
  children?: ReactNode;
}

const Singer: FC<IProps> = () => {
  return (
    <SingerWrapper>
      <div className='common-width'>歌手</div>
    </SingerWrapper>
  );
};

export default memo(Singer);
