import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { LogBox } from 'react-native';
import AppProvider from '~/context/AppProvider';
import Routes from '~/routes';
import theme from '~/constants/theme';
import { navigationRef } from '~/routes/RootNavigation';

function App() {
  LogBox.ignoreAllLogs();
  return (
    <NavigationContainer ref={navigationRef}>
      <ThemeProvider theme={theme}>
        <AppProvider>
          <Routes />
        </AppProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
