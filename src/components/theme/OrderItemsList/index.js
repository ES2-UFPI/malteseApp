import React from 'react';

import ProductCard from '../ProductCard';
import {
  FlatList,
  Container,
  ItemTitle,
  DetailsContainer,
  Image,
  Price,
} from './styles';

const OrderItemsList = ({ data }) => {
  return (
    <>
      {data && (
        <FlatList
          data={data.items}
          keyExtractor={item => item._id}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Container>
              <Image
                source={{ uri: item.product.image_url }}
                resizeMode="contain"
              />
              <DetailsContainer>
                <ItemTitle>{item.product.name}</ItemTitle>
                <Price>{`R$ ${item.product.price.toFixed(2)}`}</Price>
                <ItemTitle>{`Qntd:  ${item.quantity}`}</ItemTitle>
              </DetailsContainer>
            </Container>
          )}
        />
      )}
    </>
  );
};

export default OrderItemsList;
