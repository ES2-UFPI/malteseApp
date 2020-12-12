import React from 'react';

import { Container, Title, Image } from './styles';
import boxShadow from '~/constants/boxShadow';

const Card = ({ title, imageSource }) => {
  return (
    <Container style={boxShadow.default}>
      <Image source={imageSource} resizeMode="stretch" />
      <Title>{title}</Title>
    </Container>
  );
};

export default Card;
