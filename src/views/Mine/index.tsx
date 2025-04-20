import { memo } from "react";
import type { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import { MineWrapper } from "./style";

interface IProps {
  children?: ReactNode;
}

const Mine: FC<IProps> = () => {
  const isLogin = false;
  const navigate = useNavigate();
  return (
    <MineWrapper>
      <div className="common-width">
        {isLogin ? (
          <div>{1}</div>
        ) : (
          <div className="mine">
            <div className="click-layer" onClick={() => navigate("/login")}></div>
          </div>
        )}
      </div>
    </MineWrapper>
  );
};

export default memo(Mine);
