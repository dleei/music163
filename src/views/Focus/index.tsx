import { memo } from "react";
import type { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import { FocusWrapper } from "./style";

interface IProps {
  children?: ReactNode;
}

const Focus: FC<IProps> = () => {
  const isLogin = false;
  const navigate = useNavigate();
  
  return (
    <FocusWrapper>
           <div className="common-width">
        {isLogin ? (
          <div>{1}</div>
        ) : (
          <div className="focus">
            <div className="click-layer" onClick={() => navigate("/login")}></div>
          </div>
        )}
      </div>
    </FocusWrapper>
  );
};

export default memo(Focus);
