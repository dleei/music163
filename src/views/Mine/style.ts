import styled from "styled-components";
import mine from "../../assets/imgs/my_music .png";

const MineWrapper = styled.div`
  .mine {
    width: 100%;
    height: 500px;
    display: block;
    background: url(${mine}) no-repeat;
    background-position: 50% 50%;
    position: relative;
    &::after {
      display: block;
      content: "";
      width: 170px;
      height: 45px;
      border-radius: 4px;
      position: absolute;
      top: 318px;
      left: 57%;
      z-index: 1; 
    }
   
    .click-layer {
      position: absolute;
      width: 170px;
      height: 45px;
      top: 318px;
      left: 57%;
      opacity: 0;
      z-index: 2;
      cursor: pointer;
    }
  }
`;

export { MineWrapper };
