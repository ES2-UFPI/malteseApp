import React from 'react';
import { Container, Text } from './styles';

const Button = ({
  primaryButton = false,
  primaryFont = false,
  text,
  children,
  ...rest
}) => {
  return (
    <Container {...rest} primaryButton={primaryButton}>
      <Text primaryFont={primaryFont}>{text}</Text>
      {children}
    </Container>
  );
};

export default Button;
