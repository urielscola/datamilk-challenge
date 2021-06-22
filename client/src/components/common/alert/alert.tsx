import React from 'react';
import { positions } from 'react-alert';
import * as Styles from './styles';

export const alertConfig = {
  timeout: 4000,
  position: positions.TOP_RIGHT,
  offset: '30px 30px 0 0',
  containerStyle: {
    zIndex: 999999,
  },
};

export const AlertTemplate: React.FC<any> = ({
  style,
  options,
  message,
  close,
}) => (
  <div style={style} id={options.type}>
    <Styles.Container type={options.type}>
      <Styles.Content>{message}</Styles.Content>
      <Styles.Close onClick={close}>X</Styles.Close>
    </Styles.Container>
  </div>
);
