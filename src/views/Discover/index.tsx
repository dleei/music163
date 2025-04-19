import { memo, Suspense } from "react";
import type { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";

import { DiscoverWrapper } from "./style";
import Nav from "../../components/Nav";

interface IProps {
  children?: ReactNode;
}

const Discover: FC<IProps> = () => {
  return (
    <DiscoverWrapper>
      <div className="nav">
        <Nav></Nav>
      </div>
      <div className="bg-[#f2f2f2]">
        <Suspense fallback="">
          <Outlet></Outlet>
        </Suspense>
      </div>
    </DiscoverWrapper>
  );
};

export default memo(Discover);
