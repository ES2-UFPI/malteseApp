import React from 'react';
import { View } from 'react-native';
import Button from '~/components/theme/Button';
import { Container, Title, ButtonContainer } from './styles';

const OrderDetails = ({ route }) => {
  const { orderId } = route.params;
  return (
    <Container>
      <Title>
        Pedido
        {orderId}
      </Title>
      <ButtonContainer>
        <Button text="Cancelar" />
        <Button text="Confirmar" primaryButton />
      </ButtonContainer>
    </Container>
  );
};

export default OrderDetails;
