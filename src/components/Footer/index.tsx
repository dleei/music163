import { memo } from "react";
import type { FC, ReactNode } from "react";

import FooterWrapper from "./style";

interface IProps {
  children?: ReactNode;
}

const Footer: FC<IProps> = () => {
  return <FooterWrapper>
    <div className='footer m-center common-width'>footer</div>
  </FooterWrapper>;
};

export default memo(Footer);
