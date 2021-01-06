import styled from 'styled-components/native';
import { CustomText } from '~/components/global';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  align-self: center;
  height: 100%;
`;

export const Title = styled(CustomText)`
  padding: 10px;
`;

export const ButtonContainer = styled.View`
  margin: 16px;
  flex-direction: row;
`;
