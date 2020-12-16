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
  EmptyStateContainer,
  EmptyStateTitle,
} from './styles';

const Fridge = () => {
  const {
    fridgeItens,
    fridgeTotalValue,
    handleDecreaseProduct,
    handleIncreaseProduct,
  } = useContext(FridgeContext);

  return (
    <Container>
      <Title primaryFont>Sua geladeira</Title>
      {fridgeItens.length > 0 ? (
        <>
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
              <TotalValue>{`R$ ${fridgeTotalValue}`}</TotalValue>
            </TotalValueContainer>
            <CheckoutButton>
              <CheckoutButtonText primaryFont>
                Finalizar Pedido
              </CheckoutButtonText>
              <Icon name="arrow-forward" color="#fff" size={14} />
            </CheckoutButton>
          </TotalContainer>
        </>
      ) : (
        <EmptyStateContainer>
          <Icon name="fridge-off" color="#bbb" size={50} communityIcons />
          <EmptyStateTitle>
            Opa, parece que a sua geladeira está desligada, adicione umas
            cervejas pra ela ligar ;)
          </EmptyStateTitle>
        </EmptyStateContainer>
      )}
    </Container>
  );
};

export default Fridge;
