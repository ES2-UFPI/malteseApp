import React, { useState, useEffect } from 'react';
import { Modal } from 'react-native';
import { Icon } from '~/components/global';

import {
  OrderItemsList,
  OrderStatusContainer,
  Button,
  StarsRating,
} from '~/components/theme';
import api from '~/services/api';
import {
  Container,
  Title,
  ModalContainer,
  StarContainer,
  StarButton,
} from './styles';

const OrderDetails = ({ route }) => {
  const {
    orderId,
    clientId,
    providerId,
    orderStatus,
    orderItems,
  } = route.params;

  const [status, setStatus] = useState(orderStatus);
  const [orderData, setOrderData] = useState(orderStatus);
  const [modalVisible, setModalVisible] = useState(false);

  const [selectedStars, setSelectedStars] = useState(0);

  useEffect(() => {
    async function loadOrder() {
      const { data } = await api.get(`orders/${orderId}`);
      setOrderData(data);
      setSelectedStars(data.rating);
    }
    loadOrder();
  }, []);

  const handleAction = async () => {
    const response = await api
      .put(`orders/${orderId}/updateOrder`, {
        rating: selectedStars,
        status: 3,
      })
      .catch(err => console.log(err));
    setStatus(response.data.status);
    setModalVisible(!modalVisible);
  };

  return (
    <Container>
      <Title>{`Pedido ${orderId.substr(0, 6)}`}</Title>
      <OrderStatusContainer
        status={status}
        handleAction={() => setModalVisible(!modalVisible)}
        type="client"
        rating={selectedStars}
      />
      <Modal
        animationType="slide"
        visible={modalVisible}
        statusBarTranslucent
        onBackdropPress={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}
        backdropColor="white"
        backdropOpacity={0.8}
      >
        <ModalContainer>
          <Title>Avalie o seu pedido</Title>
          <StarsRating
            changeRating={setSelectedStars}
            isButton
            selectedStars={selectedStars}
          />
          <Button
            text="Avaliar"
            style={{ minWidth: 200 }}
            onPress={handleAction}
          />
        </ModalContainer>
      </Modal>
      <OrderItemsList data={orderData} />
    </Container>
  );
};

export default OrderDetails;
