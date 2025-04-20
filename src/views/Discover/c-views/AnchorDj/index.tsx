import { memo } from "react";
import type { FC, ReactNode } from "react";
import { AnchorDjWrapper } from "./style";

interface IProps {
  children?: ReactNode;
}

const AnchorDj: FC<IProps> = () => {
  return (
    <AnchorDjWrapper>
      <div className='common-width'>主播电台</div>
    </AnchorDjWrapper>
  );
};

export default memo(AnchorDj);
