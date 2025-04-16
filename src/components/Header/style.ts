import styled from "styled-components";

const HeaderWrapper = styled.div`
  .header {
    display: flex;
    align-items: center;
    font-size: 12px;
    justify-content: space-between;
    width: 100%;

    .creator {
      width: 90px;
      height: 32px;
      border-radius: 16px;
      border: 1px solid #4f4f4f;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ccc;
      cursor: pointer;
      margin-left: 10px;
      &:hover {
        border-color: #fff;
      }
    }
    .login {
      color: #787878;
      cursor: pointer;
    }
  }
`;

const HeaderLeft = styled.div`
  .logo {
    width: 157px;
    height: 33px;
    display: block;
    background: url("@/assets/imgs/topbar.png") no-repeat 0 -19px;
  }
`;
const HeaderRight = styled.div`
  .item {
    color: #ccc;
    padding: 0 19px;
    font-size: 14px;
    display: inline-flex;
    line-height: 70px;
    &:hover {
      background-color: #000;
      color: #fff;
    }
  }
`;

export { HeaderWrapper, HeaderLeft, HeaderRight };
