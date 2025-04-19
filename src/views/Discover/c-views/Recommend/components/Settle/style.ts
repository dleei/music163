import styled from "styled-components";

const SettleWrapper = styled.div`
  padding: 0 20px;
  .title {
    position: relative; 
    &::after {
      display: block;
      content: "";
      width: 100%;
      height: 0.5px;
      background-color: #d3d3d3;
      position: absolute;
      bottom: -10px; 
      left: 0;
    }
  }
`;

export default SettleWrapper;
