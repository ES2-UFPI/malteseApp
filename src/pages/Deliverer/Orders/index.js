import React, { useEffect, useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import api from '~/services/api';
import { AuthContext } from '~/context/AuthProvider';

import OrderSteps from '~/components/orders/OrderSteps';
import boxShadow from '~/constants/boxShadow';

import {
  Container,
  Title,
  OrdersList,
  OrderContainer,
  OrderStepsContainer,
  OrderId,
  OrderImage,
  OrderTitle,
  OrderPrice,
} from './styles';

const Orders = () => {
  const navigation = useNavigation();
  const [orders, setOrders] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const { user } = useContext(AuthContext);

  async function loadOrders() {
    const response = await api.get(`/orders`);
    // const parsedData = response.data.map(order => {
    //   console.log(order);
    //   if (order.status >= 2 && order !== undefined) {
    //     return order;
    //   }
    // });
    // console.log(parsedData);
    setOrders(response.data);
    setRefreshing(false);
  }

  useEffect(() => {
    loadOrders();
  }, []);

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
      <OrderId>{`#${orderId.substr(0, 6)}`}</OrderId>
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
