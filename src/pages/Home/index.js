import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Title } from './styles';

import { Card } from '~/components/theme';

const Home = () => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate('Store', {
      storeId: '5fd3a2df355e16074cc7fd58',
      storeName: 'Amherst',
    });
  };

  return (
    <Container>
      <Title primaryFont>Welcome to maltese</Title>
      <Card
        handlePress={handleNavigation}
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
