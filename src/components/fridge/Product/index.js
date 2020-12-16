import React from 'react';

import {
  Container,
  Image,
  Details,
  Title,
  Price,
  QuantityContainer,
  Quantity,
  QuantityButton,
  QuantityButtonText,
} from './styles';

const Product = ({ product, handleDecreaseProduct, handleIncreaseProduct }) => {
  return (
    <Container>
      <Image source={{ uri: product.image }} resizeMode="contain" />
      <Details>
        <Title primaryFont>{product.title}</Title>
        <Price>{`R$ ${product.total}`}</Price>
        <QuantityContainer>
          <QuantityButton onPress={handleDecreaseProduct}>
            <QuantityButtonText>-</QuantityButtonText>
          </QuantityButton>
          <Quantity>{product.quantity}</Quantity>
          <QuantityButton onPress={handleIncreaseProduct}>
            <QuantityButtonText>+</QuantityButtonText>
          </QuantityButton>
        </QuantityContainer>
      </Details>
    </Container>
  );
};

export default Product;
