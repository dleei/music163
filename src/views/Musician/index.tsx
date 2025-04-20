import { memo } from "react";
import type { FC, ReactNode } from "react";
import { MusicianWrapper } from "./style";

interface IProps {
  children?: ReactNode;
}

const Musician: FC<IProps> = () => {
  return (
    <MusicianWrapper>
      <div className='common-width'>音乐人</div>
    </MusicianWrapper>
  );
};

export default memo(Musician);
