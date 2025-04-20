import { memo } from "react";
import type { FC, ReactNode } from "react";
import { CloudDiscoverWrapper } from "./style";

interface IProps {
  children?: ReactNode;
}

const CloudDiscover: FC<IProps> = () => {
  return (
    <CloudDiscoverWrapper>
      <div className='common-width'>云推歌</div>
    </CloudDiscoverWrapper>
  );
};

export default memo(CloudDiscover);
