import React from 'react';

import { FridgeProvider } from './FridgeProvider';

const AppProvider = ({ children }) => (
  <FridgeProvider>{children}</FridgeProvider>
);
export default AppProvider;
