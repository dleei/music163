import { memo } from "react";
import type { FC, ReactNode } from "react";
import { MineWrapper } from "./style";

interface IProps {
  children?: ReactNode;
}

const Mine: FC<IProps> = () => {
  return (
    <MineWrapper>
      <div className='common-width'>我的</div>
    </MineWrapper>
  );
};

export default memo(Mine);
