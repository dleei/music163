import styled from "styled-components";

const FooterContainer = styled.div`
  box-sizing: border-box;
  .link {
    &::after {
      content: "";
      display: inline-block;
      width: 1px;
      height: 12px;
      background-color: #d9d9d9;
      margin: 0 6px;
    }

    &:last-child::after {
      content: none;
    }
  }
`;

export default FooterContainer;
