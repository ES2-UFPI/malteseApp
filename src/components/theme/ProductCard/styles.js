import styled from 'styled-components/native';
import { CustomText } from '~/components/global';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin: 0px 10px;
  border-radius: 10px;
  height: 150px;
  background-color: ${({ theme }) => theme.colors.light};
`;

export const Image = styled.Image`
  width: 70%;
  height: 100%;
`;

export const DetailsContainer = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const Title = styled(CustomText)`
  margin-top: 10px;
`;

export const ProductStarsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const ProductStarsValue = styled(CustomText)`
  padding-right: 8px;
`;
