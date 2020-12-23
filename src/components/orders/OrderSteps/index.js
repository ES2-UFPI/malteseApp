import React from 'react';
import { Container, Step, StepRow, Line, StepLabel, Row } from './styles';

const OrderSteps = ({ activeStep }) => {
  return (
    <Container>
      <StepRow>
        <Step activeStep={activeStep >= 1} />
        <Line activeStep={activeStep >= 2} />
        <Step activeStep={activeStep >= 2} />
        <Line activeStep={activeStep >= 3} />
        <Step activeStep={activeStep >= 3} />
      </StepRow>
      <Row>
        <StepLabel>
          Pedido aceito
          {'\n'}
        </StepLabel>
        <StepLabel>A caminho</StepLabel>
        <StepLabel>Entregue</StepLabel>
      </Row>
    </Container>
  );
};

export default OrderSteps;
