import styled from "styled-components";

const LayoutWrapper = styled.div`
  .layout-container {
    .header {
      background: #242424;
      font-size: 14px;
      color: #fff;
      height: 75px;
    }
    .nav {
      color: #fff;
      background-color: #c20c0c;
      border-bottom: #a40011;
      font-size: 12px;
    }
  }
  .arco-backtop {
    bottom: 150px;
    right: 170px;
    & .arco-backtop-button {
      width: 40px;
      height: 40px;
      border-radius: 5px;
      background-color: #f5f5f5;
      border: 1px solid #d9d9d9;
    }
  }
`;

export default LayoutWrapper;
