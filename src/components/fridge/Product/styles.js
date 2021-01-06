import styled from 'styled-components/native';
import { CustomText } from '~/components/global';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px 8px;
  margin-bottom: 6px;
  border-radius: 10px;
  background-color: #fff;
`;

export const Image = styled.Image`
  width: 70px;
  height: 70px;
`;

export const Details = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled(CustomText)`
  max-width: 40%;
  margin-left: 8px;
  font-size: 16px;
  flex-wrap: wrap;
`;

export const Price = styled(CustomText)``;

export const QuantityContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Quantity = styled(CustomText)``;

export const QuantityButton = styled.TouchableOpacity`
  padding: 5px 10px;
  margin: 0px 5px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.light};
`;

export const QuantityButtonText = styled(CustomText)`
  margin: 0px 5px;
`;
