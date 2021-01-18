import React, { useState, createContext } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const getMockedData = type => {
    switch (type) {
      case 'client':
        return {
          _id: '5fff9741b9aa894028ac3fe1',
          name: 'João',
          user: '5fe0021ddba9cd1984b3cfc6',
          createdAt: '2021-01-14T00:58:41.612Z',
        };
      case 'provider':
        return {
          _id: '5fff97b5b9aa894028ac3fe2',
          name: 'JoãoBAR',
          user: '5fe0021ddba9cd1984b3cfc6',
          products: [
            {
              "_id": "5ffffd5d10fbd13fcc2177a3",
              "product": "5fe0091a54262e03d4beb0e2",
              "quantity": 1000,
              "status": "active"
            }
          ],
          createdAt: '2021-01-14T01:00:37.285Z',
        };
      case 'deliverer':
        return {
          _id: '5ffffba315eb082ff0debc64',
          name: 'JoãoENTREGAS',
          user: '5fe0021ddba9cd1984b3cfc6',
          createdAt: '2021-01-14T08:06:59.477Z',
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
