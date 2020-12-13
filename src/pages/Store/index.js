import React, { useEffect, useState } from 'react';

import api from '~/services/api';
import { Card } from '~/components/theme';
import { Container, Title } from './styles';

const Store = ({ route }) => {
  const [storeItens, setStoreItens] = useState(null);

  useEffect(() => {
    async function loadData() {
      const { storeId } = route.params;

      if (storeId) {
        const apiData = await api
          .get(`/clients/${storeId}`)
          .then(response => response.data);
        const parsedData = apiData.map(data => ({
          ...data,
          image: {
            uri:
              'https://purepng.com/public/uploads/large/purepng.com-beer-bottlebeerdrinkgoldenfoodgerman-21525885479s2s1m.png',
          },
          title: 'brew',
        }));
        setStoreItens(parsedData);
      }
    }

    loadData();
  }, []);

  return (
    <Container>
      <Title primaryFont>Products from Amherst</Title>
      {storeItens &&
        storeItens.map(item => (
          <Card key={item._id} title={item.title} imageSource={item.image} />
        ))}
    </Container>
  );
};

export default Store;
