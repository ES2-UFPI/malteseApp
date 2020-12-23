import React, { useContext, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';
import { FridgeContext } from '~/context/FridgeProvider';
import { Product } from '~/components/fridge';
import { Icon } from '~/components/global';
import { Button, Modal } from '~/components/theme';
import {
  Container,
  Title,
  ProductsList,
  MapContainer,
  TotalContainer,
  TotalValueContainer,
  TotalTitle,
  TotalValue,
  ConfirmOrderContainer,
  ConfirmOrderTitle,
  ConfirmOrderText,
  ConfirmOrderButtonContainer,
  EmptyStateContainer,
  EmptyStateTitle,
} from './styles';

const Fridge = () => {
  const {
    coordinates,
    fridgeItens,
    fridgeTotalValue,
    handleDecreaseProduct,
    handleIncreaseProduct,
  } = useContext(FridgeContext);

  const [orderAddress, setOrderAddress] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleToogleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleFinishOrder = async () => {
    if (orderAddress === '') {
      const response = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${
          coordinates.longitude
        },${
          coordinates.latitude
        }.json?access_token=${'pk.eyJ1Ijoid2VuZGVyc29ucCIsImEiOiJja2l4cmowN24wbWI0MnhydHBnODI1YmpkIn0.dVniQqqj-BS3V27qCw6ZBA'}&types=address`,
      );
      setOrderAddress(response.data.features[0].place_name);
    }

    handleToogleModal();
  };

  const handleCompleteOrder = async () => {
    alert('Pedido completado');
  };
  return (
    <Container>
      <Title primaryFont>Sua geladeira</Title>
      {fridgeItens.length > 0 ? (
        <>
          <ProductsList
            data={fridgeItens}
            keyExtractor={item => item._id}
            renderItem={({ item }) => (
              <Product
                product={item}
                handleIncreaseProduct={() => handleIncreaseProduct(item)}
                handleDecreaseProduct={() => handleDecreaseProduct(item)}
              />
            )}
          />
          <MapContainer>
            <Title primaryFont>Endereço</Title>
            {coordinates && (
              <MapView
                region={coordinates}
                style={{
                  flex: 1,
                  maxHeight: 300,
                  padding: 10,
                  marginBottom: 20,
                  borderRadius: 20,
                }}
                showsUserLocation
                showsMyLocationButton
                moveOnMarkerPress
              >
                <Marker coordinate={coordinates} />
              </MapView>
            )}
          </MapContainer>
          <TotalContainer>
            <TotalValueContainer>
              <TotalTitle>Total</TotalTitle>
              <TotalValue>{`R$ ${fridgeTotalValue.toFixed(2)}`}</TotalValue>
            </TotalValueContainer>
            <Button
              onPress={() => handleFinishOrder()}
              text="Finalizar Pedido"
              primaryFont
              primaryButton
            >
              <Icon name="arrow-forward" color="#fff" size={14} />
            </Button>
          </TotalContainer>
          <Modal
            modalVisible={modalVisible}
            handleCloseModal={handleToogleModal}
          >
            <ConfirmOrderContainer>
              <Title>Quer fechar o pedido ?</Title>
              <ConfirmOrderTitle>Valor Total:</ConfirmOrderTitle>
              <ConfirmOrderText>{`R$ ${fridgeTotalValue}`}</ConfirmOrderText>
              <ConfirmOrderTitle>Endereço:</ConfirmOrderTitle>
              <ConfirmOrderText>{orderAddress}</ConfirmOrderText>
              <ConfirmOrderButtonContainer>
                <Button
                  onPress={handleToogleModal}
                  text="Cancelar"
                  primaryFont
                />
                <Button
                  onPress={() => handleCompleteOrder()}
                  text="Confirmar Pedido"
                  primaryButton
                  primaryFont
                />
              </ConfirmOrderButtonContainer>
            </ConfirmOrderContainer>
          </Modal>
        </>
      ) : (
        <EmptyStateContainer>
          <Icon name="fridge-off" color="#bbb" size={50} communityIcons />
          <EmptyStateTitle>
            Opa, parece que a sua geladeira está desligada, adicione umas
            cervejas pra ela ligar ;)
          </EmptyStateTitle>
        </EmptyStateContainer>
      )}
    </Container>
  );
};

export default Fridge;
