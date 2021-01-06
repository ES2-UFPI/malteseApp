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

export const ProductsList = styled.FlatList``;

export const MapContainer = styled.View`
  flex: 5;
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

export const ConfirmOrderContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ConfirmOrderButtonContainer = styled.View`
  margin: 16px 0px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ConfirmOrderTitle = styled(CustomText)`
  margin-bottom: 4px;
  font-family: ${({ theme }) => theme.fonts.secondary.medium};
`;

export const ConfirmOrderText = styled(CustomText)`
  margin-bottom: 16px;
`;

export const EmptyStateContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const EmptyStateTitle = styled(CustomText)`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.primary.light};
`;
