import React, { useState } from 'react';
import Button from '~/components/theme/Button';
import api from '~/services/api';
import { Container, Title, ButtonContainer } from './styles';

const OrderDetails = ({ route }) => {
  const {
    orderId,
    clientId,
    providerId,
    orderStatus,
    orderItems,
  } = route.params;

  const [status, setStatus] = useState(orderStatus);

  const handleConfirmStoreOrder = async () => {
    const response = await api
      .put(`orders/${orderId}`, {
        client: clientId,
        provider: providerId,
        items: orderItems,
        status: 1,
      })
      .catch(err => console.log(err));
    setStatus(response.data.status);
  };

  const handleConfirmDoneOrder = async () => {
    const response = await api
      .put(`orders/${orderId}`, {
        client: clientId,
        provider: providerId,
        items: orderItems,
        status: 2,
      })
      .catch(err => console.log(err));
    setStatus(response.data.status);
  };

  const handleDeliverOrder = async () => {
    const response = await api
      .put(`orders/${orderId}`, {
        client: clientId,
        provider: providerId,
        items: orderItems,
        status: 3,
      })
      .catch(err => console.log(err));
    setStatus(response.data.status);
  };

  const handleConfirmDeliveredOrder = async () => {
    const response = await api
      .put(`orders/${orderId}`, {
        client: clientId,
        provider: providerId,
        items: orderItems,
        status: 4,
      })
      .catch(err => console.log(err));
    setStatus(response.data.status);
  };

  const handleAction = () => {
      handleConfirmDeliveredOrder();
  };

  return (
    <Container>
      <Title>{`Pedido ${orderId}`}</Title>
      {status === 4 && <Title>Pedido entregue!</Title>}
      {status === 3 && <Title>Confirmando pedido entregue</Title> && (
        <ButtonContainer>
          <Button text="Cancelar" />
          <Button text="Confirmar" primaryButton onPress={handleAction} />
        </ButtonContainer>
      )}
    </Container>
  );
};

export default OrderDetails;
