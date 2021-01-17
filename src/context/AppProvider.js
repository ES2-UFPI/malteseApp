import React from 'react';

import { FridgeProvider } from './FridgeProvider';
import { AuthProvider } from './AuthProvider';

const AppProvider = ({ children }) => (
  <AuthProvider>
    <FridgeProvider>{children}</FridgeProvider>
  </AuthProvider>
);
export default AppProvider;
