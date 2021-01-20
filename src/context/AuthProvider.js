import React, { useState, createContext } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const getMockedData = type => {
    switch (type) {
      case 'client':
        return {
          "_id": "6005c8d8a0a4f0190c076fdb",
          "name": "João",
          "user": "6005c8baa0a4f0190c076fda",
          "createdAt": "2021-01-18T17:43:52.806Z",
          "__v": 0
        };
      case 'provider':
        return {
          "_id": "6005c8efa0a4f0190c076fdc",
          "name": "JoãoBar",
          "user": "6005c8baa0a4f0190c076fda",
          "products": [],
          "createdAt": "2021-01-18T17:44:15.419Z",
          "__v": 0
        };
      case 'deliverer':
        return {
          "_id": "6005c90aa0a4f0190c076fdd",
          "name": "JoãoEntregas",
          "user": "6005c8baa0a4f0190c076fda",
          "createdAt": "2021-01-18T17:44:42.207Z",
          "__v": 0
        };
      default:
        break;
    }
  };

  const handleLogin = type => {
    // Dados mockados de 3 users aqui
    const mockedData = getMockedData(type);
    setUser({ ...mockedData, type });
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
