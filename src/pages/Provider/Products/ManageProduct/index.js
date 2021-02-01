import React, { useState, useContext, useEffect } from 'react';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
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

const Home = ({ route }) => {
  const navigation = useNavigation();
  const [product, setProduct] = useState(null);
  const [pageType, setPageType] = useState('edit');

  const { user } = useContext(AuthContext);

  const handleAddProduct = async values => {
    const data = JSON.stringify(values);
    console.log(`Add request:\n${data}`);

    const providerId = user._id;
    const newProduct = await api.post(`/providers/${providerId}/addProducts`, {
      name: values.name,
      description: values.description,
      price: parseFloat(values.price),
      quantity: parseInt(values.quantity),
    });
    if (!newProduct) {
      console.error('Failed to create product!');
      return;
    }
    console.log('Creation success!');
    navigation.navigate(`Products`);
  };

  const handleEditProduct = async values => {
    // Atualizar nome, descrição, preço e quantidade
    const data = JSON.stringify(product);

    const providerId = user._id;
    const productId = values.id;
    const updatedItem = await api.put(`/providers/${providerId}/${productId}`, {
      name: values.name,
      description: values.description,
      price: parseFloat(values.price),
      quantity: parseInt(values.quantity),
    });
    if (!updatedItem) {
      console.error('Failed to update product!');
      return;
    }
    navigation.navigate(`Products`);
  };

  const handleDeleteProduct = async () => {
    const providerId = user._id;
    const productId = product?.id;
    if (!productId) {
      console.error("Missing product's id parameter!");
    }

    const result = await api.delete(`/providers/${providerId}/${productId}`);
    if (!result) {
      console.error('Failed to delete product!');
    }
    navigation.navigate(`Products`);
  };

  const handleFormSubmit = async values => {
    console.log(`Submitting values: ${JSON.stringify(values)}`);

    if (
      !values.name ||
      !values.description ||
      !values.price ||
      !values.quantity ||
      (!values.id && pageType != 'add')
    ) {
      console.error('Missing product information form values.');
      return;
    }

    if (pageType === 'add') {
      await handleAddProduct(values);
    } else {
      await handleEditProduct(values);
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
    return product?.name
      ? `Produto #${product._id.substr(0, 6)}`
      : 'Cadastro de Produto';
  };

  return (
    <Container>
      <HeaderContainer>
        <Title>{renderName()}</Title>
        {product ? (
          <DeleteButton onPress={handleDeleteProduct}>
            <Icon name="trash" size={20} color="#ff0000" />
          </DeleteButton>
        ) : (
          <DeleteButton>
            <Icon name="trash" size={20} color="#ccc" />
          </DeleteButton>
        )}
      </HeaderContainer>
      <Formik
        enableReinitialize
        initialValues={{
          id: product?._id,
          name: product?.name,
          description: product?.description,
          price: product?.price,
          quantity: product?.quantity,
        }}
        onSubmit={values => handleFormSubmit(values)}
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
                text={product ? 'Editar' : 'Cadastrar'}
                primaryFont
                primaryButton
                onPress={handleSubmit}
              />
            </>
          );
        }}
      </Formik>
    </Container>
  );
};

export default Home;
