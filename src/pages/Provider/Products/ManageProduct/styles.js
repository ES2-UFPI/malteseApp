import styled from 'styled-components/native';
import { CustomText } from '~/components/global';

export const Container = styled.View`
  height: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const HeaderContainer = styled.View`
  width: 90%;
  flex-direction: row;
  padding: 8px;
  align-items: center;
  justify-content: space-between;
`;

export const DeleteButton = styled.TouchableOpacity``;

export const Title = styled(CustomText)`
  margin: 16px;
  font-size: 22px;
`;

export const Input = styled.TextInput`
  text-align: center;
  width: 80%;
  margin: 16px;
  padding: 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray};
  font-size: 16px;
`;
