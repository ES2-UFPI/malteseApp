import styled from 'styled-components/native';
import CustomText from '../../global/CustomText';

export const Container = styled.TouchableOpacity`
  padding: 10px;
  margin: 0px 5px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${({ theme, primaryButton }) =>
    primaryButton ? theme.colors.primary : theme.colors.gray};
`;

export const Text = styled(CustomText)`
  color: ${({ theme }) => theme.colors.white};
`;
