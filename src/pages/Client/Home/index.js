import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import api from '~/services/api';

import { Card } from '~/components/theme';

import {
  Container,
  HighlightStoreContainer,
  HighlightStoreButton,
  HighlightStoreImage,
  SectionContainer,
  SectionTitle,
  StoresList,
} from './styles';

const Home = () => {
  const [stores, setStores] = useState(null);
  const [featuredStore, setFeaturedStore] = useState(null);

  const navigation = useNavigation();

  const handleNavigation = item => {
    navigation.navigate('Store', {
      storeName: item.name,
      storeId: item.id,
    });
  };
  const offlineImages = [
    'https://i.pinimg.com/736x/c9/16/fe/c916fe7180512f99488b94f567db0cf7.jpg',
    'https://demortalz.com/wp-content/uploads/2013/01/bridges_pub_creative_and_amazing_logo_designs.jpg',
    'https://cdn.dribbble.com/users/5340/screenshots/6013523/andalusiacattleco.jpg?compress=1&resize=800x600',
    'http://theworthybrewfest.com/worthy/wp-content/uploads/2015/06/Amherst-Brewing-Company-logo.png',
  ];
  useEffect(() => {
    async function loadData() {
      const response = await api.get('providers');
      const parsedData = response.data.map((provider, index) => ({
        id: provider._id,
        name: provider.name,
        coverPhoto: offlineImages[index],
      }));
      setStores(parsedData);
      setFeaturedStore(parsedData[0]);
    }
    if (!stores) {
      loadData();
    }
  });
  return (
    <Container>
      <HighlightStoreContainer>
        <HighlightStoreButton onPress={() => handleNavigation(stores[0])}>
          <HighlightStoreImage
            resizeMode="cover"
            source={{
              uri:
                'https://www.adeevee.com/aimages/201705/18/cerveceria-tulum-its-time-for-outdoor-print-395525-adeevee.jpg',
            }}
          />
        </HighlightStoreButton>
      </HighlightStoreContainer>

      <SectionContainer>
        <SectionTitle primaryFont>Lojas exclusivas</SectionTitle>
        <StoresList
          data={stores}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Card
              handlePress={() => handleNavigation(item)}
              title={item.name}
              imageSource={{
                uri: item.coverPhoto,
              }}
            />
          )}
        />
      </SectionContainer>
      <SectionContainer>
        <SectionTitle primaryFont>Lojas com desconto</SectionTitle>
        <StoresList
          data={stores}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Card
              handlePress={() => handleNavigation(item)}
              title={item.name}
              imageSource={{
                uri: item.coverPhoto,
              }}
            />
          )}
        />
      </SectionContainer>
      <SectionContainer>
        <SectionTitle primaryFont>Lojas perto de você</SectionTitle>
        <StoresList
          data={stores}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Card
              handlePress={() => handleNavigation(item)}
              title={item.name}
              imageSource={{
                uri: item.coverPhoto,
              }}
            />
          )}
        />
      </SectionContainer>
    </Container>
  );
};

export default Home;
