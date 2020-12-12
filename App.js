import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import Routes from '~/routes';
import theme from '~/constants/theme';

function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
