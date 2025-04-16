import styled from "styled-components";

export const RecommendWrapper = styled.div`
  .recommend {
    display: flex;
    .arco-carousel {
      .arco-carousel-arrow-left,
      .arco-carousel-arrow-right {
        width: 40px;
        height: 40px;
        background-color: transparent;
        &:hover {
          background-color: rgba(255, 255, 255, 0.3);
        }
      }
    }
  }
  .download {
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(10px);

    .tips {
      font-size: 10px;
      text-align: center;
      color: #8d8d8d;
    }
  }
`;

export const Left = styled.div``

export const Right = styled.div``
