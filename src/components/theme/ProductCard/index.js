import React from 'react';

import {
  Container,
  Image,
  DetailsContainer,
  Title,
  ProductStarsContainer,
  ProductStarsValue,
} from './styles';
import boxShadow from '~/constants/boxShadow';
import Icon from '~/components/global/Icon';

const Card = ({ title, imageSource, handlePress }) => {
  return (
    <Container style={boxShadow.default} onPress={handlePress}>
      <Image source={imageSource} resizeMode="stretch" />
      <DetailsContainer>
        <Title>{title}</Title>
        <ProductStarsContainer>
          <ProductStarsValue>5</ProductStarsValue>
          <Icon usePrimaryColor name="beer" />
        </ProductStarsContainer>
      </DetailsContainer>
    </Container>
  );
};

export default Card;
