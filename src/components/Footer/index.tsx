import { memo } from "react";
import type { FC, ReactNode } from "react";

import FooterWrapper from "./style";

interface IProps {
  children?: ReactNode;
}

const Footer: FC<IProps> = () => {
  return (
    <FooterWrapper>
      <div className="footer h-[325px] bg-[#f2f2f2]">
        <div className="content m-center common-width">footer</div>
      </div>
    </FooterWrapper>
  );
};

export default memo(Footer);
