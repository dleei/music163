import { memo } from "react";
import type { FC, ReactNode } from "react";
import ModalWrapper from "./style";
import { CSSTransition } from "react-transition-group";

import LoginForm from "../LoginForm";

interface IProps {
  children?: ReactNode;
  onClose?: () => void;
}

const Modal: FC<IProps> = ({ onClose }) => {
  return (
    <ModalWrapper>
      <CSSTransition in={true} timeout={300} classNames="fade" unmountOnExit>
        <div className="mask" onClick={onClose} />
      </CSSTransition>

      <CSSTransition in={true} timeout={300} classNames="slide" unmountOnExit>
        <div className="modal-content">
          <div className="title px-3 py-3 bg-[#333] flex justify-between items-center">
            <span className="text-xs text-[#fff]">登录</span>
            <span
              className="close-icon cursor-pointer hover:text-[#fff] transition-colors"
              onClick={onClose}
            >
              ❌
            </span>
          </div>
          <div className="content p-6">
            <LoginForm></LoginForm>
          </div>
        </div>
      </CSSTransition>
    </ModalWrapper>
  );
};

export default memo(Modal);
