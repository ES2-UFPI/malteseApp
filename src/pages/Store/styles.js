import styled from 'styled-components/native';
import { CustomText } from '~/components/global';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled(CustomText)``;

export const ProductList = styled.FlatList`
  flex: 1;
  width: 100%;
`;
