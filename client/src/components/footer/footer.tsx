import React from 'react';
import { Container, Text } from 'components';
import * as Styles from './styles';

const Footer: React.FC = () => {
  return (
    <Styles.Container>
      <Container>
        <Text appearence="dark1">
          © 2021 Creator Name. Nunc velit egestas diam sapien faucibus
          parturient.
        </Text>
      </Container>
    </Styles.Container>
  );
};

export default Footer;
