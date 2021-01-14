import styled from 'styled-components/native';
import { CustomText } from '~/components/global';

export const Container = styled.View`
  flex: 1;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.light};
`;

export const Image = styled.Image`
  width: 100%;
  height: 55%;
  margin-bottom: 40px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`;

export const Title = styled(CustomText)`
  text-align: center;
  font-size: 24px;
  margin-bottom: 40px;
`;

export const LoginButton = styled.TouchableOpacity`
  justify-content: center;
  margin: 10px;
  padding: 16px;
  border-radius: 10px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.primary};
`;

export const LoginButtonText = styled(CustomText)`
  text-align: center;
`;
