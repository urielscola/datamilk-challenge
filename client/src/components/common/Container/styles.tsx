import styled from 'styled-components/macro';
import { layout, LayoutProps, space, SpaceProps } from 'styled-system';

export const Container = styled('div')<LayoutProps & SpaceProps>`
  max-width: 1070px;
  margin: auto;
  padding: 0 20px;

  @media (min-width: 1600px) {
    max-width: 1680px;
  }

  ${layout};
  ${space};
`;
