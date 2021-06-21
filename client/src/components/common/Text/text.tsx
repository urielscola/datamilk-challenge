import React from 'react';
import { TypographyProps, SpaceProps, ColorProps } from 'styled-system';
import * as Styles from './styles';

interface CustomProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: 'p' | 'span' | 'b' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label';
  size?: 'small' | 'normal' | 'medium';
  appearence?: 'light' | 'dark1' | 'dark2' | 'dark3';
  [key: string]: any;
}

type Props = CustomProps & TypographyProps & SpaceProps & ColorProps;

const Text: React.FC<Props> = ({ as = 'p', children, ...props }) => (
  <Styles.Component as={as} {...props} data-testid="text">
    {children}
  </Styles.Component>
);

export default Text;

Text.defaultProps = {
  size: 'normal',
  font: 'dark3',
};
