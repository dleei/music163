import styled from 'styled-components';

const ModalWrapper = styled.div`
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }

  .modal-content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px;
    border-radius: 8px;
    z-index: 1000;
    min-width: 400px;

    .title {
      font-size: 20px;
      margin-bottom: 15px;
      
      .close-icon {
        cursor: pointer;
        &:hover {
          color: #666;
        }
      }
    }

    .content {
      padding: 15px 0;
    }
  }
`;

export default ModalWrapper;