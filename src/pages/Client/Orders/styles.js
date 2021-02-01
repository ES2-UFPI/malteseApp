import styled from 'styled-components/native';

import { CustomText } from '~/components/global';

export const Container = styled.View`
  flex: 1;
`;

export const OrdersList = styled.FlatList``;

export const Title = styled(CustomText)`
  margin: 20px;
  font-size: 20px;
`;

export const OrderStepsContainer = styled.View`
  align-self: center;
  margin: 8px;
`;

export const OrderContainer = styled.TouchableOpacity`
  align-self: center;
  border-radius: 10px;
  margin: 14px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const OrderId = styled(CustomText)`
  color: ${({ canceled, theme }) =>
    canceled ? theme.colors.grayDarker : theme.colors.dark};
`;

export const OrderTitle = styled(CustomText)`
  margin: 8px;
  flex-wrap: wrap;
`;

export const CanceledTitle = styled(CustomText)`
  color: ${({ theme }) => theme.colors.grayDarker};
  padding: 10px;
  align-self: center;
  font-family: ${({ theme }) => theme.fonts.secondary.regular};
`;
