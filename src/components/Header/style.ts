import styled from "styled-components";

const HeaderWrapper = styled.div``;

const HeaderLeft = styled.div`
  .logo-link {
    display: inline-block;
    width: 177px;
    height: 75px;
  }

  .logo {
    width: 177px;
    height: 75px;
    display: block;
    line-height: 75px;
    padding: 0;
    margin: 0;
  }
  
  .link {
    color: #ccc;
    &:hover {
      background-color: #000;
      cursor: pointer;
    }
  }
`;

const HeaderRight = styled.div`
  .creator {
    width: 90px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 14px;
    border: 1px solid #ccc;
    margin: 0 15px;
    color: #ccc;
    font-size: 12px;
    cursor: pointer;
    
    &:hover {
      border-color: #fff;
    }
  }
  
  .login {
    font-size: 12px;
    color: #787878;
    cursor: pointer;
  }
`;

export { HeaderWrapper, HeaderLeft, HeaderRight };
