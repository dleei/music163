import styled from "styled-components";

const InputWrapper = styled.div`
  .arco-input-inner-wrapper {
    width: 200px;
    height: 32px;
    border-radius: 16px;

    box-sizing: border-box;
    overflow: hidden;
    padding-left: 8px;
    &:focus-within {
      border-color: var(--color-primary);
    }
  }

  .arco-input-prefix {
    margin-right: 8px;
  }
`;

export { InputWrapper };
