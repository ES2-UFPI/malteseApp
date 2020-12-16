import React, { useState } from 'react';

import { Alert } from 'react-native';
import { Product } from '~/components/fridge';
import { Icon } from '~/components/global';
import {
  Container,
  Title,
  ProductsList,
  TotalContainer,
  TotalValueContainer,
  TotalTitle,
  TotalValue,
  CheckoutButton,
  CheckoutButtonText,
} from './styles';

const Fridge = () => {
  const [fridgeItens, setFridgeItens] = useState([
    {
      _id: '123',
      quantity: 12,
      title: 'Breja',
      price: 10.2,
      total: 122.4,
      stock: 100,
      image: 'https://loja.salvacraftbeer.com.br/anexos/produtos/0014788.png',
    },
    {
      _id: '1234',
      quantity: 5,
      title: 'Breja',
      price: 10.2,
      total: 51.0,
      stock: 100,
      image: 'https://loja.salvacraftbeer.com.br/anexos/produtos/0014788.png',
    },
    {
      _id: '12354',
      quantity: 1,
      title: 'Breja',
      price: 10.2,
      total: 10.2,
      stock: 100,
      image: 'https://loja.salvacraftbeer.com.br/anexos/produtos/0014788.png',
    },
  ]);

  const handleIncreaseProduct = product => {
    const updatedProducts = fridgeItens.map(item => {
      if (product._id === item._id) {
        const updatedQuantity = item.quantity + 1;

        if (product.stock >= updatedQuantity) {
          const total = parseFloat(
            (product.price * updatedQuantity).toFixed(2),
          );

          return {
            ...item,
            quantity: updatedQuantity,
            total,
          };
        }
        alert('Produto atingiu o estoque');
      }
      return item;
    });
    setFridgeItens(updatedProducts);
  };

  const handleRemoveFromFridge = product => {
    Alert.alert('', `Você quer tirar a ${product.title} da geladeira ?`, [
      {
        text: 'Nunca',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Sim :/',
        onPress: () => {
          const updatedProducts = fridgeItens.filter(
            item => item._id !== product._id,
          );
          setFridgeItens(updatedProducts);
        },
      },
    ]);
  };

  const handleDecreaseProduct = product => {
    const updatedProducts = fridgeItens.map(item => {
      if (product._id === item._id) {
        const updatedQuantity = item.quantity - 1;

        if (updatedQuantity >= 1) {
          const total = parseFloat(
            (product.price * updatedQuantity).toFixed(2),
          );
          return {
            ...item,
            quantity: updatedQuantity,
            total,
          };
        }
        handleRemoveFromFridge(product);
      }
      return item;
    });
    setFridgeItens(updatedProducts);
  };

  const fridgeTotal = () => {
    const total = fridgeItens.reduce(
      (previous, current) => previous + current.total,
      0,
    );
    return total.toFixed(2);
  };

  return (
    <Container>
      <Title primaryFont>Sua geladeira</Title>
      <ProductsList
        data={fridgeItens}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <Product
            product={item}
            handleIncreaseProduct={() => handleIncreaseProduct(item)}
            handleDecreaseProduct={() => handleDecreaseProduct(item)}
          />
        )}
      />
      <TotalContainer>
        <TotalValueContainer>
          <TotalTitle>Total</TotalTitle>
          <TotalValue>{`R$ ${fridgeTotal()}`}</TotalValue>
        </TotalValueContainer>
        <CheckoutButton>
          <CheckoutButtonText primaryFont>Finalizar Pedido</CheckoutButtonText>
          <Icon name="arrow-forward" color="#fff" size={14} />
        </CheckoutButton>
      </TotalContainer>
    </Container>
  );
};

export default Fridge;
