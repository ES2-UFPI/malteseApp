import React, { useState, useContext, useEffect } from 'react';
import { Formik } from 'formik';
import { AuthContext } from '~/context/AuthProvider';

import api from '~/services/api';

import { Button } from '~/components/theme';
import {
  Container,
  HeaderContainer,
  Title,
  DeleteButton,
  Input,
} from './styles';
import { Icon } from '~/components/global';

import { useNavigation } from '@react-navigation/native';

const Home = ({ route }) => {
  const navigation = useNavigation();
  const [product, setProduct] = useState(null);
  const [pageType, setPageType] = useState('edit');

  const { user } = useContext(AuthContext);

  const handleAddProduct = async (values) => {
    const data = JSON.stringify(values);
    console.log("Add request:\n" + data);

    const providerId = user._id;
    const newProduct = await api.post(`/providers/${providerId}/addProducts`, { name: values.name, description: values.description, price: parseFloat(values.price), quantity: parseInt(values.quantity) });
    if (!newProduct) {
      console.error("Failed to create product!");
      return;
    }
  };

  const handleEditProduct = async (values) => {
    const data = JSON.stringify(product);
    console.log("Edit request:\n" + data);

    const providerId = user._id;
    const updatedItem = await api.put(`/providers/products`, {
      provider_id: providerId,
      product_id: values.id,
      quantity: parseInt(values.quantity)
    });
    if (!updatedItem) {
      console.error("Failed to update product!");
      return;
    }
  };

  const handleDeleteProduct = async () => {
    if (product?.id) {
      console.log('deletar produto aqui: ' + product?.id);
    }
  };

  const handleFormSubmit = async (values, afterChange) => {
    console.log(`Submitting values:\n${JSON.stringify(values)}`)
  

    if (!values.name || !values.description || !values.price || !values.quantity || (!values.id && pageType != "add")) {
      console.error("Missing product information form values.");
      return;
    }

    if (pageType === 'add') {
      await handleAddProduct(values);
    } else {
      await handleEditProduct(values);
    }
    if (navigation.canGoBack()) {
      navigation.goBack();
      afterChange(true);
    }
  };

  useEffect(() => {
    if (route.params?.product) {
      setProduct(route.params.product);
      setPageType('edit');
    } else {
      setPageType('add');
    }
  }, []);

  const renderName = () => {
    return ((product?.name) ? "Editando produto" : "Cadastro de Produto");
  }

  return (
    <Container>
      <HeaderContainer>
        <Title>{renderName()}</Title>
        {
          (product) ? (
            <DeleteButton onPress={handleDeleteProduct}>
              <Icon name="trash" size={20} color="#ff0000" />
            </DeleteButton>
          ) : (
              <DeleteButton>
                <Icon name="trash" size={20} color="#ccc" />
              </DeleteButton>
            )
        }
      </HeaderContainer>
      <Formik
        enableReinitialize
        initialValues={{
          id: product?._id,
          name: product?.name,
          description: product?.description,
          price: product?.price,
          quantity: product?.quantity
        }}
        onSubmit={values => handleFormSubmit(values, route.params.afterChange)}
      >
        {({ handleChange, handleSubmit, values }) => {
          return (
            <>
              <Input
                defaultValue={product?.name}
                onChangeText={handleChange('name')}
                placeholder="Nome"
                value={values.name}
              />
              <Input
                defaultValue={product?.description}
                onChangeText={handleChange('description')}
                placeholder="Descrição"
                multiline
                value={values.description}
              />
              <Input
                defaultValue={product?.price.toString()}
                keyboardType="numeric"
                onChangeText={handleChange('price')}
                placeholder="Preço"
                value={values.price}
              />
              <Input
                defaultValue={product?.quantity.toString()}
                keyboardType="numeric"
                onChangeText={handleChange('quantity')}
                placeholder="Quantidade"
                value={values.quantity}
              />
              <Button
                text={(product) ? "Editar" : "Cadastrar"}
                primaryFont
                primaryButton
                onPress={handleSubmit}
              />
            </>
          )
        }}
      </Formik>
    </Container>
  );
};

export default Home;
