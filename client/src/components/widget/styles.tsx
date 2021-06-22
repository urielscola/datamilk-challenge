import styled from 'styled-components/macro';
import { space, layout } from 'styled-system';
import { theme } from 'assets/styles';

export const Container = styled('div')`
  background-color: ${theme.colors.white};
  border-radius: ${theme.layout.borderRadius};
  padding: 0 15px;
  width: 100%;

  ${space};
  ${layout};
`;

export const Header = styled('div')`
  padding: 20px 0;
`;
