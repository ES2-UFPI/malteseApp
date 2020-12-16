import React, { useEffect, useState, createContext } from 'react';
import { Alert } from 'react-native';

export const FridgeContext = createContext({});

export const FridgeProvider = ({ children }) => {
  const [fridgeItens, setFridgeItens] = useState([
    {
      _id: '123',
      quantity: 12,
      title: 'Breja',
      price: 10.2,
      total: 122.4,
      stock: 100,
      image: 'https://loja.salvacraftbeer.com.br/anexos/produtos/0014788.png',
    },
    {
      _id: '1234',
      quantity: 5,
      title: 'Breja',
      price: 10.2,
      total: 51.0,
      stock: 100,
      image: 'https://loja.salvacraftbeer.com.br/anexos/produtos/0014788.png',
    },
    {
      _id: '12354',
      quantity: 1,
      title: 'Breja',
      price: 10.2,
      total: 10.2,
      stock: 100,
      image: 'https://loja.salvacraftbeer.com.br/anexos/produtos/0014788.png',
    },
  ]);
  const [fridgeTotal, setFridgeTotal] = useState(0.0);

  const handleIncreaseProduct = product => {
    const updatedProducts = fridgeItens.map(item => {
      if (product._id === item._id) {
        const updatedQuantity = item.quantity + 1;

        if (product.stock >= updatedQuantity) {
          const total = parseFloat(
            (product.price * updatedQuantity).toFixed(2),
          );

          return {
            ...item,
            quantity: updatedQuantity,
            total,
          };
        }
        alert('Produto atingiu o estoque');
      }
      return item;
    });
    setFridgeItens(updatedProducts);
  };

  const handleRemoveFromFridge = product => {
    Alert.alert('', `Você quer tirar a ${product.title} da geladeira ?`, [
      {
        text: 'Nunca',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Sim :/',
        onPress: () => {
          const updatedProducts = fridgeItens.filter(
            item => item._id !== product._id,
          );
          setFridgeItens(updatedProducts);
        },
      },
    ]);
  };

  const handleDecreaseProduct = product => {
    const updatedProducts = fridgeItens.map(item => {
      if (product._id === item._id) {
        const updatedQuantity = item.quantity - 1;

        if (updatedQuantity >= 1) {
          const total = parseFloat(
            (product.price * updatedQuantity).toFixed(2),
          );
          return {
            ...item,
            quantity: updatedQuantity,
            total,
          };
        }
        handleRemoveFromFridge(product);
      }
      return item;
    });
    setFridgeItens(updatedProducts);
  };

  useEffect(() => {
    const total = fridgeItens
      .reduce((previous, current) => previous + current.total, 0)
      .toFixed(2);
    setFridgeTotal(total);
  }, [fridgeItens]);

  return (
    <FridgeContext.Provider
      value={{
        fridgeItens,
        fridgeTotal,
        handleDecreaseProduct,
        handleIncreaseProduct,
      }}
    >
      {children}
    </FridgeContext.Provider>
  );
};
