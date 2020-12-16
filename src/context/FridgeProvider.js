import React, { useEffect, useState, createContext } from 'react';
import { Alert } from 'react-native';

export const FridgeContext = createContext({});

export const FridgeProvider = ({ children }) => {
  const [fridgeItens, setFridgeItens] = useState([]);
  const [fridgeTotalValue, setFridgeTotalValue] = useState(0.0);
  const [fridgeTotalQuantity, setFridgeTotalQuantity] = useState(0);

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

  const handleAddProductInFridge = product => {
    const productInFridge = fridgeItens.find(item => product._id === item._id);

    if (productInFridge) {
      handleIncreaseProduct(product);
    } else {
      setFridgeItens([{ ...product, quantity: 1 }]);
    }
  };

  useEffect(() => {
    const totalValue = fridgeItens
      .reduce((previous, current) => previous + current.total, 0)
      .toFixed(2);
    setFridgeTotalValue(totalValue);

    const totalQuantity = fridgeItens.reduce(
      (previous, current) => previous + current.quantity,
      0,
    );
    setFridgeTotalQuantity(totalQuantity);
  }, [fridgeItens]);

  return (
    <FridgeContext.Provider
      value={{
        fridgeItens,
        fridgeTotalValue,
        fridgeTotalQuantity,
        handleDecreaseProduct,
        handleIncreaseProduct,
        handleAddProductInFridge,
      }}
    >
      {children}
    </FridgeContext.Provider>
  );
};
