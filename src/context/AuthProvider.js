import React, { useState, createContext } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleLogin = type => {
    // Dados mockados de 3 users aqui
    setUser({ name: 'João', type });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        handleLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
