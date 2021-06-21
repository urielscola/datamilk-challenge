import styled from 'styled-components/macro';
import { medias } from 'assets/styles';

export const Container = styled('div')`
  padding: 30px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.green};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;

  ${medias.greaterThan('lg')`
    min-height: 450px;
  `};
`;
