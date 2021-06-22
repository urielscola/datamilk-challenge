import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Text, FlexDiv } from 'components';
import * as Styles from './styles';

const Header: React.FC = () => {
  return (
    <Styles.Container>
      <Container>
        <FlexDiv justifyContent={{ default: 'space-between' }}>
          <Text as="h1" appearence="dark1">
            <Link to="/">Home</Link>
          </Text>
          <Text as="h2" appearence="dark1">
            <Link to="/top-ranked">Top Ranked</Link>
          </Text>
        </FlexDiv>
      </Container>
    </Styles.Container>
  );
};

export default Header;
