import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import api from '~/services/api';
import useScreenFocus from '~/hooks/useScreenFocus';
import OrderSteps from '~/components/orders/OrderSteps';
import boxShadow from '~/constants/boxShadow';

import {
  Container,
  Title,
  OrdersList,
  OrderContainer,
  OrderStepsContainer,
  OrderId,
  OrderTitle,
  CanceledTitle,
} from './styles';

const Orders = () => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);

  async function loadOrders() {
    const { data } = await api.get('orders');
    setOrders(data);
    setRefreshing(false);
  }

  const [orders, setOrders] = useScreenFocus(loadOrders);

  const OrderedProduct = ({
    orderId,
    activeStep,
    orderStatus,
    clientId,
    providerId,
    orderItems,
  }) => (
    <OrderContainer
      style={boxShadow.default}
      onPress={() => {
        navigation.navigate('OrderDetails', {
          orderId,
          orderStatus,
          clientId,
          providerId,
          orderItems,
        });
      }}
    >
      <OrderId canceled={orderStatus === -1}>
        {`#${orderId.substr(0, 6)} `}
        {orderStatus === -1 && <CanceledTitle>(Cancelado)</CanceledTitle>}
      </OrderId>
      <OrderTitle primaryFont>Cerveja</OrderTitle>
      <OrderStepsContainer>
        <OrderSteps activeStep={activeStep} />
      </OrderStepsContainer>
    </OrderContainer>
  );
  return (
    <Container>
      <OrdersList
        onRefresh={() => {
          setRefreshing(true);
          loadOrders();
        }}
        refreshing={refreshing}
        data={orders}
        renderItem={({ item }) => (
          <OrderedProduct
            key={item._id}
            activeStep={item.status}
            orderId={item._id}
            orderStatus={item.status}
            clientId={item.client}
            providerId={item.provider}
            orderItems={item.items}
          />
        )}
        keyExtractor={item => item.id}
      />
    </Container>
  );
};

export default Orders;
