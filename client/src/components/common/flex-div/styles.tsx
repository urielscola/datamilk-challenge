import styled from 'styled-components/macro';
import { flexbox, space, layout, position, color } from 'styled-system';

interface ContainerProps {
  [key: string]: any;
}
export const Container = styled('div')<ContainerProps>`
  position: relative;
  ${flexbox};
  ${layout}
  ${space};
  ${position};
  ${color};
`;
