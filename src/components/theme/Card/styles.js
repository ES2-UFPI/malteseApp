import styled from 'styled-components/native';
import { CustomText } from '~/components/global';

export const Container = styled.TouchableOpacity.attrs()`
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 16px 10px;
  border-radius: 10px;
  background-color: #fff;
`;

export const Image = styled.Image`
  flex: 1;
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;

export const Title = styled(CustomText)`
  margin-top: 10px;
`;
