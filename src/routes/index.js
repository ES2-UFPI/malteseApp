import React, { useContext } from 'react';
import AuthRoutes from './auth.routes';
import ClientRoutes from './client.routes';
import DelivererRoutes from './deliverer.routes';
import ProviderRoutes from './provider.routes';

import { AuthContext } from '~/context/AuthProvider';

const Routes = () => {
  const { user } = useContext(AuthContext);
  if (user?.type) {
    switch (user.type) {
      case 'client':
        return <ClientRoutes />;
      case 'deliverer':
        return <DelivererRoutes />;
      case 'provider':
        return <ProviderRoutes />;
      default:
        return <AuthRoutes />;
    }
  } else {
    return <AuthRoutes />;
  }
};

export default Routes;
