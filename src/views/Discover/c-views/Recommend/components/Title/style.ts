import styled from "styled-components";

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #c10d0c;
  }
`;
