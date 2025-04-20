import { memo } from "react";
import type { FC, ReactNode } from "react";
import { MallWrapper } from "./style";

interface IProps {
  children?: ReactNode;
}

const Mall: FC<IProps> = () => {
  return (
    <MallWrapper>
      <div className='common-width'>商城</div>
    </MallWrapper>
  );
};

export default memo(Mall);
