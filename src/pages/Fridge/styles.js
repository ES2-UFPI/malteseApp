import styled from 'styled-components/native';
import { CustomText } from '~/components/global';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
`;

export const Title = styled(CustomText)`
  padding: 10px;
  font-size: 22px;
`;

export const ProductsList = styled.FlatList`
  flex: 1;
`;

export const TotalContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TotalValueContainer = styled.View``;

export const TotalTitle = styled(CustomText)`
  font-family: ${({ theme }) => theme.fonts.secondary.light};
`;

export const TotalValue = styled(CustomText)`
  font-size: 18px;
`;

export const CheckoutButton = styled.TouchableOpacity`
  padding: 10px;
  margin: 0px 5px;
  border-radius: 10px;
  align-items: center;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const CheckoutButtonText = styled(CustomText)`
  color: ${({ theme }) => theme.colors.light};
`;
