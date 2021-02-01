import styled from 'styled-components/native';
import { CustomText } from '~/components/global';

export const Container = styled.View`
  margin: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled(CustomText)`
  font-size: 18px;
  padding: 10px;
  align-self: center;
  color: ${({ theme, done }) =>
    done ? theme.colors.grayDarker : theme.colors.dark};
  font-family: ${({ theme, active }) =>
    active ? theme.fonts.primary.regular : theme.fonts.secondary.regular};
`;

export const CanceledTitle = styled(CustomText)`
  color: #a82a07;
  font-size: 18px;
  padding: 10px;
  align-self: center;
  font-family: ${({ theme, active }) =>
    active ? theme.fonts.primary.regular : theme.fonts.secondary.regular};
`;
