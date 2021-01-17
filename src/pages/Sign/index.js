import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '~/context/AuthProvider';

import bg from '~/assets/bg.jpg';
import bg2 from '~/assets/bg2.jpg';
import bg3 from '~/assets/bg3.jpg';

import {
  Container,
  Image,
  Title,
  LoginButton,
  LoginButtonText,
} from './styles';

const Sign = () => {
  const backgroundList = [bg, bg2, bg3];
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const { handleLogin } = useContext(AuthContext);

  useEffect(() => {
    const timer = setInterval(() => {
      if (backgroundIndex < backgroundList.length - 1) {
        setBackgroundIndex(backgroundIndex + 1);
      } else {
        setBackgroundIndex(0);
      }
    }, 4000);
    return () => clearInterval(timer);
  });

  const LoginButtonComponent = ({ text, type }) => (
    <LoginButton
      onPress={() => {
        handleLogin(type);
      }}
    >
      <LoginButtonText>{text}</LoginButtonText>
    </LoginButton>
  );

  return (
    <Container>
      <Image source={backgroundList[backgroundIndex]} resizeMode="cover" />
      <Title primaryFont>Bem vindo a sua nova experiência</Title>
      <LoginButtonComponent text="Login como Cliente" type="client" />
      <LoginButtonComponent text="Login como Fornecedor" type="provider" />
      <LoginButtonComponent text="Login como Entregador" type="deliverer" />
    </Container>
  );
};

export default Sign;
