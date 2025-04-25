import styled from "styled-components";
import { rgba } from "polished";

 const ModalWrapper = styled.div`
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${rgba('#000', 0.5)};
    z-index: 999;
  }
  .title {
    border-radius: 8px 8px 0 0;
  }
  
  .content {
    color: #333;
  }

  .modal-content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    border-radius: 8px;
    min-width: 320px;
    z-index: 1000;
    box-shadow: 0 4px 12px ${rgba('#000', 0.15)};
  }

`;

export default ModalWrapper;