import styled from "styled-components";

const NavWrapper = styled.div`
  .link {
    padding: 0 27px;
    height: 30px;
    display: inline-flex;
    line-height: 30px;
    &:nth-child(1) {
      margin-left: 80px;
    }

    &.active {
      background-color: #9b0909;
    }
  }
`;

export { NavWrapper };
