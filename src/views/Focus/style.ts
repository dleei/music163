import styled from "styled-components";
import focus_img from "../../assets/imgs/focus.jpg";

const FocusWrapper = styled.div`
  .focus {
    width: 100%;
    height: 500px;
    display: block;
    background: url(${focus_img}) no-repeat;
    background-position: 50% 50%;

    &::after {
      display: block;
      content: "";
      width: 157px;
      height: 48px;
      border-radius: 4px;
      position: absolute;
      top: 383px;
      left: 57%;
      z-index: 1;
    }
  }
  .click-layer {
    position: absolute;
    width: 157px;
    height: 48px;
    top: 383px;
    left: 57%;
    opacity: 0;
    z-index: 2;
    cursor: pointer;
  }
`;

export { FocusWrapper };
