import React, { useContext } from 'react';
import { AuthContext } from '~/context/AuthProvider';

import api from '~/services/api';

import { Container, Title } from './styles';

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <Title>Olá Deliverer</Title>
    </Container>
  );
};

export default Home;
