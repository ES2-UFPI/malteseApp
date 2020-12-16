import React, { useContext } from 'react';

import { FridgeContext } from '~/context/FridgeProvider';
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
  const {
    fridgeItens,
    fridgeTotal,
    handleDecreaseProduct,
    handleIncreaseProduct,
  } = useContext(FridgeContext);

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
          <TotalValue>{`R$ ${fridgeTotal}`}</TotalValue>
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
