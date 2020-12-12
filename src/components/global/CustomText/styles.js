import styled from 'styled-components/native';

export const Text = styled.Text`
  font-family: ${({ theme, primaryFont }) =>
    primaryFont ? theme.fonts.primary.regular : theme.fonts.secondary.regular};
`;
