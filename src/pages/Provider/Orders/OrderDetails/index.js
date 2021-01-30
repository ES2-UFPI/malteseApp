import React, { useState, useEffect } from 'react';
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
  const [products, setProducts] = useState(null);

  // useEffect(() => {
  //   async function loadData() {
  //     console.log('here');

  //     const items = orderItems.map(async order => {
  //       // const response = await api.get(`orders/${order._id}`);
  //       const response = await api.get(`/providers/${providerId}/showProducts`);
  //       console.log(response.data);
  //       return {};
  //     });
  //     setProducts(items);
  //   }
  //   if (!products) {
  //     loadData();
  //   }
  // }, []);

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

  const handleAction = () => {
    handleConfirmStoreOrder();
  };

  return (
    <Container>
      <Title>{`Pedido ${orderId}`}</Title>
      {status === 0 && <Title>Pedido esperando aprovação!</Title>}
      {status === 1 && <Title>Esperando entrega</Title>}
      {status === 2 && <Title>Pedido sendo entregue</Title>}
      {status === 3 && <Title>Pedido concluido</Title>}
      {/* {products && products.map( product =>
        <Title>

        </Title>)} */}
      {status === 0 && (
        <ButtonContainer>
          <Button text="Cancelar" />
          <Button text="Confirmar" primaryButton onPress={handleAction} />
        </ButtonContainer>
      )}
    </Container>
  );
};

export default OrderDetails;
