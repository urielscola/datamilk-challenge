import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Text } from 'components';
import * as Styles from './styles';

const Header: React.FC = () => {
  return (
    <Styles.Container>
      <Container>
        <Text as="h1" appearence="dark1">
          <Link to="/">Home</Link>
        </Text>
      </Container>
    </Styles.Container>
  );
};

export default Header;
