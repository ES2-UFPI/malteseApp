import styled from 'styled-components/native';
import { CustomText } from '~/components/global';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled(CustomText)``;

export const ProductListContainer = styled.View`
  flex: 1;
`;

export const SelectedProductsList = styled.FlatList`
  flex: 1;
`;

export const SelectedProductContainer = styled.View`
  flex-direction: row;
`;

export const SelectedProductImage = styled.Image`
  width: 50px;
  height: 50px;
`;

export const SelectedProductDetails = styled.View``;

export const SelectedProductText = styled(CustomText)``;

export const Button = styled.TouchableOpacity`
  padding: 10px;
  border-radius: 10px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const ButtonText = styled(CustomText)`
  color: ${({ theme }) => theme.colors.light};
`;
