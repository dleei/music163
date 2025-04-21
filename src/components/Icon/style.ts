import styled from 'styled-components';
import { SVGProps } from 'react';

interface IconWrapperProps extends SVGProps<SVGSVGElement> {
  size?: string;
}

const IconWrapper = styled.svg<IconWrapperProps>`
  width: ${({ size }) => size || '1.5rem'};
  height: ${({ size }) => size || '1.5rem'};
  fill: ${({ color }) => color};
  transition: transform 0.3s ease;

  &.rotate {
    transform: rotate(180deg);
  }
`;

export { IconWrapper };