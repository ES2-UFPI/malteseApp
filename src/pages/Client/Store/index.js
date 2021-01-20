import React, { useEffect, useState, useContext } from 'react';

import api from '~/services/api';
import { ProductCard } from '~/components/theme';
import { FridgeContext } from '~/context/FridgeProvider';

import { Container, Title, ProductList } from './styles';

const Store = ({ route }) => {
  const [storeItens, setStoreItens] = useState(null);

  const { handleAddProductInFridge } = useContext(FridgeContext);

  useEffect(() => {
    async function loadData() {
      const { storeId } = route.params;
      const response = await api.get(`/providers/${storeId}/showProducts`);
      const parsedData = response.data.map(data => {
        const { product } = data;
        if (data.status === 'active') {
          return {
            ...product,
            _id: product._id,
            storeId,
            stock: 20,
            image: product.image_url,
            title: product.name,
            price: product.price,
          };
        }
      });
      setStoreItens(parsedData);
    }
    if (!storeItens) {
      loadData();
    }
  }, []);

  return (
    <Container>
      <ProductList
        numColumns={2}
        columnWrapperStyle={{ flexWrap: 'wrap' }}
        keyExtractor={item => item._id}
        data={storeItens}
        renderItem={({ item }) => (
          <ProductCard
            key={item._id}
            title={item.title}
            imageSource={item.image}
            price={item.price}
            handlePress={() => handleAddProductInFridge(item)}
          />
        )}
      />
    </Container>
  );
};

export default Store;
