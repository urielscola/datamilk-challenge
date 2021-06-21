import React from 'react';
import {
  FlexboxProps,
  SpaceProps,
  LayoutProps,
  PositionProps,
  ColorProps,
} from 'styled-system';
import * as Styles from './styles';

type CustomProps = React.HTMLAttributes<HTMLDivElement>;

type Props = CustomProps &
  FlexboxProps &
  SpaceProps &
  PositionProps &
  ColorProps &
  LayoutProps;

const FlexDiv: React.FC<Props> = ({ children, ...props }) => (
  <Styles.Container display="flex" {...props} data-testid="flex-div">
    {children}
  </Styles.Container>
);

export default FlexDiv;
