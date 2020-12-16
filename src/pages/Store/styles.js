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
