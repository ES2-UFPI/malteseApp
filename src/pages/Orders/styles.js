import styled from 'styled-components/native';

import { CustomText } from '~/components/global';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Title = styled(CustomText)`
  margin: 20px;
  font-size: 20px;
`;

export const OrderStepsContainer = styled.View`
  align-self: center;
  margin: 8px;
`;

export const OrderContainer = styled.View`
  align-self: center;
  border-radius: 10px;
  margin: 14px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const OrderId = styled(CustomText)``;

export const OrderImage = styled.Image``;

export const OrderTitle = styled(CustomText)`
  margin: 8px;
  flex-wrap: wrap;
`;

export const OrderPrice = styled(CustomText)``;
