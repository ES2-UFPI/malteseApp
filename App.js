import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import AppProvider from '~/context/AppProvider';
import Routes from '~/routes';
import theme from '~/constants/theme';

function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <AppProvider>
          <Routes />
        </AppProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
