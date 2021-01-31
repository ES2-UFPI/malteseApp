import styled from 'styled-components/native';
import { CustomText } from '~/components/global';

export const Container = styled.View`
  height: 100%;
  flex: 1;
`;

export const Title = styled(CustomText)`
  font-size: 18px;
  padding: 10px;
  align-self: center;
  color: ${({ theme }) => theme.colors.dark};
`;

export const OrderStatusContainer = styled.View`
  margin: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonContainer = styled.View`
  margin: 16px 0px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
