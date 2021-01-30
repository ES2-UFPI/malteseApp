import styled from 'styled-components/native';
import { CustomText } from '~/components/global';

export const FlatList = styled.FlatList``;

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 10px;
  margin: 0px 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const OrderItem = styled.View``;

export const ItemTitle = styled(CustomText)``;

export const Image = styled.Image`
  min-width: 150px;
  min-height: 150px;
`;

export const DetailsContainer = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: center;
`;

export const Title = styled(CustomText)`
  text-align: center;
  margin-bottom: 4px;
  font-family: ${({ theme }) => theme.fonts.secondary.medium};
`;

export const ProductStarsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const ProductStarsValue = styled(CustomText)`
  padding-right: 8px;
`;
export const Price = styled(CustomText)`
  margin-bottom: 4px;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.primary.medium};
`;
