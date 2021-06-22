import styled from 'styled-components/macro';
import { space, layout } from 'styled-system';
import { medias } from 'assets/styles';

export const Container = styled('div')`
  padding: 30px;
  width: 100%;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: ${({ theme }) => theme.layout.borderRadius};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;

  ${medias.greaterThan('lg')`
    min-height: 450px;
  `};

  ${space};
  ${layout};
`;
