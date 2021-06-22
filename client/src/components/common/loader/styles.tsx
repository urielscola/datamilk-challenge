import styled, { keyframes } from 'styled-components/macro';
import { space, layout } from 'styled-system';

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Overlay = styled('div')`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1;
  height: 100%;
  display: flex;
  background-color: rgb(0 0 0 / 10%);
  align-items: center;
  justify-content: center;
`;

export const Container = styled('div')`
  display: inline-block;
  width: 20px;
  height: 20px;

  &:after {
    content: ' ';
    display: block;
    width: 58px;
    height: 58px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.green};
    border-color: ${({ theme }) => theme.colors.green} transparent
      ${({ theme }) => theme.colors.green} transparent;
    animation: ${spinAnimation} 1.2s linear infinite;
  }

  ${layout}
  ${space};
`;
