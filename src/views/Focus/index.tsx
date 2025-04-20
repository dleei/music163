import { memo } from "react";
import type { FC, ReactNode } from "react";
import { FocusWrapper } from "./style";

interface IProps {
  children?: ReactNode;
}

const Focus: FC<IProps> = () => {
  return (
    <FocusWrapper>
      <div className='common-width'>关注</div>
    </FocusWrapper>
  );
};

export default memo(Focus);
