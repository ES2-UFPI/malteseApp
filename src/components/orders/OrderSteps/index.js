import React from 'react';
import { Container, Step, StepRow, Line, StepLabel, Row } from './styles';

const OrderSteps = ({ activeStep }) => {
  return (
    <Container>
      <StepRow>
        <Step activeStep={activeStep >= 2} />
        <Line activeStep={activeStep >= 3} />
        <Step activeStep={activeStep >= 3} />
        <Line activeStep={activeStep >= 4} />
        <Step activeStep={activeStep >= 4} />
        <Line activeStep={activeStep >= 5} />
        <Step activeStep={activeStep >= 5} />
      </StepRow>
      <Row>
        <StepLabel>Pedido aceito</StepLabel>
        <StepLabel>Pedido pronto</StepLabel>
        <StepLabel>A caminho</StepLabel>
        <StepLabel>Entregue</StepLabel>
      </Row>
    </Container>
  );
};

export default OrderSteps;
