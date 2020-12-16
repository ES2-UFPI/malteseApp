import React, { useEffect, useState, useContext } from 'react';

import api from '~/services/api';
import { ProductCard } from '~/components/theme';
import { FridgeContext } from '~/context/FridgeProvider';

import {
  Container,
  Title,
  ProductListContainer,
  SelectedProductsList,
} from './styles';

const Store = ({ route }) => {
  const [storeItens, setStoreItens] = useState(null);

  const { handleAddProductInFridge } = useContext(FridgeContext);

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
      } else {
        setStoreItens([
          {
            _id: '1234',
            title: 'Exemplo',
            price: 10.2,
            total: 51.0,
            stock: 100,
            image:
              'https://loja.salvacraftbeer.com.br/anexos/produtos/0014788.png',
          },
        ]);
      }
    }

    loadData();
  }, []);

  return (
    <Container>
      <Title primaryFont>Products from Amherst</Title>
      <ProductListContainer>
        {storeItens &&
          storeItens.map(item => (
            <ProductCard
              key={item._id}
              title={item.title}
              imageSource={item.image}
              handlePress={() => handleAddProductInFridge(item)}
            />
          ))}
      </ProductListContainer>
    </Container>
  );
};

export default Store;
