import React from 'react';

import { Container, Title } from './styles';

import { Card } from '~/components/theme';

const Home = () => {
  return (
    <Container>
      <Title primaryFont>Welcome to maltese</Title>
      <Card
        title="Amherst"
        subtitle="The best artesanal brew in town"
        imageSource={{
          uri:
            'http://theworthybrewfest.com/worthy/wp-content/uploads/2015/06/Amherst-Brewing-Company-logo.png',
        }}
      />
    </Container>
  );
};

export default Home;
