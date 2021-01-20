import styled from 'styled-components/native';
import { CustomText } from '~/components/global';

export const Container = styled.View`
  flex: 1;
  margin: 20px;
`;

export const SearchBarContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding-left: 2%;
  padding-right: 10%;
  height: 50px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const SearchBarInput = styled.TextInput`
  padding: 0px 20px;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const ItemListContainer = styled.FlatList`
  width: 100%;
  padding: 10px 10px;
`;

export const ItemContainer = styled.TouchableOpacity`
  width: 98%;
  flex-direction: row;
  background-color: #fff;
  border-radius: 25px;
  padding: 15px;
  margin: 10px auto;
  justify-content: center;
`;

export const EmptyText = styled(CustomText)`
  margin-top: 100px;
  align-self: center;
  color: #aaa;
`;
