import styled from 'styled-components/native';
import { CustomText } from '~/components/global';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 4px;
  margin: 16px 10px;
  border-radius: 10px;
  min-height: 200px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Image = styled.Image`
  width: 40%;
  height: 100%;
`;

export const DetailsContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled(CustomText)`
  text-align: center;
  margin-bottom: 4px;
  font-family: ${({ theme }) => theme.fonts.secondary.medium};
`;

export const ProductStarsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const ProductStarsValue = styled(CustomText)`
  padding-right: 8px;
`;
export const Price = styled(CustomText)`
  margin-bottom: 4px;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.primary.medium};
`;
