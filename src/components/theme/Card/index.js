import React from 'react';

import { Container, Title, Image } from './styles';
import boxShadow from '~/constants/boxShadow';

const Card = ({ title, imageSource, handlePress }) => {
  return (
    <Container style={boxShadow.default} onPress={handlePress}>
      <Image source={imageSource} resizeMode="stretch" />
      <Title>{title}</Title>
    </Container>
  );
};

export default Card;
