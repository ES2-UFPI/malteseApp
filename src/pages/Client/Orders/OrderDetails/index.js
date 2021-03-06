import React, { useState } from 'react';
import { Modal } from 'react-native';
import useScreenFocus from '~/hooks/useScreenFocus';

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
  AddressContainer,
  AddressTitle,
  AddressDetails,
} from './styles';

const OrderDetails = ({ route }) => {
  const { orderId, orderStatus } = route.params;

  const [status, setStatus] = useState(orderStatus);
  const [orderData, setOrderData] = useScreenFocus(loadOrder);
  const [modalVisible, setModalVisible] = useState(false);

  const [selectedStars, setSelectedStars] = useState(0);

  async function loadOrder() {
    const { data } = await api.get(`orders/${orderId}`);
    setOrderData(data);
    setSelectedStars(data.rating);
  }

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

  const handleCancelOrder = async () => {
    const response = await api
      .put(`orders/${orderId}/updateOrder`, {
        status: -1,
      })
      .catch(err => console.log(err));
    setStatus(response.data.status);
  };
  return (
    <Container>
      <Title>{`Pedido ${orderId.substr(0, 6)}`}</Title>
      {orderData?.address && (
        <AddressContainer>
          <AddressTitle>A ser entregue em:</AddressTitle>
          <AddressDetails>{orderData?.address}</AddressDetails>
        </AddressContainer>
      )}
      <OrderStatusContainer
        status={status}
        handleAction={() => setModalVisible(!modalVisible)}
        type="client"
        rating={selectedStars}
        handleCancelOrder={handleCancelOrder}
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
