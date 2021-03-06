import React, { useState } from 'react';
import api from '~/services/api';
import {
  Container,
  Title,
  AddressContainer,
  AddressTitle,
  AddressDetails,
} from './styles';
import { OrderItemsList, OrderStatusContainer } from '~/components/theme';
import useScreenFocus from '~/hooks/useScreenFocus';

const OrderDetails = ({ route }) => {
  const {
    orderId,
    clientId,
    providerId,
    orderStatus,
    orderItems,
  } = route.params;

  const [status, setStatus] = useState(orderStatus);
  const [orderData, setOrderData] = useScreenFocus(loadOrder);
  const [selectedStars, setSelectedStars] = useState(0);

  async function loadOrder() {
    const { data } = await api.get(`orders/${orderId}`);
    setOrderData(data);
    setSelectedStars(data.rating);
  }

  const handleAction = async () => {
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

  return (
    <Container>
      <Title>{`Pedido ${orderId.substr(0, 6)}`}</Title>
      <AddressContainer>
        <AddressTitle>A ser entregue em:</AddressTitle>
        <AddressDetails>{orderData?.address}</AddressDetails>
      </AddressContainer>
      <OrderStatusContainer
        status={status}
        handleAction={handleAction}
        type="deliverer"
        rating={selectedStars}
      />
      <OrderItemsList data={orderData} />
    </Container>
  );
};

export default OrderDetails;
