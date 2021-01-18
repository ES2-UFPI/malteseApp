import React, { useState, useEffect, useContext } from 'react';

import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '~/context/AuthProvider';
import api from '~/services/api';

import { ProductCard } from '~/components/theme';

import { Container, ProductsList } from './styles';

const Products = () => {
  const [storeProducts, setStoreProducts] = useState(null);
  const { user } = useContext(AuthContext);

  const navigation = useNavigation();

  useEffect(() => {
    async function loadData() {
      const storeId = user._id;
      const response = await api.get(`/providers/${storeId}/showProducts`);
      const parsedData = response.data.map(data => {
        const { product } = data;
        if (data.status === 'active') {
          return {
            ...product,
            _id: product._id,
            storeId,
            stock: data.quantity,
            image: product.image_url,
            title: product.name,
            price: product.price,
          };
        }
      });
      setStoreProducts(parsedData);
    }
    if (!storeProducts) {
      loadData();
    }
  }, []);

  const handleNavigation = product => {
    navigation.navigate('ManageProduct', { product });
  };

  return (
    <Container>
      <ProductsList
        keyExtractor={item => item.id}
        data={storeProducts}
        renderItem={({ item }) => (
          <ProductCard
            imageSource={item.image}
            title={item.title}
            price={item.price}
            buttonText="Gerenciar"
            handlePress={() => handleNavigation(item)}
          />
        )}
      />
    </Container>
  );
};

export default Products;
