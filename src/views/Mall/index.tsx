import { memo } from "react";
import type { FC, ReactNode } from "react";
import { MallWrapper } from "./style";

interface IProps {
  children?: ReactNode;
}

const Mall: FC<IProps> = () => {
  return (
    <MallWrapper>
      <div>商城</div>
    </MallWrapper>
  );
};

export default memo(Mall);
