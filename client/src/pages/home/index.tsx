import React from 'react';
import { Header, Container, InfoDisplay } from 'components';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <InfoDisplay info="$10.6B" label="Market size" />
      </Container>
    </>
  );
};

export default Home;
