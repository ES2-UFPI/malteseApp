import styled from 'styled-components/native';
import { CustomText } from '~/components/global';

export const Container = styled.View`
  height: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled(CustomText)`
  font-size: 20px;
  margin: 16px;
`;
