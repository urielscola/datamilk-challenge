import React from 'react';
import { SpaceProps, LayoutProps } from 'styled-system';
import * as Styles from './styles';

type Props = SpaceProps & LayoutProps;

const Loader: React.FC<Props> = () => (
  <Styles.Overlay>
    <Styles.Container />
  </Styles.Overlay>
);

export default Loader;
