import React from 'react';

import { Container, Image, DetailsContainer, Title, Price } from './styles';

import boxShadow from '~/constants/boxShadow';
import Button from '../Button';

const Card = ({ title, imageSource, price, handlePress }) => {
  return (
    <Container style={boxShadow.default}>
      <Image source={{ uri: imageSource }} resizeMode="cover" />
      <DetailsContainer>
        <Title>{title}</Title>
        <Price>{`R$ ${price.toFixed(2)}`}</Price>
        <Button text="Adicionar" onPress={handlePress} />
      </DetailsContainer>
    </Container>
  );
};

export default Card;
