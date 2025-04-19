import styled from "styled-components";

const NewAlbumWrapper = styled.div`
  .arco-carousel-slide > *,
  .arco-carousel-card > *,
  .arco-carousel-fade > * {
    width: unset;
    div {
      background-color: transparent;
    }
  }

  .arco-carousel-arrow-left {
    & .arco-icon-left {
      color: #333;
      font-size: 20px;
      &:hover {
        color: #656565;
      }
    }
  }

  .arco-carousel-arrow-right {
    width: 20px;
    height: 20px;
    & .arco-icon-right {
      color: #333;
      font-size: 20px;
      &:hover {
        color: #656565;
      }
    }
  }
`;

export default NewAlbumWrapper;
