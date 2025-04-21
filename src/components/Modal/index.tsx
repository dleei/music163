// Modal 组件
import { memo } from "react";
import type { FC, ReactNode } from "react";
import ModalWrapper from "./style";

interface IProps {
  children?: ReactNode;
  onClose?: () => void;
}

const Modal: FC<IProps> = ({ onClose }) => {
  return (
    <ModalWrapper>
      {/* 遮罩层 */}
      <div className="mask" onClick={onClose}></div>
      
      <div className="modal-content">
        <div className="title px-3 pt-3  bg-[#333] flex justify-between items-center">
          <span className='text-xs text-[#fff]'>登录</span>
          <span className="close-icon" onClick={onClose}>❌</span>
        </div>
        <div className="content">
          内容
        
        </div>
      </div>
    </ModalWrapper>
  );
};

export default memo(Modal);