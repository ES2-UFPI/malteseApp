import React, { useEffect, useState } from 'react';

import api from '~/services/api';
import { ProductCard } from '~/components/theme';
import {
  Container,
  Title,
  ProductListContainer,
  SelectedProductsList,
  SelectedProductContainer,
  SelectedProductImage,
  SelectedProductDetails,
  SelectedProductText,
  Button,
  ButtonText,
} from './styles';

const Store = ({ route }) => {
  const [storeItens, setStoreItens] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState([]);

  const handleSelectProduct = item => {
    const productAlreadySelected = selectedProduct.find(
      product => product._id === item._id,
    );
    if (productAlreadySelected) {
      const updatedProducts = selectedProduct.map(product => {
        if (product._id === item._id) {
          const updatedQuantity = product.quantity + 1;

          if (item.quantity >= updatedQuantity) {
            return {
              ...product,
              quantity: updatedQuantity,
            };
          }
          alert('Produto atingiu o estoque');
        }
        return product;
      });
      setSelectedProduct(updatedProducts);
    } else {
      setSelectedProduct([{ ...item, quantity: 1 }]);
    }
  };

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
      <ProductListContainer>
        {storeItens &&
          storeItens.map(item => (
            <ProductCard
              key={item._id}
              title={item.title}
              imageSource={item.image}
              handlePress={() => handleSelectProduct(item)}
            />
          ))}
      </ProductListContainer>
      <Title>Selected Products: </Title>
      {selectedProduct.length !== 0 && (
        <SelectedProductsList
          data={selectedProduct}
          keyExtractor={item => item._id}
          renderItem={({ item }) => (
            <SelectedProductContainer>
              <SelectedProductImage source={item.image} resizeMode="contain" />
              <SelectedProductDetails>
                <SelectedProductText>{item.title}</SelectedProductText>
                <SelectedProductText>
                  Quantity:
                  {item.quantity}
                </SelectedProductText>
              </SelectedProductDetails>
            </SelectedProductContainer>
          )}
          ListFooterComponent={() => (
            <Button
              onPress={() => {
                alert('Pedido feito');
              }}
            >
              <ButtonText>Make order</ButtonText>
            </Button>
          )}
        />
      )}
    </Container>
  );
};

export default Store;
