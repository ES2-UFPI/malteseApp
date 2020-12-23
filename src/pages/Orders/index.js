import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Title,
  OrderContainer,
  OrderStepsContainer,
  OrderId,
  OrderImage,
  OrderTitle,
  OrderPrice,
} from './styles';
import OrderSteps from '~/components/orders/OrderSteps';
import boxShadow from '~/constants/boxShadow';

const Orders = () => {
  const navigation = useNavigation();

  const OrderedProduct = ({ orderId, activeStep }) => (
    <OrderContainer
      style={boxShadow.default}
      onPress={() => {
        navigation.navigate('OrderDetails', { orderId });
      }}
    >
      <OrderId>#123</OrderId>
      <OrderTitle primaryFont>Cerveja Cerveja Cerveja</OrderTitle>
      <OrderStepsContainer>
        <OrderSteps activeStep={activeStep} />
      </OrderStepsContainer>
    </OrderContainer>
  );
  return (
    <Container>
      <OrderedProduct activeStep={1} />
      <OrderedProduct activeStep={2} />
      <OrderedProduct activeStep={3} />
    </Container>
  );
};

export default Orders;
