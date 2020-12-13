import styled from 'styled-components/native';
import { CustomText } from '~/components/global';

export const Container = styled.TouchableOpacity.attrs()`
  align-items: center;
  padding: 10px;
  margin: 0px 10px;
  border-radius: 10px;
  min-width: 100px;
  max-width: 30%;
  background-color: ${({ theme }) => theme.colors.light};
`;

export const Image = styled.Image`
  width: 100px;
  height: 100px;
`;

export const Title = styled(CustomText)`
  margin-top: 10px;
`;
