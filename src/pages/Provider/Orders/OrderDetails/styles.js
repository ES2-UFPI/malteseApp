import styled from 'styled-components/native';
import { CustomText } from '~/components/global';

export const Container = styled.View`
  height: 100%;
  flex: 1;
`;

export const Title = styled(CustomText)`
  font-size: 18px;
  padding: 10px;
  align-self: center;
  color: ${({ theme }) => theme.colors.dark};
`;

export const ButtonContainer = styled.View`
  margin: 16px;
  flex-direction: row;
`;

export const AddressContainer = styled.View`
  margin: 16px;
`;

export const AddressTitle = styled(CustomText)`
  font-size: 16px;
  margin: 8px 0px;
`;

export const AddressDetails = styled(CustomText)``;
