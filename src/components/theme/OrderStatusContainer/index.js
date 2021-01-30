import React from 'react';
import { Icon } from '~/components/global';

import { Container, Title } from './styles';
import colors from '~/constants/colors';
import Button from '../Button';
import StarsRating from '../StarsRating';

const OrderStatusContainer = ({ status, rating, handleAction, type }) => {
  return (
    <>
      <Container>
        {status === 0 && <Title>Pedido esperando aprovação!</Title>}
      </Container>

      {status > 0 && (
        <Container>
          <Title done>Pedido aprovado</Title>
          <Icon name="checkbox" color={colors.grayDarker} />
        </Container>
      )}
      <Container>
        {status === 1 && <Title>Esperando entregador</Title>}
      </Container>
      {status > 1 && (
        <Container>
          <Title done>Pedido em rota de entrega</Title>
          <Icon name="checkbox" color={colors.grayDarker} />
        </Container>
      )}
      {status === 2 && (
        <Container>
          <Title>Pedido na rota</Title>
          {type === 'client' && (
            <Button
              text="Confirmar entrega"
              primaryButton
              onPress={() => handleAction()}
            />
          )}
        </Container>
      )}
      {status === 3 && (
        <Container>
          <Title done>Pedido Concluido</Title>
          <StarsRating selectedStars={rating} />
        </Container>
      )}
    </>
  );
};

export default OrderStatusContainer;
