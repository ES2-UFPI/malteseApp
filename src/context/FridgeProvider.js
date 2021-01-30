import React, { useEffect, useState, createContext } from 'react';
import { Alert, PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import api from '~/services/api';

export const FridgeContext = createContext({});

export const FridgeProvider = ({ children }) => {
  const [fridgeItens, setFridgeItens] = useState([]);
  const [fridgeTotalValue, setFridgeTotalValue] = useState(0.0);
  const [fridgeTotalQuantity, setFridgeTotalQuantity] = useState(0);
  const [coordinates, setCoordinates] = useState(null);

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
      setFridgeItens([
        ...fridgeItens,
        { ...product, quantity: 1, total: product.price },
      ]);
    }
  };

  const handleCloseOrder = async () => {
    const response = await api
      .post('/orders', {
        client: '5fe0021ddba9cd1984b3cfc6',
        provider: fridgeItens[0].storeId,
        items: fridgeItens,
        status: 0,
      })
      .then(() => {
        setFridgeItens([]);
        setFridgeTotalQuantity(0);
        setFridgeTotalValue(0);
      })
      .catch(error => alert('Aconteceu um erro no pedido'));
  };

  const verifyGeolocationPermission = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Geolocalização',
        message:
          'O maltese precisa da sua localização para fazer a entrega da sua bebida ;)',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }
    return false;
  };
  const getCoordinates = () => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setCoordinates({
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      },
      erro => {
        alert(`Erro: ${erro.message}`);
      },
      {
        accuracy: { android: 'high' },
        enableHighAccuracy: true,
        timeout: 12000,
        maximumAge: 1000,
      },
    );
  };

  useEffect(() => {
    const totalValue = fridgeItens.reduce(
      (previous, current) => previous + current.total,
      0,
    );
    setFridgeTotalValue(totalValue);

    const totalQuantity = fridgeItens.reduce(
      (previous, current) => previous + current.quantity,
      0,
    );
    setFridgeTotalQuantity(totalQuantity);
  }, [fridgeItens]);

  useEffect(() => {
    if (!coordinates) {
      const permissionIsGranted = verifyGeolocationPermission();
      if (permissionIsGranted) {
        getCoordinates();
      }
    }
  }, []);

  return (
    <FridgeContext.Provider
      value={{
        fridgeItens,
        fridgeTotalValue,
        fridgeTotalQuantity,
        handleDecreaseProduct,
        handleIncreaseProduct,
        handleAddProductInFridge,
        handleCloseOrder,
        coordinates,
      }}
    >
      {children}
    </FridgeContext.Provider>
  );
};
