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
    .tips {
      font-size: 10px;
      color: #8d8d8d;
      position: absolute;
      bottom: 12px;
      left: 13%;
    }
  }
`;

export const Left = styled.div``;

export const Right = styled.div`
  width: 250px;
  border-left: 2px solid #e9e9e9;
  border-right: 2px solid #e9e9e9;
`;
` `;
